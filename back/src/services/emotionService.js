import { Emotion } from "../db/index.js";
//@ts-check
export default class EmotionService {
  static async create({ userId, diaryId, emotion }) {
    const body = {
      userId,
      diaryId,
      emotion,
    };

    const result = Emotion.create(body);
    return result;
  }
}
