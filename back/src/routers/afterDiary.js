import { Router } from "express";
import { Fortune } from "../db/index.js";

const afterDiaryRouter = Router();

afterDiaryRouter.get("/music", async (req, res) => {
  if (req.isAuthenticated()) {
  } else {
    res.send("Login First");
  }
});

afterDiaryRouter.get("/activity", (req, res) => {
  if (req.isAuthenticated()) {
  } else {
    res.send("Login First");
  }
});
afterDiaryRouter.get("fortune", (req, res) => {
  if (req.isAuthenticated()) {
  } else {
    res.send("Login First");
  }
});

export { afterDiaryRouter };
