import { Emotion } from "../db/index.js";
//@ts-check
export default class EmotionService {
  static async create({ userId, diaryId, emotion }) {
    const body = {
      user_id: +userId,
      diary_id: +diaryId,
      emotion,
    };
    const result = await Emotion.create(body);
    return result;
  }
}
