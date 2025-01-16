import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductEntity } from 'src/products/product.entity';
import { CartEntity } from './cart.entity';
import { CartItemTypes } from '../enums/cart-item-type.enum';

@ObjectType()
export class CartItemEntity {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  cartId: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  quantity: number;

  @Field()
  itemType: CartItemTypes;

  @Field({ nullable: true })
  startDate?: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field(() => CartEntity, { nullable: true })
  cart?: CartEntity;

  @Field(() => ProductEntity)
  product: ProductEntity;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
