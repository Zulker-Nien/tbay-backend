import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Products } from '../entities/product.entity';
import { CreateProductsEntity } from '../entities/create-product.entity';
import { User } from '@prisma/client';

@Injectable()
export class CreateProductsProvider {
  constructor(private prisma: PrismaService) {}

  async createProduct(
    product: CreateProductsEntity,
    user: User,
  ): Promise<Products | null> {
    console.log('User in create service:', user); // Add this logging
    if (!user || !user.id) {
      throw new Error('Invalid user data');
    }

    return this.prisma.product.create({
      data: {
        title: product.title,
        description: product.description,
        isAvailable: product.isAvailable,
        quantity: product.quantity,
        isForSale: product.isForSale,
        isForRent: product.isForRent,
        slug: product.slug,
        userId: user.id,
      },
      include: {
        creator: true,
      },
    });
  }
}
