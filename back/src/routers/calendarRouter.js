import { Router } from "express";
import { Calendar } from "../db/index.js";

const calendarRouter = Router();

calendarRouter.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(true);
  } else {
    res.send(false);
  }
});

export { calendarRouter };
