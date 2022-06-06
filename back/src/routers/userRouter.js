import { Router } from "express";
import passport from "passport";
import User from "../db/models/User";
const userRouter = Router();

// 콜백 URL
userRouter.get("/complete", (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.redirect("/user/main");
  } else {
    res.redirect("/error");
  }
});

userRouter.get(
  "/googlecomplete",
  passport.authenticate("google"),
  (req, res) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
      res.redirect("/user/main");
    } else {
      res.redirect("/error");
    }
  }
);

userRouter.get("/navercomplete", passport.authenticate("naver"), (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.redirect("/user/main");
  } else {
    res.redirect("/error");
  }
});

userRouter.get("/kakaocomplete", passport.authenticate("kakao"), (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.redirect("/user/main");
  } else {
    res.redirect("/error");
  }
});

//Logout

userRouter.get("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout((err) => {
      if (err) return next(err);
    });
    res.redirect("http://localhost:3000");
  }
  res.redirect("/user/error");
});

//CallBack Url이 리다이렉트 하는 경로

userRouter.get("/main", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("Here comes main page");
  } else {
    res.redirect("http://localhost:3000");
  }
});

userRouter.get("/error", (req, res) => {
  res.send("Userinformation nicht vorhanden");
});

// 회원가입

userRouter.post("/signup", async (req, res) => {
  const { email, pw } = req.body;
  const social = "local";
  const result = await User.createUser({ email, pw, social });
  res.send(result);
});

export { userRouter };
