import "reflect-metadata";
import { AppRouter } from "../AppRouter";
import { MetadataKeys } from "../enums/MetadataKeys";
import { RouteMethods } from "../enums/RouteMethods";
import { bodyValidator } from "../middleware/bodyValidator";

export function controller(routePrefix: string) {
  return function (target: Function) {
    for (let key in target.prototype) {
      if (target.prototype.hasOwnProperty(key)) {
        const routeHandler = target.prototype[key];

        // Get Routing path
        const path = Reflect.getMetadata(
          MetadataKeys.Path,
          target.prototype,
          key
        );

        // Get Routing Methods
        const method: RouteMethods = Reflect.getMetadata(
          MetadataKeys.Method,
          target.prototype,
          key
        );

        // Get Middlewares
        const middlewares =
          Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) ||
          [];

        // Body Validator
        const requiredBodyProps =
          Reflect.getMetadata(MetadataKeys.Validator, target.prototype, key) ||
          [];

        if (path !== null && path !== undefined) {
          AppRouter.router[method](
            routePrefix + path,
            ...middlewares,
            bodyValidator(requiredBodyProps),
            routeHandler
          );
        }
      }
    }
  };
}
