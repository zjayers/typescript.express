import { Request, Response } from "express";
import { controller, get } from "../decorators";
import { homeLoginHTML, homeLogoutHTML } from "../partials/htmlPartials";

@controller("/")
class RootController {
  @get()
  home(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      return res.send(homeLogoutHTML);
    }
    res.send(homeLoginHTML);
  }
}
