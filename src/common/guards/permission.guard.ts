import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ContextType,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { IncomingMessage } from 'http';
import { UserService } from '../../services/user.service';
import { decorators } from '../enums/decorators_enum';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly reflector: Reflector,
  ) {}
  getRequest(context: ExecutionContext): any {
    if (context.getType<ContextType | 'graphql'>() === 'graphql') {
      const gqlExecCtx = GqlExecutionContext.create(context);
      const request: IncomingMessage = gqlExecCtx.getContext().req;
      return request;
    }
    return context.switchToHttp().getRequest();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(
      decorators.public,
      [context.getHandler(), context.getClass()],
    );
    if (isPublic) {
      return true;
    }
    const { id } = this.getRequest(context).user;
    const user = await this.userService.user({ where: { id } });
    console.log('user: ', JSON.stringify(user.role));
    return true;
  }
}
