import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductEntity } from 'src/products/product.entity';

@ObjectType()
export class ProductRentEntity {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  price: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => ProductEntity)
  product?: ProductEntity;
}
