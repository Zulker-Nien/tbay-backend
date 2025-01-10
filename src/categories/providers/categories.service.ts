import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { FetchAllCategoriesProvider } from './fetch-categories.provider';
import { MutateCategoriesProvider } from './mutate-categories.provider';
import { CreateCategoryInput } from '../dtos/create-category.dto';
import { UpdateCategoryInput } from '../dtos/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly fetchAllCategoriesProvider: FetchAllCategoriesProvider,
    private readonly MutateCategoriesProvider: MutateCategoriesProvider,
  ) {}

  public async fetchAllCategories(): Promise<Category[]> {
    return await this.fetchAllCategoriesProvider.findAll();
  }

  public async fetchOneCategory(id: number): Promise<Category> {
    return await this.fetchAllCategoriesProvider.findOne(id);
  }

  public async createCategory(
    createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    return await this.MutateCategoriesProvider.create(createCategoryInput);
  }

  public async updateCategory(
    id: number,
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    return await this.MutateCategoriesProvider.update(id, updateCategoryInput);
  }

  public async deleteCategory(id: number): Promise<boolean> {
    return await this.MutateCategoriesProvider.delete(id);
  }
}
