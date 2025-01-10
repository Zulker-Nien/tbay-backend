import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtPayload } from '../interfaces/payload.interface';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): JwtPayload => {
    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user;
    return user;
  },
);
