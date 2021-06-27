import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../../services/prisma.service';
import { AuthResolver } from '../../resolvers/auth.resolver';
import { AuthService } from '../../services/auth.service';
import { PasswordService } from '../../services/password.service';
import { JwtTokenStrategy } from './strategies/jwt-token.strategy';
import { JwtUserStrategy } from './strategies/jwt-user.strategy';

@Module({
  imports: [
    PassportModule,
    PrismaService,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES },
    }),
  ],
  providers: [
    PrismaService,
    PasswordService,
    AuthService,
    AuthResolver,
    JwtUserStrategy,
    JwtTokenStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
