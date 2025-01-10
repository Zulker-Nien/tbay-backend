import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CategoryEntity {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
