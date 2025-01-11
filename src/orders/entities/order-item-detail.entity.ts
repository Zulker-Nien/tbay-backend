import { Field, ObjectType, Int } from '@nestjs/graphql';
import { OrderType } from './order-type.entity';
import { ProductEntity } from 'src/products/product.entity';
import { UserEntity } from 'src/users/user.entity';

@ObjectType()
export class OrderItemDetailsEntity {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  orderId: number;

  @Field(() => Int)
  productId: number;

  @Field(() => String, { nullable: true })
  buyerId?: string;

  @Field(() => String, { nullable: true })
  sellerId?: string;

  @Field(() => String, { nullable: true })
  renterId?: string;

  @Field(() => String, { nullable: true })
  lenderId?: string;

  @Field(() => Int)
  price: number;

  @Field(() => OrderType)
  orderType: OrderType;

  @Field(() => Int)
  quantity: number;

  @Field(() => Date, { nullable: true })
  startDate?: Date;

  @Field(() => Date, { nullable: true })
  endDate?: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => ProductEntity)
  product: ProductEntity;

  @Field(() => UserEntity, { nullable: true })
  buyer?: UserEntity;

  @Field(() => UserEntity, { nullable: true })
  seller?: UserEntity;

  @Field(() => UserEntity, { nullable: true })
  renter?: UserEntity;

  @Field(() => UserEntity, { nullable: true })
  lender?: UserEntity;
}
