import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/providers/users.service';
import { SignUpDto, SignInDto } from '../dtos/auth.dto';
import { TokenModel } from '../dtos/token.dto';
import { BcryptProvider } from './bcrypt.provider';
import { UserEntity } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly bcryptProvider: BcryptProvider,
  ) {}

  async signUp(signUpInput: SignUpDto): Promise<TokenModel> {
    const existingUser = await this.userService.findByEmail(signUpInput.email);
    if (existingUser) {
      throw new UnauthorizedException('Email already exists');
    }

    const hashedPassword = await this.bcryptProvider.hashPassword(
      signUpInput.password,
    );
    const user = await this.userService.create({
      ...signUpInput,
      password: hashedPassword,
    });

    return this.generateTokens(user);
  }

  async signIn(signInInput: SignInDto): Promise<TokenModel> {
    const user = await this.userService.findByEmail(signInInput.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await this.bcryptProvider.comparePassword(
      signInInput.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.generateTokens(user);
  }

  async refreshToken(refreshToken: string): Promise<TokenModel> {
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      const user = await this.userService.findById(payload.sub);
      if (!user) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      return this.generateTokens(user);
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  private async generateTokens(user: UserEntity): Promise<TokenModel> {
    const payload = { sub: user.id, email: user.email };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
        expiresIn: '30m',
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
        expiresIn: '30d',
      }),
    ]);

    return {
      accessToken,
      refreshToken,
      user,
    };
  }
}
