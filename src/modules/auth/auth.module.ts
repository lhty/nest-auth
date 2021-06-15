import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../../config/prisma.service';
import { AuthResolver } from '../../resolvers/auth.resolver';
import { AuthService } from '../../services/auth.service';
import { PasswordService } from '../../services/password.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    PrismaService,
  ],
  providers: [PrismaService, PasswordService, AuthService, AuthResolver],
  exports: [AuthService],
})
export class AuthModule {}
