import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FetchAllCategoriesProvider {
  constructor(private readonly prisma: PrismaService) {}

  public async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  public async findOne(id: number): Promise<Category> {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }
}
