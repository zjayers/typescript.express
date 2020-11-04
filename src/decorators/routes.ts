import "reflect-metadata";
import { MetadataKeys } from "../enums/MetadataKeys";
import { RouteMethods } from "../enums/RouteMethods";
import { IRouteHandlerDescriptor } from "../interfaces/IRouteHandlerDescriptor";

function routeBinder(method: string) {
  return function (routingPath: string = "") {
    return function (
      target: any,
      key: string,
      routeHandlerDescriptor: IRouteHandlerDescriptor
    ) {
      Reflect.defineMetadata(MetadataKeys.Path, routingPath, target, key);
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
    };
  };
}

export const get = routeBinder(RouteMethods.Get);
export const put = routeBinder(RouteMethods.Put);
export const patch = routeBinder(RouteMethods.Patch);
export const post = routeBinder(RouteMethods.Post);
export const del = routeBinder(RouteMethods.Delete);
