import { Request, Response, NextFunction } from 'express';

export const authorizeRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'You do not have permission to perform this action' });
    }
    next();
  };
};

export const checkUserRole = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.user.role !== requiredRole) {
      return res.status(403).json({ message: 'You do not have the required role to perform this action' });
    }
    next();
  };
};
