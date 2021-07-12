import { ConflictException, Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { DeleteOneUserArgs, UpdateOneUserArgs } from '../../prisma/@generated';
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

  async user(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this.prisma.user.findUnique({ ...args, include: { profile: true } });
  }

  async users(params: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.prisma.user.findMany({ ...params, include: { profile: true } });
  }

  async createUser(
    input: UserWithProfileInput,
  ): Promise<Token & { user: User }> {
    input.pwd = await this.passwordService.hashPassword(input.pwd);
    input.email = input.email.toLowerCase();
    const { pwd, ...profile } = input;
    const data = { pwd, profile: { create: profile } };
    try {
      const new_user = await this.prisma.user.create({
        data,
      });
      console.log(new_user);
      const tokens = this.authService.generateTokens({
        id: new_user.id,
      });
      return {
        ...tokens,
        user: new_user,
      };
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        throw new ConflictException(`Email ${profile.email} already used.`);
      } else {
        console.log(err);
        throw new Error(err);
      }
    }
  }

  async updateUser(input: UpdateOneUserArgs): Promise<User> {
    return await this.prisma.user.update(input);
  }

  async deleteUser(user: DeleteOneUserArgs): Promise<Boolean> {
    const result = await this.prisma.user.delete(user);
    return !!result;
  }
}
