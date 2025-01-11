import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDate, IsIn, IsInt, IsOptional, IsString } from 'class-validator';

@InputType()
export class AddToCartDto {
  @Field(() => Int)
  @IsInt()
  productId: number;

  @Field()
  @IsString()
  @IsIn(['SALE', 'RENT'])
  type: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  rentalPeriod?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  startDate?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  endDate?: Date;
}
