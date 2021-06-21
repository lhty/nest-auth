export const token_errors = {
  invalid: { error: 'JsonWebTokenError', message: 'wrong token' },
  missing: { error: 'Error', message: 'token required' },
  expired: { error: 'TokenExpiredError', message: 'token expired' },
};
