import { Router } from "express";
import DiaryService from "../services/diaryService.js";
const diaryRouter = Router("diary");

/**
 *  @swagger
 *  tags:
 *    name: Diary
 *    description: 일기장 관련 API
 */

diaryRouter.post("/", async (req, res, next) => {
  const body = await DiaryService.create(req.body);
  console.log(body);
  return res.status(201).json(body);
});

export { diaryRouter };
