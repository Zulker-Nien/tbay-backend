import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateCategoryInput } from './create-category.dto';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => String, { nullable: true })
  name?: string;
}
