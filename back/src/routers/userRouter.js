import { Router } from "express";
import passport from "passport";
import { User } from "../db/models/User.js";
import "../config/env.js";
const userRouter = Router();
userRouter.get(
  "/googlecomplete",
  passport.authenticate("google"),
  (req, res) => {
    if (req.isAuthenticated()) {
      res
        .cookie("sessionId", req.sessionID, { maxAge: 900000, httpOnly: true })
        .redirect(process.env.REDIRECT_URL);
    } else {
      res.redirect("/user/failed");
    }
  }
);

userRouter.get("/navercomplete", passport.authenticate("naver"), (req, res) => {
  if (req.isAuthenticated()) {
    res
      .cookie("sessionId", req.sessionID, { maxAge: 900000, httpOnly: true })
      .redirect(process.env.REDIRECT_URL);
  } else {
    res.redirect("/user/failed");
  }
});

userRouter.get("/kakaocomplete", passport.authenticate("kakao"), (req, res) => {
  if (req.isAuthenticated()) {
    res
      .cookie("sessionId", req.sessionID, { maxAge: 900000, httpOnly: true })
      .redirect(process.env.REDIRECT_URL);
  } else {
    res.redirect("/user/failed");
  }
});

userRouter.get("/localcomplete", (req, res) => {
  passport.authenticate("local");
  if (req.isAuthenticated()) {
    res
      .cookie("sessionId", req.sessionID, { maxAge: 900000, httpOnly: true })
      .redirect("/user/main");
  } else {
    res.redirect("/user/failed");
  }
});

//Logout

userRouter.get("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout((err) => {
      res.send(true);
    });
  } else {
    res.redirect("/user/failed");
  }
});

//CallBack Url이 리다이렉트 하는 경로

//성공이면 true
userRouter.get("/main", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(true);
  } else {
    res.send(false);
  }
});

// 실패면
userRouter.get("/failed", (req, res) => {
  res.send(false);
});
// 회원가입
userRouter.post("/signup/check", async (req, res) => {
  const email = req.body.email;
  const result = User.checkUser({ email });
  if (result) {
    res.send(true);
  } else {
    res.send(false);
  }
});
userRouter.post("/signup", async (req, res) => {
  const { email, pw, name } = req.body;
  const social = "local";
  const result = await User.createUser({ email, pw, social, name });
  if (result == null) {
    res.send(false);
  } else {
    res.send(true);
  }
});

userRouter.post("/signup/check", async (req, res) => {
  const { email } = req.body.email;
  const social = "local";
  const result = await User.checkUser({ email, local });
  if (result) {
    res.send(true);
  } else {
    res.send(false);
  }
});

export { userRouter };
