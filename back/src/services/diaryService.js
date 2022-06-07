import Diary from "../db/models/Diary.js";
//@ts-check
export default class DiaryService {
  /**
   * @param {object} body - router에서 보내준 객체
   * @param {number} body.user_id - 일기를 작성한 유저 ID
   * @param {string} body.text - 일기 내용
   * @param {string} body.title - 일기 제목
   * @param {string} body.tag - 일기 태그 [ 주제 ]
   * @param {number} body.view - 일기를 본 횟수
   * @param {Data} body.date - 일기를 작성한 날짜
   */
  static async create({ user_id, text, title, tag, view, date }) {
    const newDiary = {
      user_id,
      text,
      title,
      tag,
      view,
      date,
      image,
    };
    const body = await Diary.create(newDiary);
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
