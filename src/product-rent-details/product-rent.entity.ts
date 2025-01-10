import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { ProductEntity } from 'src/products/product.entity';

@ObjectType()
export class ProductRentEntity {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Float)
  price: number;

  @Field(() => [String])
  availablePeriods: string[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => ProductEntity)
  product?: ProductEntity;
}
