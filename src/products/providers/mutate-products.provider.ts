import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductEntity } from '../product.entity';
import { CreateProductsDto } from '../dtos/create-product.dto';
import { User } from '@prisma/client';

@Injectable()
export class MutateProductsProvider {
  constructor(private prisma: PrismaService) {}

  async createProduct(
    product: CreateProductsDto,
    user: User,
  ): Promise<ProductEntity> {
    if (!user || !user.id) {
      throw new Error('Invalid user data');
    } else {
      const createdProduct = await this.prisma.product.create({
        data: {
          title: product.title,
          description: product.description,
          isAvailable: product.isAvailable,
          quantity: product.quantity,
          isForSale: product.isForSale,
          isForRent: product.isForRent,
          slug: product.slug,
          userId: user.id,
          categories: {
            create: product.categories.map((categoryId) => ({
              category: {
                connect: {
                  id: categoryId,
                },
              },
            })),
          },
          ...(product.isForSale &&
            product.saleDetails && {
              saleDetails: {
                create: {
                  price: product.saleDetails.price,
                },
              },
            }),
          ...(product.isForRent &&
            product.rentDetails && {
              rentDetails: {
                create: {
                  price: product.rentDetails.price,
                  availablePeriods: product.rentDetails.availablePeriods,
                },
              },
            }),
        },
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

      return {
        ...createdProduct,
        categories: createdProduct.categories.map((pc) => pc.category),
      } as ProductEntity;
    }
  }
}
