import { Module } from '@nestjs/common';
import { OrdersService } from './providers/orders.service';
import { OrdersResolver } from './orders.resolver';
import { JwtModule } from '@nestjs/jwt';
import { CreateOrderProvider } from './providers/create-order.provider';
import { FetchOrdersProvider } from './providers/fetch-orders.provider';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, JwtModule],
  providers: [
    OrdersService,
    OrdersResolver,
    CreateOrderProvider,
    FetchOrdersProvider,
  ],
})
export class OrdersModule {}
