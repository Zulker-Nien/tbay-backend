import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SeedService } from './seed.service';

@Module({
  providers: [SeedService, PrismaService, SeedService],
})
export class SeedModule {}
