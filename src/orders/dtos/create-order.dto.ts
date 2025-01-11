import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateOrderDto {
  @Field()
  @IsNotEmpty()
  @IsInt()
  cartId: number;
}
