import { upload } from "../config/multerSetting.js";
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
  return res.status(201).json(body);
});

diaryRouter.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const body = await DiaryService.delete(id);
  return res.status(204);
});

diaryRouter.post("/images", upload.single("image"), async (req, res, next) => {
  console.log(req.file);
});

export { diaryRouter };
