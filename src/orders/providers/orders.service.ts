import { Injectable } from '@nestjs/common';
import { CreateOrderProvider } from './create-order.provider';
import { FetchOrdersProvider } from './fetch-orders.provider';

@Injectable()
export class OrdersService {
  constructor(
    private createOrderProvider: CreateOrderProvider,
    private fetchOrdersProvider: FetchOrdersProvider,
  ) {}

  async createOrder(userId: string, cartId: number) {
    return this.createOrderProvider.createOrder(userId, cartId);
  }
  async findOrderById(orderId: number) {
    return this.fetchOrdersProvider.findOrderById(orderId);
  }

  async findUserOrders(userId: string) {
    return this.fetchOrdersProvider.findUserOrders(userId);
  }

  async findUserSales(userId: string) {
    return this.fetchOrdersProvider.findUserSales(userId);
  }

  async findUserRentals(userId: string) {
    return this.fetchOrdersProvider.findUserRentals(userId);
  }
}
