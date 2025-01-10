import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './providers/auth.service';
import { SignUpInput, SignInInput } from './dtos/create-auth.input';
import { TokenModel } from './models/token.model';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => TokenModel)
  async signUp(@Args('input') signUpInput: SignUpInput): Promise<TokenModel> {
    return this.authService.signUp(signUpInput);
  }

  @Mutation(() => TokenModel)
  async signIn(@Args('input') signInInput: SignInInput): Promise<TokenModel> {
    return this.authService.signIn(signInInput);
  }

  @Mutation(() => TokenModel)
  async refreshToken(
    @Args('refreshToken') refreshToken: string,
  ): Promise<TokenModel> {
    return this.authService.refreshToken(refreshToken);
  }
}
