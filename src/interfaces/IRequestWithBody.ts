// * Interfaces
import { Request } from "express";

export interface IRequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
