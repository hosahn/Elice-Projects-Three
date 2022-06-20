import { Router } from "express";
import { Fortune } from "../db/index.js";

const afterDiaryRouter = Router();

afterDiaryRouter.get("/music", (req, res) => {
  res.send(true);
});

afterDiaryRouter.get("/activity", (req, res) => {
  res.send(false);
});
afterDiaryRouter.get("fortune", (req, res) => {
  res.send(false);
});

export { afterDiaryRouter };
