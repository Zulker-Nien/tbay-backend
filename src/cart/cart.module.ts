import { Module } from '@nestjs/common';
import { CartService } from './providers/cart.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AddToCartProvider } from './providers/add-to-cart.provider';
import { RemoveFromCartProvider } from './providers/remove-from-cart.provider';
import { FetchCartProvider } from './providers/fetch-cart.provider';
import { CartResolver } from './cart.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, JwtModule],
  providers: [
    CartService,
    AddToCartProvider,
    RemoveFromCartProvider,
    FetchCartProvider,
    CartResolver,
  ],
})
export class CartModule {}
