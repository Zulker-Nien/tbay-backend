import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CategoryEntity } from 'src/categories/category.entity';
import { User } from 'src/users/user.entity';

@ObjectType()
export class ProductEntity {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  isAvailable: boolean;

  @Field(() => Int)
  quantity: number;

  @Field()
  isForSale: boolean;

  @Field()
  isForRent: boolean;

  @Field()
  slug: string;

  @Field(() => User)
  owner: User;

  @Field(() => Int)
  averageRating: number;

  @Field(() => [CategoryEntity])
  categories: CategoryEntity[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
