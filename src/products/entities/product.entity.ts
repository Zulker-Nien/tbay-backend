import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';

@ObjectType()
export class Products {
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
  creator: User;

  @Field(() => Int)
  averageRating: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
