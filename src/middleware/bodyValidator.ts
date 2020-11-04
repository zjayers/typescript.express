import { NextFunction, Request, RequestHandler, Response } from "express";

export function bodyValidator(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      return res.status(422).send("Invalid request");
    }

    for (let key of keys) {
      if (!req.body[key]) {
        return res.status(422).send(`Missing property: ${key.toUpperCase()}`);
      }
    }
    next();
  };
}
