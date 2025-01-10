import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryInput } from '../dtos/create-category.dto';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateCategoryInput } from '../dtos/update-category.dto';

@Injectable()
export class MutateCategoriesProvider {
  constructor(private readonly prisma: PrismaService) {}

  public async create(
    createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    return this.prisma.category.create({
      data: {
        name: createCategoryInput.name,
      },
    });
  }

  public async update(
    id: number,
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    return this.prisma.category.update({
      where: { id },
      data: {
        name: updateCategoryInput.name,
      },
    });
  }

  async delete(id: number): Promise<boolean> {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    await this.prisma.category.delete({ where: { id } });
    return true;
  }
}
