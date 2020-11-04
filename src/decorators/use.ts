import { RequestHandler } from "express";
import "reflect-metadata";
import { MetadataKeys } from "../enums/MetadataKeys";
import { IRouteHandlerDescriptor } from "../interfaces/IRouteHandlerDescriptor";

export function use(middleware: RequestHandler) {
  return function (
    target: any,
    key: string,
    routeHandlerDescriptor: IRouteHandlerDescriptor
  ) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.Middleware, target, key) || [];
    Reflect.defineMetadata(
      MetadataKeys.Middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
