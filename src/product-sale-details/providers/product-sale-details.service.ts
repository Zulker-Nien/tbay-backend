import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductSaleDto } from '../dtos/product-sale.dto';

@Injectable()
export class ProductSaleDetailsService {
  constructor(private prisma: PrismaService) {}

  create(createProductSaleInput: ProductSaleDto) {
    return this.prisma.productSaleDetails.create({
      data: createProductSaleInput,
      include: {
        product: true,
      },
    });
  }

  findAll() {
    return this.prisma.productSaleDetails.findMany({
      include: {
        product: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.productSaleDetails.findUnique({
      where: { id },
      include: {
        product: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.productSaleDetails.delete({
      where: { id },
    });
  }
}
