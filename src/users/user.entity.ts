import { Field, ObjectType } from '@nestjs/graphql';
import { v4 } from 'uuid';

@ObjectType()
export class User {
  @Field()
  id: string = v4();

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  password: string;

  @Field()
  createdAt: Date = new Date();

  @Field()
  updatedAt: Date = new Date();
}
