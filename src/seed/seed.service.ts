// src/seeding/seeding.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SeedService implements OnModuleInit {
  private defaultCategories = [
    { name: 'ELECTRONICS' },
    { name: 'FURNITURE' },
    { name: 'HOME APPLIANCES' },
    { name: 'SPORTING GOODS' },
    { name: 'OUTDOOR' },
    { name: 'TOYS' },
  ];

  constructor(private prisma: PrismaService) {}

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
}
