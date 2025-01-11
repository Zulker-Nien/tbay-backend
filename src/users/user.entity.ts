import { Field, ObjectType } from '@nestjs/graphql';
import { v4 } from 'uuid';

@ObjectType()
export class UserEntity {
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
