import { Diary } from "../db/index.js";
import { diaryRouter } from "../routers/diaryRouter.js";
import ImagesService from "./imagesService.js";
//@ts-check
export default class DiaryService {
  /**
   * @param {object} body - router에서 보내준 객체
   * @param {number} body.user_id - 일기를 작성한 유저 ID
   * @param {string} body.text - 일기 내용
   * @param {string} body.title - 일기 제목
   * @param {string} body.tag - 일기 태그 [ 주제 ]
   * @param {string[]} images - 일기에 들어간 이미지 배열
   * @returns {Promise<{id:number, user_id:number, text: string, title: string, tag: string, date: Date, view: number, count: number}>}
   */
  static async create({ user_id, text, title, tag }, images) {
    const newDiary = {
      user_id: +user_id,
      text,
      title,
      tag,
    };
    const body = await Diary.create(newDiary);
    const { id } = body;
    const post_images = await ImagesService.postImages(id, images);
    body["count"] = post_images.count; // 일기에 들어간 이미지 개수
    return body;
  }
  /**
   * @param {number} id - 삭제할 ID 값
   */
  static async delete(id) {
    const body = await Diary.delete(id);
    return body;
  }

  static async imageCreate() {}
}
