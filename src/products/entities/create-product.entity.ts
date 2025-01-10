import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductsEntity {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  isAvailable: boolean;

  @Field(() => Int)
  quantity: number;

  @Field()
  isForSale: boolean;

  @Field()
  isForRent: boolean;

  @Field()
  slug: string;
}
