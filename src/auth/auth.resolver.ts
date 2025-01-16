import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './providers/auth.service';
import { SignUpDto, SignInDto } from './dtos/auth.dto';
import { TokenModel } from './dtos/token.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => TokenModel)
  async signUp(@Args('input') signUpInput: SignUpDto): Promise<TokenModel> {
    return this.authService.signUp(signUpInput);
  }

  @Mutation(() => TokenModel)
  async signIn(@Args('input') signInInput: SignInDto): Promise<TokenModel> {
    return this.authService.signIn(signInInput);
  }

  @Mutation(() => TokenModel)
  async refreshToken(
    @Args('refreshToken') refreshToken: string,
  ): Promise<TokenModel> {
    return this.authService.refreshToken(refreshToken);
  }
}
