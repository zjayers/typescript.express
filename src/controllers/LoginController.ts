import { Request, Response } from "express";
import { controller, get, post, use, validateBody } from "../decorators";
import { IRequestWithBody } from "../interfaces/IRequestWithBody";
import { requireAuthentication } from "../middleware/requireAuthentication";
import { loginFormHTML } from "../partials/htmlPartials";

// * Controller
@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(loginFormHTML);
  }

  @post("/login")
  @validateBody("email", "password")
  postLogin(req: IRequestWithBody, res: Response) {
    const { email, password } = req.body;

    if (
      email &&
      password &&
      email === "test@test.com" &&
      password === "password"
    ) {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.status(401).send("Invalid email or password");
    }
  }

  @get("/logout")
  logout(req: Request, res: Response) {
    req.session = null;
    res.redirect("/");
  }

  @get("/protected")
  @use(requireAuthentication)
  protected(req: Request, res: Response) {
    res.send("Welcome to the protected route!");
  }
}
