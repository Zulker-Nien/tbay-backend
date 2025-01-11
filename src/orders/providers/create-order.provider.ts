import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreateOrderProvider {
  constructor(private prisma: PrismaService) {}

  async createOrder(userId: string, cartId: number) {
    const cart = await this.prisma.cart.findUnique({
      where: { id: cartId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    if (cart.userId !== userId) {
      throw new Error('Unauthorized access to cart');
    }

    return this.prisma.$transaction(async (prisma) => {
      const order = await prisma.order.create({
        data: {
          userId,
          totalAmount: cart.totalPrice,
        },
      });

      for (const item of cart.items) {
        const { product } = item;

        if (item.quantity > product.quantity) {
          throw new Error(
            `Insufficient quantity for product: ${product.title}`,
          );
        }

        const orderParticipants =
          item.itemType === 'BUY'
            ? {
                buyerId: userId,
                sellerId: product.userId,
                renterId: null,
                lenderId: null,
              }
            : {
                buyerId: null,
                sellerId: null,
                renterId: userId,
                lenderId: product.userId,
              };

        await prisma.orderItemDetails.create({
          data: {
            orderId: order.id,
            productId: item.productId,
            price: item.price,
            quantity: item.quantity,
            orderType: item.itemType,
            startDate: item.startDate,
            endDate: item.endDate,
            ...orderParticipants,
          },
        });

        if (item.itemType === 'BUY') {
          await prisma.product.update({
            where: { id: product.id },
            data: {
              quantity: {
                decrement: item.quantity,
              },
              available:
                product.quantity - item.quantity <= 0
                  ? 'OUTOFSTOCK'
                  : product.available,
            },
          });
        }
      }

      await prisma.cartItem.deleteMany({
        where: {
          cartId: cart.id,
        },
      });

      await prisma.cart.delete({
        where: {
          id: cart.id,
        },
      });

      const completeOrder = await prisma.order.findUnique({
        where: { id: order.id },
        include: {
          items: {
            include: {
              product: true,
              buyer: true,
              seller: true,
              renter: true,
              lender: true,
            },
          },
        },
      });

      if (!completeOrder) {
        throw new Error('Failed to retrieve created order');
      }

      return completeOrder;
    });
  }
}
