import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductEntity } from '../product.entity';

@Injectable()
export class FetchProductsByUserProvider {
  constructor(private prisma: PrismaService) {}

  public async fetchProductsByUser(user: User): Promise<ProductEntity[]> {
    if (!user || !user.id) {
      throw new Error('Invalid user data');
    } else {
      const products = await this.prisma.product.findMany({
        where: {
          userId: user.id,
        },
        include: {
          owner: true,
          categories: {
            include: {
              category: true,
            },
          },
        },
      });

      return products.map((product) => ({
        ...product,
        categories: product.categories.map((pc) => pc.category),
      })) as ProductEntity[];
    }
  }
}
