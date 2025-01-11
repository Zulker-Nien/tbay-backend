import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductEntity } from '../product.entity';
import { CreateProductsDto } from '../dtos/create-product.dto';
import { User, Availability } from '@prisma/client';

@Injectable()
export class CreateProductsProvider {
  constructor(private prisma: PrismaService) {}

  async createProduct(
    input: CreateProductsDto,
    user: User,
  ): Promise<ProductEntity> {
    if (!user || !user.id) {
      throw new Error('Invalid user data');
    } else {
      const createdProduct = await this.prisma.product.create({
        data: {
          title: input.title,
          description: input.description,
          available: input.available,
          quantity: input.quantity,
          slug: input.slug,
          userId: user.id,
          categories: {
            create: input.categories.map((categoryId) => ({
              category: {
                connect: {
                  id: categoryId,
                },
              },
            })),
          },
          ...((input.available === Availability.SALE || Availability.BOTH) &&
            input.saleDetails && {
              saleDetails: {
                create: {
                  price: input.saleDetails.price,
                },
              },
            }),
          ...((input.available === Availability.RENT || Availability.BOTH) &&
            input.rentDetails && {
              rentDetails: {
                create: {
                  price: input.rentDetails.price,
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
          saleDetails:
            input.available === (Availability.SALE || Availability.BOTH),
          rentDetails:
            input.available === (Availability.RENT || Availability.BOTH),
        },
      });

      return {
        ...createdProduct,
        categories: createdProduct.categories.map((pc) => pc.category),
      } as ProductEntity;
    }
  }
}
