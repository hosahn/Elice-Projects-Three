// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class Emotion {
  static async createEmotion() {}
  static async getEmotionDay() {}
  static async getEmotionMonth() {}
}

export { Emotion };
