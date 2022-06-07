import { Router } from "express";
import CalendarService from "../services/calenderService.js";
const calendarRouter = Router();

calendarRouter.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(true);
  } else {
    res.send(false);
  }
});

calendarRouter.get("/:month", (req, res) => {});

export { calendarRouter };
