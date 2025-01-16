import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from 'src/users/user.entity';

@ObjectType()
export class TokenModel {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field()
  user: UserEntity;
}
