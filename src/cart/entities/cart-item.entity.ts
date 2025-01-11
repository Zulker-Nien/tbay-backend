import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductEntity } from 'src/products/product.entity';
import { CartEntity } from './cart.entity';

@ObjectType()
export class CartItemEntity {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  cartId: number;

  @Field(() => Int)
  productId: number;

  @Field()
  type: string;

  @Field(() => Int, { nullable: true })
  rentalPeriod?: number;

  @Field({ nullable: true })
  startDate?: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => CartEntity)
  cart: CartEntity;

  @Field(() => ProductEntity)
  product: ProductEntity;
}
