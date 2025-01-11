import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeleteProductsProvider {
  constructor(private prisma: PrismaService) {}
  public async deleteProduct(
    productId: number,
    userId: string,
  ): Promise<boolean> {
    const existingProduct = await this.prisma.product.findUnique({
      where: { id: productId },
    });
    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }
    if (existingProduct.userId !== userId) {
      throw new UnauthorizedException('Unauthorized access to product');
    }
    await this.prisma.$transaction(async (prisma) => {
      await prisma.productCategory.deleteMany({
        where: { productId },
      });

      await prisma.productSaleDetails.deleteMany({
        where: { productId },
      });

      await prisma.productRentDetails.deleteMany({
        where: { productId },
      });

      await prisma.product.delete({
        where: { id: productId },
      });
    });

    return true;
  }
}
