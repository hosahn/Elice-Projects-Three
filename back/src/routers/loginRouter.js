import { Router } from "express";
import passport from "passport";
import { passportStrategies } from "../passport/finalStrategy.js";
const loginRouter = Router();

passport.authenticate();
passportStrategies();
loginRouter.get("/local", passport.authenticate("local"));

loginRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email"] }, (req, res) => {
    console.log("completed");
  })
);

loginRouter.get("/kakao", passport.authenticate("kakao"), (req, res) => {
  console.log("completed");
});

export { loginRouter };
