import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FetchCartProvider {
  constructor(private prisma: PrismaService) {}

  public async fetchCart(userId: string) {
    return this.prisma.cart.findFirst({
      where: { userId },
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
  }
}
