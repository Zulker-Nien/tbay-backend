import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UsersService } from './providers/users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UserEntity } from './user.entity';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => UserEntity)
  @UseGuards(JwtAuthGuard)
  async me(@CurrentUser() user: UserEntity): Promise<UserEntity> {
    return this.userService.findByEmail(user.email);
  }
}
