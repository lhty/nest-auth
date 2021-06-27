import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { Token } from '../modules/auth/entities';
import { Jwt } from '../modules/auth/interfaces';
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
      id: user.id,
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
        id: new_user.id,
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

  async validateUser(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
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
