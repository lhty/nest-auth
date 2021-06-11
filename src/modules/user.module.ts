import { Module } from '@nestjs/common';

import { PrismaService } from '../config/prisma.service';
import { UserResolver } from '../resolvers/user.resolver';
import { UserService } from '../services/user.service';

@Module({
  providers: [PrismaService, UserService, UserResolver],
})
export class UserModule {}
