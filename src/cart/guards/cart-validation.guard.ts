import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { CartItemTypes } from '../enums/cart-item-type.enum';
import { JwtPayload } from 'src/auth/interfaces/payload.interface';
import { Availability } from 'src/products/enums/availability.enum';
import { AddToCartDto } from '../dto/add-to-cart.dto';

@Injectable()
export class CartValidationGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { input } = ctx.getArgs();
    const jwtPayload = ctx.getContext().req.user as JwtPayload;

    const product = await this.validateProduct(input.productId);

    await this.validateUserCartState(jwtPayload.sub, input.productId);
    await this.validateQuantity(product, input.quantity);
    ctx.getContext().product = product;

    await this.validateAvailability(product, input.itemType);

    this.validateDates(input);

    return true;
  }

  private async validateProduct(productId: number) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      include: {
        saleDetails: true,
        rentDetails: true,
      },
    });

    if (!product) {
      throw new BadRequestException('Product not found');
    }

    if (product.available === Availability.OUTOFSTOCK) {
      throw new BadRequestException('Product is out of stock');
    }

    return product;
  }

  private async validateUserCartState(userId: string, productId: number) {
    const existingCartItem = await this.prisma.cart.findFirst({
      where: {
        userId,
        items: {
          some: {
            productId,
          },
        },
      },
      include: {
        items: {
          where: {
            productId,
          },
        },
      },
    });

    if (existingCartItem?.items.length > 0) {
      throw new BadRequestException('Product is already in your cart');
    }
  }

  private async validateQuantity(product: any, quantity: number) {
    if (quantity > product.quantity) {
      throw new BadRequestException(
        `Requested quantity exceeds available stock. Available: ${product.quantity}`,
      );
    }
  }

  private async validateAvailability(product: any, itemType: CartItemTypes) {
    if (itemType === CartItemTypes.BUY) {
      if (
        product.available !== Availability.SALE &&
        product.available !== Availability.BOTH
      ) {
        throw new BadRequestException(
          'This product is not available for purchase',
        );
      }
      if (!product.saleDetails) {
        throw new BadRequestException('Product has no sale details');
      }
    } else if (itemType === CartItemTypes.RENT) {
      if (
        product.available !== Availability.RENT &&
        product.available !== Availability.BOTH
      ) {
        throw new BadRequestException('This product is not available for rent');
      }
      if (!product.rentDetails) {
        throw new BadRequestException('Product has no rental details');
      }
    }
  }

  private validateDates(input: AddToCartDto) {
    if (input.itemType === CartItemTypes.RENT) {
      if (!input.startDate || !input.endDate) {
        throw new BadRequestException('Start date and end date are required');
      }

      const startDate = new Date(input.startDate);
      const endDate = new Date(input.endDate);

      if (startDate >= endDate) {
        throw new BadRequestException('End date must be after start date');
      }

      if (startDate < new Date()) {
        throw new BadRequestException('Start date cannot be in the past');
      }
    } else if (input.itemType === CartItemTypes.BUY) {
      if (input.startDate || input.endDate) {
        throw new BadRequestException(
          'Start date and end date should not be provided for purchase items',
        );
      }
    }
  }
}
