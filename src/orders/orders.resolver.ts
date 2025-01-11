import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { OrdersService } from './providers/orders.service';
import { OrderEntity } from './entities/order.entity';
import { JwtPayload } from 'src/auth/interfaces/payload.interface';
import { CreateOrderDto } from './dtos/create-order.dto';

@Resolver(() => OrderEntity)
export class OrdersResolver {
  constructor(private readonly orderService: OrdersService) {}

  @Mutation(() => OrderEntity)
  @UseGuards(JwtAuthGuard)
  async createOrder(
    @CurrentUser() userId: JwtPayload,
    @Args('input') cartId: CreateOrderDto,
  ) {
    return this.orderService.createOrder(userId.sub, cartId.cartId);
  }

  @Query(() => [OrderEntity])
  @UseGuards(JwtAuthGuard)
  async getUserOrders(@CurrentUser() userId: JwtPayload) {
    return this.orderService.findUserOrders(userId.sub);
  }

  @Query(() => [OrderEntity])
  @UseGuards(JwtAuthGuard)
  async getUserSales(@CurrentUser() userId: JwtPayload) {
    return this.orderService.findUserSales(userId.sub);
  }

  @Query(() => [OrderEntity])
  @UseGuards(JwtAuthGuard)
  async getUserRentals(@CurrentUser() userId: JwtPayload) {
    return this.orderService.findUserRentals(userId.sub);
  }
}
