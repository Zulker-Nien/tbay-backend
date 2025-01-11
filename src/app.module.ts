import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductSaleDetailsModule } from './product-sale-details/product-sale-details.module';
import { ProductRentDetailsModule } from './product-rent-details/product-rent-details.module';
import { SeedModule } from './seed/seed.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    UsersModule,
    AuthModule,
    PrismaModule,
    ProductsModule,
    CategoriesModule,
    ProductSaleDetailsModule,
    ProductRentDetailsModule,
    SeedModule,
    CartModule,
    OrdersModule
  ],
  providers: [PrismaService],
})
export class AppModule {}
