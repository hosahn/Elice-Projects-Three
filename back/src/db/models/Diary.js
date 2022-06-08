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

  /**
   *
   * @param {number} diary_id - 조회할 다이어리 ID
   */
  static async read(id) {
    const updatePosts = await prisma.diary.updateMany({
      data: {
        view: {
          increment: 1,
        },
      },
    });
    const readDiary = await prisma.diary.findUnique({
      where: {
        id: +id,
      },
      include: {
        images: {
          select: {
            image: true,
          },
        },
      },
    });
    return readDiary;
  }

  /**
   *
   * @param {number} user_id - 다이어리 목록을 조회할 유저 ID
   */
  static async readList(user_id) {
    const diaryList = await prisma.diary.findMany({
      where: {
        user_id: +user_id,
      },
    });
    return diaryList;
  }
}
