import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductRentDto } from '../dtos/product-rent.dto';

@Injectable()
export class ProductRentDetailsService {
  constructor(private prisma: PrismaService) {}

  create(createProductRentInput: ProductRentDto) {
    return this.prisma.productRentDetails.create({
      data: createProductRentInput,
      include: {
        product: true,
      },
    });
  }

  findAll() {
    return this.prisma.productRentDetails.findMany({
      include: {
        product: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.productRentDetails.findUnique({
      where: { id },
      include: {
        product: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.productRentDetails.delete({
      where: { id },
    });
  }
}
