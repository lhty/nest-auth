import { ConflictException, Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { Token } from '../modules/auth/entities';
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

  async user(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this.prisma.user.findUnique({ ...args, include: { profile: true } });
  }

  async users(params: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.prisma.user.findMany({ ...params, include: { profile: true } });
  }

  async createUser(
    user: Prisma.UserCreateInput,
  ): Promise<Token & { user: User }> {
    try {
      const new_user = await this.prisma.user.create({
        data: {
          ...user,
          profile: {
            create: {
              ...user.profile.create,
              email: user.profile.create.email.toLowerCase(),
            },
          },
          pwd: await this.passwordService.hashPassword(user.pwd),
        },
      });
      return {
        ...this.authService.generateTokens({
          id: new_user.id,
        }),
        user: new_user,
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          `Email ${user.profile.create.email} already used.`,
        );
      } else {
        throw new Error(error);
      }
    }
  }

  async updateUser(user: Prisma.UserUpdateArgs): Promise<User> {
    return this.prisma.user.update(user);
  }

  async deleteUser(user: Prisma.UserDeleteArgs): Promise<User> {
    return this.prisma.user.delete(user);
  }
}
