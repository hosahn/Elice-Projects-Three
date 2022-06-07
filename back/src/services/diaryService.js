import Diary from "../db/models/Diary.js";
export default class DiaryService {
  static async create({ id, user_id, text, title, tag, view, date, image }) {
    const newDiary = {
      id,
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
}
