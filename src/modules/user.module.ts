import { Module } from '@nestjs/common';

import { PrismaService } from '../services/prisma.service';
import { UserResolver } from '../resolvers/user.resolver';
import { PasswordService } from '../services/password.service';
import { UserService } from '../services/user.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [PrismaService, UserService, UserResolver, PasswordService],
})
export class UserModule {}
