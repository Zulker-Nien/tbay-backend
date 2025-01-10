import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FetchAllCategoriesProvider {
  constructor(private readonly prisma: PrismaService) {}

  private defaultCategories = [
    { name: 'ELECTRONICS' },
    { name: 'FURNITURE' },
    { name: 'HOME APPLIANCES' },
    { name: 'SPORTING GOODS' },
    { name: 'OUTDOOR' },
    { name: 'TOYS' },
  ];

  async onModuleInit() {
    console.log('Seeding default categories...');
    for (const category of this.defaultCategories) {
      await this.prisma.category.upsert({
        where: { name: category.name },
        update: {},
        create: category,
      });
    }
    console.log('Default categories seeded!');
  }

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
