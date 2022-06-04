import { Router } from "express";
import passport from "passport";
const userRouter = Router();

userRouter.get(
  "/googlecomplete",
  passport.authenticate("google"),
  (req, res) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
      res.send("login success!");
    } else {
      res.send("login failed...");
    }
  }
);

userRouter.get("/complete", (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.send("login success!");
  } else {
    res.send("login failed...");
  }
});

userRouter.get("/kakaocomplete", passport.authenticate("kakao"), (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.send("login success!");
  } else {
    res.send("login failed...");
  }
});

userRouter.get("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
    res.send("logout");
  }
  res.send("error");
});

export { userRouter };
