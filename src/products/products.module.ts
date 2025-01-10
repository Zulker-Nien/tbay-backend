import { Module } from '@nestjs/common';
import { ProductsService } from './providers/products.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateProductsProvider } from './providers/create-products.provider';
import { ProductsResolver } from './products.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule, PrismaModule],
  providers: [ProductsService, CreateProductsProvider, ProductsResolver],
})
export class ProductsModule {}
