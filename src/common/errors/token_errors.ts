export const token_errors = {
  invalid: { error: 'JsonWebTokenError', message: 'Wrong token' },
  missing: { error: 'Error', message: 'Token required' },
  expired: { error: 'TokenExpiredError', message: 'Token expired' },
};
