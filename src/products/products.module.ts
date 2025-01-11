import { Module } from '@nestjs/common';
import { ProductsService } from './providers/products.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateProductsProvider } from './providers/create-products.provider';
import { ProductsResolver } from './products.resolver';
import { JwtModule } from '@nestjs/jwt';
import { FetchProductsByUserProvider } from './providers/fetch-products-by-user.provider';
import { FetchAllProductsProvider } from './providers/fetch-all-products.provider';
import { ProductSaleDetailsModule } from 'src/product-sale-details/product-sale-details.module';
import { ProductRentDetailsModule } from 'src/product-rent-details/product-rent-details.module';
import { UpdateProductsProvider } from './providers/update-products.provider';
import { DeleteProductsProvider } from './providers/delete-products.provider';

@Module({
  imports: [
    JwtModule,
    PrismaModule,
    ProductSaleDetailsModule,
    ProductRentDetailsModule,
  ],
  providers: [
    ProductsService,
    CreateProductsProvider,
    ProductsResolver,
    FetchProductsByUserProvider,
    FetchAllProductsProvider,
    UpdateProductsProvider,
    DeleteProductsProvider,
  ],
})
export class ProductsModule {}
