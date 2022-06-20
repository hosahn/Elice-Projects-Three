import { Router } from "express";
import { Fortune } from "../db/index.js";

const afterDiaryRouter = Router();

afterDiaryRouter.get("/fortune", async (req, res) => {
  if (req.isAuthenticated()) {
    const result = await Fortune.getFortune();
    res.send(result);
  } else {
    res.send("Login First");
  }
});

afterDiaryRouter.post("/activity", async (req, res) => {
  if (req.isAuthenticated()) {
    const emotion = req.body.emotion;
  } else {
    res.send("Login First");
  }
});
afterDiaryRouter.post("/music", async (req, res) => {
  if (req.isAuthenticated()) {
    const emotion = req.body.emotion;
  } else {
    res.send("Login First");
  }
});

export { afterDiaryRouter };
