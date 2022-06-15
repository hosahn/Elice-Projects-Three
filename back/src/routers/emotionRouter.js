import { Router } from "express";
import EmotionService from "../services/EmotionService.js";
import { validate } from "../middlewares/validator.js";
import { check, param, body } from "express-validator";
import * as status from "../utils/status.js";
const emotionRouter = Router();

/**
 *  @swagger
 *  tags:
 *    name: Emotion
 *    description: 감정 관련 API
 */
emotionRouter.post(
  "/",
  [
    body("diaryId").exists("diaryId는 필수로 body에 넣어줘야합니다.").bail(),
    body("emotion").exists("emotion은 필수로 body에 넣어줘야합니다.").bail(),
    validate,
  ],
  async (req, res, next) => {
    try {
      if (!req.user) {
        throw new Error("로그인 후 사용해야 합니다.");
      }
      const userId = req.user.id;
      const { diaryId, emotion } = req.body;
      const body = {
        userId,
        diaryId,
        emotion,
      };
      const createEmotion = await EmotionService.create(body);
      return res.status(status.STATUS_201_CREATED).send(createEmotion);
    } catch (error) {
      next(error);
    }
  }
);

export default emotionRouter;
