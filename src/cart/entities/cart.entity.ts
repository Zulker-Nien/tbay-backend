import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CartItemEntity } from './cart-item.entity';
import { User } from 'src/users/user.entity';

@ObjectType()
export class CartEntity {
  @Field(() => Int)
  id: number;

  @Field()
  userId: string;

  @Field(() => User)
  user: User;

  @Field(() => Int)
  totalPrice: number;

  @Field(() => [CartItemEntity])
  items: CartItemEntity[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
