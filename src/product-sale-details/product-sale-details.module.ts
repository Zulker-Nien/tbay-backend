import { Module } from '@nestjs/common';
import { ProductSaleDetailsService } from './providers/product-sale-details.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProductSaleDetailsService],
})
export class ProductSaleDetailsModule {}
