import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddToCartDto } from '../dto/add-to-cart.dto';
import { CartItemTypes } from '../enums/cart-item-type.enum';

@Injectable()
export class AddToCartProvider {
  constructor(private prisma: PrismaService) {}

  private calculateDays(startDate: Date, endDate: Date): number {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  async addToCart(userId: string, input: AddToCartDto) {
    let cart = await this.prisma.cart.findFirst({
      where: { userId },
      include: {
        items: true,
      },
    });

    if (!cart) {
      cart = await this.prisma.cart.create({
        data: {
          userId,
          totalPrice: 0,
        },
        include: {
          items: true,
        },
      });
    }

    const product = await this.prisma.product.findUnique({
      where: { id: input.productId },
      include: {
        saleDetails: input.itemType === CartItemTypes.BUY,
        rentDetails: input.itemType === CartItemTypes.RENT,
      },
    });

    let unitPrice: number;
    if (input.itemType === CartItemTypes.RENT) {
      const numberOfDays = this.calculateDays(input.startDate, input.endDate);
      unitPrice = product.rentDetails.price * numberOfDays;
    } else {
      unitPrice = product.saleDetails.price;
    }

    const itemTotalPrice = unitPrice * input.quantity;
    const newCartTotal = cart.totalPrice + itemTotalPrice;

    return this.prisma.$transaction(async (prisma) => {
      const cartItem = await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: input.productId,
          itemType: input.itemType,
          quantity: input.quantity,
          price: itemTotalPrice,
          startDate: input.startDate,
          endDate: input.endDate,
        },
        include: {
          product: {
            include: {
              saleDetails: input.itemType === CartItemTypes.BUY,
              rentDetails: input.itemType === CartItemTypes.RENT,
            },
          },
        },
      });

      const updatedCart = await prisma.cart.update({
        where: { id: cart.id },
        data: { totalPrice: newCartTotal },
        include: {
          items: {
            include: {
              product: {
                include: {
                  saleDetails: true,
                  rentDetails: true,
                },
              },
            },
          },
          user: true,
        },
      });

      return {
        ...cartItem,
        cart: updatedCart,
      };
    });
  }
}
