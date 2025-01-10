import { Module } from '@nestjs/common';
import { ProductRentDetailsService } from './providers/product-rent-details.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProductRentDetailsService],
})
export class ProductRentDetailsModule {}
