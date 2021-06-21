import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Jwt } from '../interfaces';

@Injectable()
export class JwtTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-token-strategy',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      ignoreExpiration: false,
    });
  }
  async validate(payload: Jwt): Promise<boolean> {
    if (!payload) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
