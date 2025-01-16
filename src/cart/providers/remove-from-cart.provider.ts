import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RemoveFromCartProvider {
  constructor(private prisma: PrismaService) {}

  async removeFromCart(userId: string, cartItemId: number) {
    const cartItem = await this.prisma.cartItem.findUnique({
      where: { id: cartItemId },
      include: {
        cart: {
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
          },
        },
      },
    });

    if (!cartItem || cartItem.cart.userId !== userId) {
      throw new NotFoundException('Cart item not found');
    }

    return this.prisma.$transaction(async (prisma) => {
      // Delete the cart item first
      await prisma.cartItem.delete({
        where: { id: cartItemId },
      });

      // Check remaining items directly from the database
      const remainingItemsCount = await prisma.cartItem.count({
        where: {
          cartId: cartItem.cart.id,
        },
      });

      if (remainingItemsCount === 0) {
        // Delete the cart if there are no remaining items
        await prisma.cart.delete({
          where: { id: cartItem.cart.id },
        });

        // Return empty cart structure
        return {
          id: cartItem.cart.id,
          userId: userId,
          totalPrice: 0,
          items: [],
        };
      }

      // If there are remaining items, update and return the cart
      const updatedCart = await prisma.cart.update({
        where: { id: cartItem.cart.id },
        data: {
          totalPrice: {
            decrement: cartItem.price,
          },
        },
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
        },
      });

      return updatedCart;
    });
  }
}
