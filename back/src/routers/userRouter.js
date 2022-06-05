import { Router } from "express";
import passport from "passport";
const userRouter = Router();

userRouter.get("/complete", (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

userRouter.get(
  "/googlecomplete",
  passport.authenticate("google"),
  (req, res) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
      res.redirect("/");
    } else {
      res.redirect("/");
    }
  }
);

userRouter.get("/kakaocomplete", passport.authenticate("kakao"), (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

userRouter.get("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout((err) => {
      if (err) return next(err);
    });
    res.redirect("/");
  }
  res.send("error");
});

userRouter.get("/main", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("Here comes main page");
  } else {
    res.redirect("http://localhost:3000");
  }
});

export { userRouter };
