import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../config/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(credentials: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this.prisma.user.findUnique(credentials);
  }

  async users(params: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.prisma.user.findMany(params);
  }

  async createUser(data: Prisma.UserCreateArgs): Promise<User> {
    return this.prisma.user.create(data);
  }

  async updateUser(data: Prisma.UserUpdateArgs): Promise<User> {
    return this.prisma.user.update(data);
  }

  async deleteUser(data: Prisma.UserDeleteArgs): Promise<User> {
    return this.prisma.user.delete(data);
  }
}
