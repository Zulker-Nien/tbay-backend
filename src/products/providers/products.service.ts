import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateProductsProvider } from './create-products.provider';
import { CreateProductsDto } from '../dtos/create-product.dto';
import { FetchProductsByUserProvider } from './fetch-products-by-user.provider';
import { ProductEntity } from '../product.entity';
import { FetchAllProductsProvider } from './fetch-all-products.provider';
import { UpdateProductsProvider } from './update-products.provider';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { DeleteProductsProvider } from './delete-products.provider';

@Injectable()
export class ProductsService {
  constructor(
    private createProductsProvider: CreateProductsProvider,
    private fetchProductsByUserProvider: FetchProductsByUserProvider,
    private fetchAllProductsProvider: FetchAllProductsProvider,
    private updateProductsProvider: UpdateProductsProvider,
    private deleteProductsProvider: DeleteProductsProvider,
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
  public async updateProduct(
    productId: number,
    updateProductDto: UpdateProductDto,
    userId: string,
  ): Promise<ProductEntity> {
    return await this.updateProductsProvider.updateProduct(
      productId,
      updateProductDto,
      userId,
    );
  }
  public async deleteProduct(
    productId: number,
    userId: string,
  ): Promise<boolean> {
    return await this.deleteProductsProvider.deleteProduct(productId, userId);
  }
}
