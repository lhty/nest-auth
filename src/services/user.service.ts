import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { User } from '@prisma/client';
import {
  DeleteOneUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
} from '../../prisma/@generated';
import { Token } from '../modules/auth/dto';
import { UserWithProfileInput } from '../modules/user/dto';
import { AuthService } from './auth.service';
import { PasswordService } from './password.service';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
    private authService: AuthService,
  ) {}

  async user(args: FindUniqueUserArgs): Promise<User | null> {
    const user = this.prisma.user.findUnique({
      ...args,
      include: { profile: true },
    });
    return user;
  }

  async users(args: FindManyUserArgs): Promise<User[]> {
    const users = this.prisma.user.findMany({
      ...args,
      include: { profile: true },
    });
    return users;
  }

  async createUser(
    input: UserWithProfileInput,
  ): Promise<Token & { user: User }> {
    input.pwd = await this.passwordService.hashPassword(input.pwd);
    input.email = input.email.toLowerCase();
    const { pwd, ...profile } = input;
    const data = { pwd, profile: { create: profile } };
    try {
      const user = await this.prisma.user.create({
        data,
        include: { profile: true },
      });
      const tokens = this.authService.generateTokens({
        id: user.id,
      });
      return { ...tokens, user };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(`Email ${profile.email} already used.`);
      } else {
        throw new BadRequestException(error.message);
      }
    }
  }

  async updateUser(args: UpdateOneUserArgs): Promise<User> {
    const { data, where } = args;
    const user = await this.prisma.user.update({
      data,
      where,
    });
    return user;
  }

  async deleteUser(args: DeleteOneUserArgs): Promise<Boolean> {
    const result = await this.prisma.user.delete(args);
    return !!result;
  }
}
