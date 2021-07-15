import { Injectable, ExecutionContext, ContextType } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { IncomingMessage } from 'http';
import { Jwt } from '../../modules/auth/interfaces';
import { decorators } from '../enums/decorators_enum';
import { TokenException } from '../errors/token_errors';

@Injectable()
export class JwtGuard extends AuthGuard('jwt-strategy') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  getRequest(context: ExecutionContext): any {
    if (context.getType<ContextType | 'graphql'>() === 'graphql') {
      const gqlExecCtx = GqlExecutionContext.create(context);
      const request: IncomingMessage = gqlExecCtx.getContext().req;
      return request;
    }
    return context.switchToHttp().getRequest();
  }

  handleRequest(err: Error, user: any, info: Error & Jwt) {
    if (err || !user) {
      throw err || TokenException(info.name);
    }
    return user;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(
      decorators.public,
      [context.getHandler(), context.getClass()],
    );
    if (isPublic) {
      return true;
    }
    const isTokenValid = await super.canActivate(context);
    return !!isTokenValid;
  }
}
