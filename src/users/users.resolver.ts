import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UsersService } from './providers/users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from './user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  async me(@CurrentUser() user: User): Promise<User> {
    return this.userService.findByEmail(user.email);
  }
}
