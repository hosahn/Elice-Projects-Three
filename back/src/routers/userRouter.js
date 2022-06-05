import { Router } from "express";
import passport from "passport";
const userRouter = Router();

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

userRouter.get("/kakaocomplete", passport.authenticate("kakao"), (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.redirect("/user/main");
  } else {
    res.redirect("/error");
  }
});

userRouter.get("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout((err) => {
      if (err) return next(err);
    });
    res.redirect("http://localhost:3000");
  }
  res.redirect("/user/error");
});

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

export { userRouter };
