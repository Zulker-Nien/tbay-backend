import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ProductEntity } from '../product.entity';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UpdateProductsProvider {
  constructor(private prisma: PrismaService) {}
  public async updateProduct(
    productId: number,
    updateProductDto: UpdateProductDto,
    userId: string,
  ): Promise<ProductEntity> {
    const existingProduct = await this.prisma.product.findUnique({
      where: { id: productId },
      include: {
        categories: true,
        saleDetails: true,
        rentDetails: true,
      },
    });

    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    if (existingProduct.userId !== userId) {
      throw new UnauthorizedException('Unauthorized access to product');
    }

    const updatedProduct = await this.prisma.product.update({
      where: { id: productId },
      data: {
        title: updateProductDto.title ?? undefined,
        description: updateProductDto.description ?? undefined,
        available: updateProductDto.available ?? undefined,
        quantity: updateProductDto.quantity ?? undefined,
        slug: updateProductDto.slug ?? undefined,
        ...(updateProductDto.categories && {
          categories: {
            deleteMany: {},
            create: updateProductDto.categories.map((categoryId) => ({
              category: {
                connect: {
                  id: categoryId,
                },
              },
            })),
          },
        }),
        ...(updateProductDto.saleDetails && {
          saleDetails: {
            upsert: {
              create: { price: updateProductDto.saleDetails.price },
              update: { price: updateProductDto.saleDetails.price },
            },
          },
        }),
        ...(updateProductDto.rentDetails && {
          rentDetails: {
            upsert: {
              create: { price: updateProductDto.rentDetails.price },
              update: { price: updateProductDto.rentDetails.price },
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
      ...updatedProduct,
      categories: updatedProduct.categories.map((pc) => pc.category),
    } as ProductEntity;
  }
}
