import { Router } from "express";
const userRouter = Router();

userRouter.get("/complete", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("login success!");
  } else {
    res.send("login failed...");
  }
});

export { userRouter };
