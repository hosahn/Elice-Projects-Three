import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default class Diary {
  static async create(newDiary) {
    const createDiary = await prisma.diary.create({
      data: newDiary,
    });
    return createDiary;
  }
}
