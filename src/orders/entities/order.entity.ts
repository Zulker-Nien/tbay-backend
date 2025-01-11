import { Field, ObjectType, Int } from '@nestjs/graphql';
import { OrderItemDetailsEntity } from './order-item-detail.entity';

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

  @Field(() => [OrderItemDetailsEntity])
  items: OrderItemDetailsEntity[];
}
