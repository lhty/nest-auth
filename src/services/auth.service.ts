import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { Auth, Token } from '../modules/auth/dto';
import { Jwt } from '../modules/auth/interfaces';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
  ) {}

  async login(email: string, password: string): Promise<Auth> {
    try {
      const pwd = await this.passwordService.validatePassword(
        password,
        user.pwd,
      );
      const user = await this.prisma.user.findUnique({
        where: { email },
      });

      return this.generateTokens({
        id: user.id,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async validateUser(id: number): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { id },
      include: { profile: true },
    });
  }

  async getUserFromToken(token: string): Promise<User> {
    const { id } = this.jwtService.decode(token) as Jwt;
    return await this.prisma.user.findUnique({ where: { id } });
  }

  generateTokens(payload: Partial<Jwt>): Token {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }

  private generateAccessToken(payload: Partial<Jwt>): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: Partial<Jwt>): string {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH,
    });
  }

  refreshToken(token: string) {
    try {
      const { id } = this.jwtService.verify(token, {
        secret: process.env.JWT_REFRESH_SECRET,
      });
      return this.generateTokens({
        id,
      });
    } catch (e) {
      throw new UnauthorizedException(e.message);
    }
  }
}
