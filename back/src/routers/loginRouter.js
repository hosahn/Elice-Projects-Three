import { Router } from "express";
import passport from "passport";
const loginRouter = Router();

loginRouter.post(
  "/local",
  passport.authenticate("local", {
    failureRedirect: "/user/failed",
    successRedirect: "/user/localcomplete",
  }),
  (err) => {
    console.log(err);
  }
);

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
