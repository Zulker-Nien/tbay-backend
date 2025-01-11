import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ProductEntity } from './product.entity';
import { CreateProductsDto } from './dtos/create-product.dto';
import { ProductsService } from './providers/products.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtPayload } from 'src/auth/interfaces/payload.interface';
import { UpdateProductDto } from './dtos/update-product.dto';

@Resolver(() => ProductEntity)
export class ProductsResolver {
  constructor(
    private productService: ProductsService,
    private prisma: PrismaService,
  ) {}

  @Mutation(() => ProductEntity)
  @UseGuards(JwtAuthGuard)
  async createProducts(
    @Args('createProduct') createProductInput: CreateProductsDto,
    @CurrentUser() jwtPayload: JwtPayload,
  ): Promise<ProductEntity> {
    const user = await this.prisma.user.findUnique({
      where: { id: jwtPayload.sub },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.productService.create(createProductInput, user);
  }

  @Mutation(() => ProductEntity)
  @UseGuards(JwtAuthGuard)
  async updateProduct(
    @Args('productId') productId: number,
    @Args('updateProduct') updateProductInput: UpdateProductDto,
    @CurrentUser() jwtPayload: JwtPayload,
  ): Promise<ProductEntity> {
    const user = await this.prisma.user.findUnique({
      where: { id: jwtPayload.sub },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.productService.updateProduct(
      productId,
      updateProductInput,
      user.id,
    );
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async deleteProduct(
    @Args('productId') productId: number,
    @CurrentUser() jwtPayload: JwtPayload,
  ): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: jwtPayload.sub },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.productService.deleteProduct(productId, user.id);
  }

  @Query(() => [ProductEntity])
  @UseGuards(JwtAuthGuard)
  async viewProductsByUser(
    @CurrentUser() jwtPayload: JwtPayload,
  ): Promise<ProductEntity[]> {
    const user = await this.prisma.user.findUnique({
      where: { id: jwtPayload.sub },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.productService.fetchProductsByUser(user);
  }

  @Query(() => [ProductEntity])
  async viewAllProducts(): Promise<ProductEntity[]> {
    return this.productService.fetchAllProducts();
  }
}
