import { Diary } from "../db/index.js";
import { diaryRouter } from "../routers/diaryRouter.js";
import ImagesService from "./imagesService.js";
//@ts-check
export default class DiaryService {
  /**
   * - 일기 생성 Service 함수
   * @param {object} body - router에서 보내준 객체
   * @param {number} body.user_id - 일기를 작성한 유저 ID
   * @param {string} body.text - 일기 내용
   * @param {string} body.title - 일기 제목
   * @param {string} body.tag - 일기 태그 [ 주제 ]
   * @param {string[]} images - 일기에 들어간 이미지 배열
   * @returns {Promise<{id:number, user_id:number, text: string, title: string, tag: string, date: Date, view: number, count: number}>}
   */
  static async create({ user_id, text, title, tag }) {
    const newDiary = {
      user_id: +user_id,
      text,
      title,
      tag,
    };
    const body = await Diary.create(newDiary);
    return body;
  }
  /**
   * - 일기 삭제 Service 함수
   * @param {number} id - 삭제할 ID 값
   */
  static async delete(id) {
    const body = await Diary.delete(id);
    return body;
  }
  /**
   * - 일기 개별 조회 Service 함수
   * @param {number} id - 조회할 다이어리 ID 값
   */
  static async read(id) {
    const body = await Diary.read(id);
    return body;
  }

  /**
   *  - 일기 목록 조회 Service 함수
   * @param {number} user_id - 지금까지 작성한 일기 리스트를 조회하기 위한 user_id 값
   */
  static async readList(user_id) {
    const body = await Diary.readList(user_id);
    return body;
  }
}
