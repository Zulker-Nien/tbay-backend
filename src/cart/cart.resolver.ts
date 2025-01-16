import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CartEntity } from './entities/cart.entity';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CartItemEntity } from './entities/cart-item.entity';
import { JwtPayload } from 'src/auth/interfaces/payload.interface';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { CartService } from './providers/cart.service';
import { CartValidationGuard } from './guards/cart-validation.guard';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver(() => CartEntity)
export class CartResolver {
  constructor(
    private readonly cartService: CartService,
    private prisma: PrismaService,
  ) {}

  @Mutation(() => CartItemEntity)
  @UseGuards(JwtAuthGuard, CartValidationGuard)
  async addToCart(
    @Args('input') input: AddToCartDto,
    @CurrentUser() jwtPayload: JwtPayload,
  ) {
    return this.cartService.addToCart(jwtPayload.sub, input);
  }

  @Mutation(() => CartEntity)
  @UseGuards(JwtAuthGuard)
  async removeFromCart(
    @Args('cartId', { type: () => Int }) cartId: number,
    @CurrentUser() jwtPayload: JwtPayload,
  ) {
    const user = await this.prisma.user.findUnique({
      where: { id: jwtPayload.sub },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.cartService.removeFromCart(user.id, cartId);
  }

  @Query(() => CartEntity, { nullable: true })
  @UseGuards(JwtAuthGuard)
  async getCart(@CurrentUser() jwtPayload: JwtPayload) {
    return this.cartService.getCart(jwtPayload.sub);
  }
}
