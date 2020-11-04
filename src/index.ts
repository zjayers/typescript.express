import express, { Request, Response } from "express";
import cookieSession from "cookie-session";
import "./controllers/LoginController";
import "./controllers/RootController";
import { AppRouter } from "./AppRouter";

/* Setup Express App */
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["lorem"],
  })
);
app.use(AppRouter.router);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port:`, PORT);
});
