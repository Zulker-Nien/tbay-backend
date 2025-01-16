import { Field, ObjectType, Int } from '@nestjs/graphql';
import { OrderItemDetailEntity } from './order-item-detail.entity';

@ObjectType()
export class OrderEntity {
  @Field(() => Int)
  id: number;

  @Field()
  userId: string;

  @Field(() => Int)
  totalAmount: number;

  @Field()
  status: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [OrderItemDetailEntity])
  items: OrderItemDetailEntity[];
}
