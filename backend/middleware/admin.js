/**
 * Restricts access to admin-only routes.
 * Must be used after protect middleware (req.user must exist).
 */
export const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    const err = new Error('Not authorized as admin');
    err.statusCode = 403;
    next(err);
  }
};
