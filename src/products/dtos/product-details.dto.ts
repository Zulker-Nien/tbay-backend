import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ProductDetailsDto {
  @Field(() => Int)
  price: number;
}
