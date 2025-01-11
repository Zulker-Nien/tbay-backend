import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddToCartDto } from '../dto/add-to-cart.dto';

@Injectable()
export class AddToCartProvider {
  constructor(private prisma: PrismaService) {}

  async addToCart(userId: string, input: AddToCartDto) {
    let cart = await this.prisma.cart.findFirst({
      where: { userId },
    });

    if (!cart) {
      cart = await this.prisma.cart.create({
        data: { userId },
      });
    }

    return this.prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: input.productId,
        type: input.type,
        rentalPeriod: input.rentalPeriod,
        startDate: input.startDate,
        endDate: input.endDate,
      },
      include: {
        cart: true,
        product: {
          include: {
            saleDetails: true,
            rentDetails: true,
          },
        },
      },
    });
  }
}
