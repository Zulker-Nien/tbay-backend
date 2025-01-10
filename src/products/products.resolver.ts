import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Products } from './entities/product.entity';
import { CreateProductsEntity } from './entities/create-product.entity';
import { ProductsService } from './providers/products.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtPayload } from 'src/auth/interfaces/payload.interface';

@Resolver(() => Products)
export class ProductsResolver {
  constructor(
    private productService: ProductsService,
    private prisma: PrismaService,
  ) {}

  @Mutation(() => Products)
  @UseGuards(JwtAuthGuard)
  async createProducts(
    @Args('createProductInput') createProductInput: CreateProductsEntity,
    @CurrentUser() jwtPayload: JwtPayload,
  ): Promise<Products> {
    const user = await this.prisma.user.findUnique({
      where: { id: jwtPayload.sub },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return this.productService.create(createProductInput, user);
  }
}
