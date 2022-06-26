import { Router } from 'express';
import passport from 'passport';
const loginRouter = Router();

loginRouter.post(
<<<<<<< HEAD
  '/local',
  passport.authenticate('local', {
    failureRedirect: '/user/failed',
    successRedirect: '/user/localcomplete',
=======
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
>>>>>>> Be/afterDiary/HS
  }),
  (err) => {
    console.log(err);
  }
);

loginRouter.get(
<<<<<<< HEAD
  '/google',
  passport.authenticate('google', { scope: ['email'] }, (err) => {
=======
  "/google",
  (req, res, next) => {
    if (req.isAuthenticated()) {
      res.send("이미 로그인되어있습니다.");
    } else {
      next();
    }
  },
  passport.authenticate("google", { scope: ["email"] }, (err) => {
>>>>>>> Be/afterDiary/HS
    console.log(err);
  })
);

<<<<<<< HEAD
loginRouter.get('/kakao', passport.authenticate('kakao'), (err) => {
  console.log(err);
});

loginRouter.get('/naver', passport.authenticate('naver'), (err) => {
  console.log(err);
});
=======
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
>>>>>>> Be/afterDiary/HS

export { loginRouter };
