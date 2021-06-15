import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../config/prisma.service';
import { Token } from '../modules/auth/entities';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
  ) {}

  async login(email: string, password: string): Promise<Token> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.pwd,
    );

    if (!passwordValid || !user) {
      throw new BadRequestException('Invalid credentials');
    }

    return this.generateTokens({
      userId: user.id,
    });
  }

  async createUser(user: Prisma.UserCreateInput): Promise<Token> {
    user.email = user.email.toLowerCase();
    const hashPwd = await this.passwordService.hashPassword(user.pwd);

    try {
      const new_user = await this.prisma.user.create({
        data: { ...user, pwd: hashPwd },
      });
      return this.generateTokens({
        userId: new_user.id,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(`Email ${user.email} already used.`);
      } else {
        throw new Error(error);
      }
    }
  }

  validateUser(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  getUserFromToken(token: string): Promise<User> {
    const id = this.jwtService.decode(token)['userId'];
    return this.prisma.user.findUnique({ where: { id } });
  }

  generateTokens(payload: { userId: number }): Token {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }

  private generateAccessToken(payload: { userId: number }): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: { userId: number }): string {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH,
    });
  }

  refreshToken(token: string) {
    try {
      const { userId } = this.jwtService.verify(token, {
        secret: process.env.JWT_REFRESH_SECRET,
      });

      return this.generateTokens({
        userId,
      });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
