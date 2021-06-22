import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { decorators } from '../enums/decorators_enum';
import { token_errors } from '../errors/token_errors';

/*TBD dynamic strategy swap */
@Injectable()
export class JwtTokenGuard extends AuthGuard('jwt-token-strategy') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  getRequest(context: ExecutionContext): Request {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  handleRequest(err: any, user: any, info: Error) {
    if (!err && user) {
      return user;
    }
    switch (info?.name) {
      case token_errors.invalid.error:
        throw new UnauthorizedException(token_errors.invalid.message);
      case token_errors.expired.error:
        throw new UnauthorizedException(token_errors.expired.message);
      default:
        throw new UnauthorizedException(token_errors.missing.message);
    }
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(
      decorators.public,
      [context.getHandler(), context.getClass()],
    );
    if (isPublic) {
      return true;
    }
    await super.canActivate(context);
    return true;
  }
}

@Injectable()
export class JwtUserGuard extends AuthGuard('jwt-user-strategy') {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext): Request {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);
    return true;
  }
}
