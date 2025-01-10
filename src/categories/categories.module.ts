import { Module } from '@nestjs/common';
import { CategoriesService } from './providers/categories.service';
import { CategoriesResolver } from './categories.resolver';
import { FetchAllCategoriesProvider } from './providers/fetch-categories.provider';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MutateCategoriesProvider } from './providers/mutate-categories.provider';

@Module({
  imports: [PrismaModule],
  providers: [
    CategoriesService,
    CategoriesResolver,
    FetchAllCategoriesProvider,
    MutateCategoriesProvider,
  ],
  exports: [CategoriesService],
})
export class CategoriesModule {}
