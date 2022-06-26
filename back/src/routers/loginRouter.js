import { Router } from "express";
import passport from "passport";
const loginRouter = Router();

loginRouter.post(
  "/local",
  (req, res, next) => {
    if (req.isAuthenticated()) {
      res.send("이미 로그인되어있습니다.");
    } else {
      next();
    }
  },
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
  (req, res, next) => {
    if (req.isAuthenticated()) {
      res.send("이미 로그인되어있습니다.");
    } else {
      next();
    }
  },
  passport.authenticate("google", { scope: ["email"] }, (err) => {
    console.log(err);
  })
);

loginRouter.get(
  "/kakao",
  (req, res, next) => {
    if (req.isAuthenticated()) {
      res.send("이미 로그인되어있습니다.");
    } else {
      next();
    }
  },
  passport.authenticate("kakao"),
  (err) => {
    console.log(err);
  }
);

loginRouter.get(
  "/naver",
  (req, res, next) => {
    if (req.isAuthenticated()) {
      res.send("이미 로그인되어있습니다.");
    } else {
      next();
    }
  },
  passport.authenticate("naver"),
  (err) => {
    console.log(err);
  }
);

export { loginRouter };
