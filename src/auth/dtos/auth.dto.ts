import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class SignUpDto {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsString()
  lastName: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}

@InputType()
export class SignInDto {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  password: string;
}
