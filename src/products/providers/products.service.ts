import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { MutateProductsProvider } from './mutate-products.provider';
import { CreateProductsDto } from '../dtos/create-product.dto';
import { FetchProductsByUserProvider } from './fetch-products-by-user.provider';
import { ProductEntity } from '../product.entity';
import { FetchAllProductsProvider } from './fetch-all-products.provider';

@Injectable()
export class ProductsService {
  constructor(
    private createProductsProvider: MutateProductsProvider,
    private fetchProductsByUserProvider: FetchProductsByUserProvider,
    private fetchAllProductsProvider: FetchAllProductsProvider,
  ) {}

  public async create(createProductsDto: CreateProductsDto, user: User) {
    return await this.createProductsProvider.createProduct(
      createProductsDto,
      user,
    );
  }
  public async fetchAllProducts(): Promise<ProductEntity[]> {
    return await this.fetchAllProductsProvider.fetchAllProducts();
  }
  public async fetchProductsByUser(user: User): Promise<ProductEntity[]> {
    return await this.fetchProductsByUserProvider.fetchProductsByUser(user);
  }
}
