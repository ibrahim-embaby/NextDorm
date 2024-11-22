import { Request, Response, NextFunction } from "express";

const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Authentication logic
  next();
};

export default authenticate;
