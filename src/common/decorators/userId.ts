import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const userIdFromReq = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const context = GqlExecutionContext.create(ctx);
    const { id } = context.getContext().req.user;
    return id;
  },
);
