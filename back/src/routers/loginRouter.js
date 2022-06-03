import { Router } from "express";
import passport from "passport";

const loginRouter = Router();

loginRouter.get(
  "/local",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    res.send("login completed");
  }
);
loginRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
loginRouter.get(
  "/kakao",
  passport.authenticate("kakao", { scope: ["email", "profile"] })
);

loginRouter.get(
  "google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);
loginRouter.get(
  "kakao/callback",
  passport.authenticate("kakao", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);
export { loginRouter };
