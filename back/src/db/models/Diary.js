import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
//@ts-check
export default class Diary {
  /**
   *
   * @param {object} newDiary
   * @returns {Promise<{id:number, user_id:number, text: string, title: string, tag: string, date: Date, view: number}>}
   */
  static async create(newDiary) {
    const createDiary = await prisma.diary.create({
      data: newDiary,
    });
    return createDiary;
  }
  /**
   * @param {number} id - 삭제할 ID 값
   * @returns {Promise<{id:number, user_id:number, text: string, title: string, tag: string, date: Date, view: number}>}
   */
  static async delete(id) {
    const deleteDiary = await prisma.diary.delete({
      where: {
        id: +id,
      },
    });
    return deleteDiary;
  }
}
