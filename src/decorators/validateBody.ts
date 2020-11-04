import "reflect-metadata";
import { MetadataKeys } from "../enums/MetadataKeys";
import { IRouteHandlerDescriptor } from "../interfaces/IRouteHandlerDescriptor";

export function validateBody(...keys: string[]) {
  return function (
    target: any,
    key: string,
    routeHandlerDescriptor: IRouteHandlerDescriptor
  ) {
    Reflect.defineMetadata(MetadataKeys.Validator, keys, target, key);
  };
}
