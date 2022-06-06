import { Router } from "express";
import passport from "passport";
import { passportStrategies } from "../passport/finalStrategy.js";
const loginRouter = Router();

passport.authenticate();
passportStrategies();
loginRouter.get("/local", passport.authenticate("local"), (err) => {
  console.log(err);
});

loginRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email"] }, (err) => {
    console.log(err);
  })
);

loginRouter.get("/kakao", passport.authenticate("kakao"), (err) => {
  console.log(err);
});

loginRouter.get("/naver", passport.authenticate("naver"), (err) => {
  console.log(err);
});

export { loginRouter };
