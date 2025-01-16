import { Injectable } from '@nestjs/common';
import { AddToCartDto } from '../dto/add-to-cart.dto';
import { AddToCartProvider } from './add-to-cart.provider';
import { RemoveFromCartProvider } from './remove-from-cart.provider';
import { FetchCartProvider } from './fetch-cart.provider';

@Injectable()
@Injectable()
export class CartService {
  constructor(
    private addToCartProvider: AddToCartProvider,
    private removeFromCartProvider: RemoveFromCartProvider,
    private fetchCartProvider: FetchCartProvider,
  ) {}

  async addToCart(userId: string, input: AddToCartDto) {
    return this.addToCartProvider.addToCart(userId, input);
  }

  async getCart(userId: string) {
    return this.fetchCartProvider.fetchCart(userId);
  }

  async removeFromCart(userId: string, cartItemId: number) {
    return this.removeFromCartProvider.removeFromCart(userId, cartItemId);
  }
}
