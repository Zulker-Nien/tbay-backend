import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateProductsDto {
  @Field()
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  @IsNotEmpty()
  title: string;

  @Field()
  @IsString()
  description: string;

  @Field()
  @IsBoolean()
  isAvailable: boolean;

  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @Field()
  @IsBoolean()
  isForSale: boolean;

  @Field()
  @IsBoolean()
  isForRent: boolean;

  @Field()
  @IsString()
  @IsNotEmpty()
  slug: string;

  @Field(() => [Int])
  @IsArray()
  categories: number[];
}
