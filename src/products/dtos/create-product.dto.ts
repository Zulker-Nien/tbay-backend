import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { Availability } from '../enums/availability.enum';
import { Type } from 'class-transformer';

@InputType()
class ProductSaleDetails {
  @Field(() => Int)
  price: number;
}

@InputType()
class ProductRentDetails {
  @Field(() => Int)
  price: number;
}

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
  @IsNotEmpty()
  @IsEnum(Availability)
  available: Availability;

  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  slug: string;

  @Field(() => [Int])
  @IsArray()
  categories: number[];

  @Field(() => ProductSaleDetails, { nullable: true })
  @ValidateIf(
    (product) =>
      product.available === Availability.SALE ||
      product.available === Availability.BOTH,
  )
  @ValidateNested()
  @Type(() => ProductSaleDetails)
  @IsNotEmpty({
    message: 'Sale details are required when availability is SALE or BOTH',
  })
  saleDetails?: ProductSaleDetails;

  @Field(() => ProductRentDetails, { nullable: true })
  @ValidateIf(
    (product) =>
      product.available === Availability.RENT ||
      product.available === Availability.BOTH,
  )
  @ValidateNested()
  @Type(() => ProductRentDetails)
  @IsNotEmpty({
    message: 'Rent details are required when availability is RENT or BOTH',
  })
  rentDetails?: ProductRentDetails;
}
