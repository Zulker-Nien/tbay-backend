import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { Availability } from '../enums/availability.enum';
import { ProductDetailsDto } from './product-details.dto';
import { Type } from 'class-transformer';

@InputType()
export class UpdateProductDto {
  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  id: number;

  @Field({ nullable: true })
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @IsEnum(Availability)
  @IsOptional()
  available?: Availability;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  quantity?: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  slug?: string;

  @Field(() => [Int], { nullable: true })
  @IsArray()
  @IsOptional()
  categories?: number[];

  @Field(() => ProductDetailsDto, { nullable: true })
  @ValidateIf(
    (product) =>
      product.available === Availability.SALE ||
      product.available === Availability.BOTH,
  )
  @ValidateNested()
  @Type(() => ProductDetailsDto)
  @IsOptional()
  saleDetails?: ProductDetailsDto;

  @Field(() => ProductDetailsDto, { nullable: true })
  @ValidateIf(
    (product) =>
      product.available === Availability.RENT ||
      product.available === Availability.BOTH,
  )
  @ValidateNested()
  @Type(() => ProductDetailsDto)
  @IsOptional()
  rentDetails?: ProductDetailsDto;
}
