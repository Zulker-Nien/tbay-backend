import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductEntity } from '../product.entity';

@Injectable()
export class FetchAllProductsProvider {
  constructor(private prisma: PrismaService) {}

  public async fetchAllProducts(): Promise<ProductEntity[]> {
    const products = await this.prisma.product.findMany({
      include: {
        owner: true,
        categories: {
          include: {
            category: true,
          },
        },
        saleDetails: true,
        rentDetails: true,
      },
    });

    return products.map((product) => ({
      ...product,
      categories: product.categories.map((pc) => pc.category),
    })) as ProductEntity[];
  }
}
