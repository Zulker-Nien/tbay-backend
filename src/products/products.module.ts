import { Module } from '@nestjs/common';
import { ProductsService } from './providers/products.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MutateProductsProvider } from './providers/create-products.provider';
import { ProductsResolver } from './products.resolver';
import { JwtModule } from '@nestjs/jwt';
import { FetchProductsByUserProvider } from './providers/fetch-products-by-user.provider';
import { FetchAllProductsProvider } from './providers/fetch-all-products.provider';
import { ProductSaleDetailsModule } from 'src/product-sale-details/product-sale-details.module';
import { ProductRentDetailsModule } from 'src/product-rent-details/product-rent-details.module';

@Module({
  imports: [
    JwtModule,
    PrismaModule,
    ProductSaleDetailsModule,
    ProductRentDetailsModule,
  ],
  providers: [
    ProductsService,
    MutateProductsProvider,
    ProductsResolver,
    FetchProductsByUserProvider,
    FetchAllProductsProvider,
  ],
})
export class ProductsModule {}
