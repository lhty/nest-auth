import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';
import { Jwt } from '../interfaces';
import { AuthService } from '../../../services/auth.service';

@Injectable()
export class JwtUserStrategy extends PassportStrategy(
  Strategy,
  'jwt-user-strategy',
) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      ignoreExpiration: false,
    });
  }
  async validate(payload: Jwt): Promise<User> {
    /* Check roles here TBD*/
    const user = await this.authService.validateUser(payload.id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
