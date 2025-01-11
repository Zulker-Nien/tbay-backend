import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CategoryEntity } from 'src/categories/category.entity';
import { ProductRentEntity } from 'src/product-rent-details/product-rent.entity';
import { ProductSaleEntity } from 'src/product-sale-details/product-sale.entity';
import { User } from 'src/users/user.entity';
import { Availability } from './enums/availability.enum';

@ObjectType()
export class ProductEntity {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  available: Availability;

  @Field(() => Int)
  quantity: number;

  @Field()
  slug: string;

  @Field(() => User)
  owner: User;

  @Field(() => Int)
  averageRating: number;

  @Field(() => [CategoryEntity])
  categories: CategoryEntity[];

  @Field(() => ProductSaleEntity, { nullable: true })
  saleDetails?: ProductSaleEntity;

  @Field(() => ProductRentEntity, { nullable: true })
  rentDetails?: ProductRentEntity;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
