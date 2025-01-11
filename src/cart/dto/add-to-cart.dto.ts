import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsDate,
  IsEnum,
  IsInt,
  IsString,
  Min,
  ValidateIf,
} from 'class-validator';
import { CartItemTypes } from '../enums/cart-item-type.enum';

@InputType()
export class AddToCartDto {
  @Field(() => Int)
  @IsInt()
  productId: number;

  @Field()
  @IsString()
  @IsEnum(CartItemTypes)
  itemType: CartItemTypes;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  quantity: number;

  @Field({ nullable: true })
  @ValidateIf((cartItem) => cartItem.itemType === CartItemTypes.RENT)
  @IsDate()
  startDate?: Date;

  @Field({ nullable: true })
  @ValidateIf((cartItem) => cartItem.itemType === CartItemTypes.RENT)
  @IsDate()
  endDate?: Date;
}
