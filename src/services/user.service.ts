import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(credentials: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this.prisma.user.findUnique(credentials);
  }

  async users(params: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.prisma.user.findMany(params);
  }

  async updateUser(user: Prisma.UserUpdateArgs): Promise<User> {
    return this.prisma.user.update(user);
  }

  async deleteUser(user: Prisma.UserDeleteArgs): Promise<User> {
    return this.prisma.user.delete(user);
  }
}
