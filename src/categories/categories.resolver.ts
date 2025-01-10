import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './providers/categories.service';
import { CreateCategoryInput } from './dtos/create-category.dto';
import { UpdateCategoryInput } from './dtos/update-category.dto';
import { CategoryEntity } from './category.entity';

@Resolver('Category')
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => [CategoryEntity])
  async fetchAllCategories(): Promise<CategoryEntity[]> {
    return this.categoriesService.fetchAllCategories();
  }

  @Query(() => CategoryEntity)
  async fetchOneCategory(@Args('id') id: number): Promise<CategoryEntity> {
    return this.categoriesService.fetchOneCategory(id);
  }

  @Mutation(() => CategoryEntity)
  async createCategory(
    @Args('createCategory') createCategoryInput: CreateCategoryInput,
  ): Promise<CategoryEntity> {
    return this.categoriesService.createCategory(createCategoryInput);
  }

  @Mutation(() => CategoryEntity)
  async updateCategory(
    @Args('id', { type: () => Number }) id: number,
    @Args('updateCategory') updateCategoryInput: UpdateCategoryInput,
  ): Promise<CategoryEntity> {
    return this.categoriesService.updateCategory(id, updateCategoryInput);
  }

  @Mutation(() => Boolean)
  async deleteCategory(
    @Args('id', { type: () => Number }) id: number,
  ): Promise<boolean> {
    return this.categoriesService.deleteCategory(id);
  }
}
