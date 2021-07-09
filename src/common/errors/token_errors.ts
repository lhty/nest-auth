import { UnauthorizedException } from '@nestjs/common';

export const token_errors = {
  invalid: { error: 'JsonWebTokenError', message: 'Wrong token' },
  missing: { error: 'Error', message: 'Token required' },
  expired: { error: 'TokenExpiredError', message: 'Token expired' },
};

export const TokenException = (name: string) => {
  switch (name) {
    case token_errors.invalid.error:
      throw new UnauthorizedException(token_errors.invalid.message);
    case token_errors.expired.error:
      throw new UnauthorizedException(token_errors.expired.message);
    default:
      throw new UnauthorizedException(token_errors.missing.message);
  }
};
