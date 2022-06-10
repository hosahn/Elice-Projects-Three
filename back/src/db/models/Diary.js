import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
//@ts-check
export default class Diary {
  /**
   * - 일기 생성 Model 함수
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
   * - 일기 삭제 Model 함수
   * @param {number} id - 삭제할 ID 값
   * @returns {Promise<{id:number, user_id:number, text: string, title: string, tag: string, date: Date, view: number}>}
   */
  static async delete(id) {
    const deleteDiary = await prisma.diary.update({
      where: {
        id: +id,
      },
      data: {
        deleted: true,
      },
    });
    return deleteDiary;
  }

  /**
   * - 일기 상세 조회 Model 함수
   * @param {number} diary_id - 조회할 다이어리 ID
   */
  static async read(id) {
    const updatePosts = await prisma.diary.update({
      where: {
        id: +id,
      },
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
    });
    return readDiary;
  }

  /**
   * - 일기 목록 조회 Model 함수
   * @param {number} userId - 다이어리 목록을 조회할 유저 ID
   */
  static async readList(userId) {
    const diaryList = await prisma.diary.findMany({
      where: {
        user_id: +userId,
        deleted: false,
      },
    });
    return diaryList;
  }
}
