// * Middlewares
import { NextFunction, Request, Response } from "express";

export function requireAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.session?.loggedIn) {
    return next();
  }

  res.status(403).send("Not Permitted");
}
