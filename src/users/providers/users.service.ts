import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto } from 'src/auth/dtos/auth.dto';
import { UserEntity } from '../user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findById(id: string): Promise<UserEntity | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(userData: SignUpDto): Promise<UserEntity> {
    return this.prisma.user.create({
      data: userData,
    });
  }
}
