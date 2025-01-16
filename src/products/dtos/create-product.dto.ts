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
import { ProductDetailsDto } from './product-details.dto';

@InputType()
export class CreateProductsDto {
  @Field()
  @IsString()
  @MinLength(2)
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

  @Field(() => [Int])
  @IsArray()
  categories: number[];

  @Field(() => ProductDetailsDto, { nullable: true })
  @ValidateIf(
    (product) =>
      product.available === Availability.SALE ||
      product.available === Availability.BOTH,
  )
  @ValidateNested()
  @Type(() => ProductDetailsDto)
  @IsNotEmpty({
    message: 'Sale details are required when availability is SALE or BOTH',
  })
  saleDetails?: ProductDetailsDto;

  @Field(() => ProductDetailsDto, { nullable: true })
  @ValidateIf(
    (product) =>
      product.available === Availability.RENT ||
      product.available === Availability.BOTH,
  )
  @ValidateNested()
  @Type(() => ProductDetailsDto)
  @IsNotEmpty({
    message: 'Rent details are required when availability is RENT or BOTH',
  })
  rentDetails?: ProductDetailsDto;
}
