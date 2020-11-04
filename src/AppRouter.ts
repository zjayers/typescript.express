import express from "express";

// Setup singleton router
export class AppRouter {
  private static _router: express.Router;

  static get router(): express.Router {
    if (!AppRouter._router) {
      AppRouter._router = express.Router();
    }
    return AppRouter._router;
  }
}
