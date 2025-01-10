import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateProductsProvider } from './create-products.provider';
import { CreateProductsEntity } from '../entities/create-product.entity';

@Injectable()
export class ProductsService {
  constructor(private createProductsProvider: CreateProductsProvider) {}

  public async create(createProductsDto: CreateProductsEntity, user: User) {
    if (!user || !user.id) {
      throw new Error('Invalid user data');
    }
    return await this.createProductsProvider.createProduct(
      createProductsDto,
      user,
    );
  }
}
