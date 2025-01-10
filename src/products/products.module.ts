import { Module } from '@nestjs/common';
import { ProductsService } from './providers/products.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MutateProductsProvider } from './providers/mutate-products.provider';
import { ProductsResolver } from './products.resolver';
import { JwtModule } from '@nestjs/jwt';
import { FetchProductsByUserProvider } from './providers/fetch-products-by-user.provider';
import { FetchAllProductsProvider } from './providers/fetch-all-products.provider';

@Module({
  imports: [JwtModule, PrismaModule],
  providers: [
    ProductsService,
    MutateProductsProvider,
    ProductsResolver,
    FetchProductsByUserProvider,
    FetchAllProductsProvider,
  ],
})
export class ProductsModule {}
