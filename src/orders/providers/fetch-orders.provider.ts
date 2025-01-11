import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FetchOrdersProvider {
  constructor(private prisma: PrismaService) {}

  async findOrderById(orderId: number) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
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
    if (!order) {
      throw new NotFoundException(`Order with ID ${orderId} not found`);
    }
    return order;
  }

  async findUserOrders(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
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
      orderBy: { createdAt: 'desc' },
    });
  }

  async findUserSales(userId: string) {
    return this.prisma.order.findMany({
      where: {
        items: {
          some: {
            sellerId: userId,
          },
        },
      },
      include: {
        items: {
          include: {
            product: true,
            buyer: true,
            seller: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findUserRentals(userId: string) {
    return this.prisma.order.findMany({
      where: {
        items: {
          some: {
            OR: [{ renterId: userId }, { lenderId: userId }],
          },
        },
      },
      include: {
        items: {
          include: {
            product: true,
            renter: true,
            lender: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
