import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CartItemEntity } from './cart-item.entity';
import { UserEntity } from 'src/users/user.entity';

@ObjectType()
export class CartEntity {
  @Field(() => Int)
  id: number;

  @Field()
  userId: string;

  @Field(() => UserEntity)
  user: UserEntity;

  @Field(() => Int)
  totalPrice: number;

  @Field(() => [CartItemEntity])
  items: CartItemEntity[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
