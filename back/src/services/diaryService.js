import { Diary } from '../db/index.js';
//@ts-check
export default class DiaryService {
  /**
   * - 일기 생성 Service 함수
   * @param {object} body - router에서 보내준 객체
   * @param {number} body.userId - 일기를 작성한 유저 ID
   * @param {string} body.text - 일기 내용
   * @param {string} body.title - 일기 제목
   * @param {string} body.tag - 일기 태그 [ 주제 ]
   * @returns {Promise<{id:number, user_id:number, text: string, title: string, tag: string, date: Date, view: number}>}
   */
  static async create({ userId, text, title, tag }) {
    const newDiary = {
      user_id: +userId,
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
   * @returns {Promise<{id:number, user_id:number, text: string, title: string, tag: string, date: Date, view: number}>}
   */
  static async read(id) {
    const body = await Diary.read(id);
    return body;
  }

  /**
   *  - 일기 목록 조회 Service 함수
   * @param {number} userId - 지금까지 작성한 일기 리스트를 조회하기 위한 user_id 값
   * @returns {Array.Promise<{id:number, user_id:number, text: string, title: string, tag: string, date: Date, view: number}>}
   */
  static async readList(userId) {
    const body = await Diary.readList(userId);
    return body;
  }

  /**
   *  - 일기가 존재하는지 확인하는 함수
   * @param {number} id - 다이어리 고유 ID
   */
  static async find(id) {
    const diary = await Diary.find(id);
    return diary;
  }

  /**
   * - 유저가 현재 진행 중인 챌린지가 있는지 검사하는 함수
   * @param {number} userId - diary를 작성한 user_id
   */
  static async challengeCheck(userId) {
    const challenge = await Diary.challengeCheck(userId);
    return challenge;
  }
  /**
   * - 유저가 챌린지 참여하고 있을 때 그날 글을 작성했다고 체크 해주는 함수
   * @param {number} userId - diary를 작성한 user_id
   */
  static async check(userId) {
    const check = await Diary.check(userId);
    return check;
  }

  /**
   * - 유저가 가진 일기를 조회하기 위해 존재하는 유저인지 확인
   * @param {number} userId - user의 고유 ID
   */
  static async userCheck(userId) {
    const user = await Diary.userCheck(userId);
    return user;
  }

  /**
   * - 유저가 가진 일기 중 랜덤으로 3개를 보여주는 함수
   * @returns {Array.Promise<{id:number, text: string, title: string, tag: string, date: Date, view: number}>}
   */
  static async randomDiarys() {
    const diarys = await Diary.randomDiarys();
    return diarys;
  }
}
