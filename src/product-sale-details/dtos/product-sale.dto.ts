import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

@InputType()
export class ProductSaleDto {
  @Field(() => Int)
  @IsNotEmpty()
  productId: number;

  @Field(() => Int)
  @IsNumber()
  @Min(0)
  price: number;
}
