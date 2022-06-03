import { Router } from "express";
import passport from "passport";

const loginRouter = Router();

loginRouter.get("/local", passport.authenticate("local"));

loginRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email"] })
);

loginRouter.get("/kakao", passport.authenticate("kakao"));

export { loginRouter };
