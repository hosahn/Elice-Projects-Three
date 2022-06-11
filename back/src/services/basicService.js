//@ts-check
import Basic from "../db/models/Basic.js";
export default class BasicService {
  static async serverCheck() {
    return "서버가 정상적으로 열렸습니다!";
  }
  /**
   * @template T
   * @param {T} id - 출력할 ID 값
   * @returns {Promise<{id: T}>} - 성공여부와 입력한 ID가 담긴 객체를 return
   */
  static async pathTest(id) {
    const body = {
      id,
    };
    return body;
  }

  /**
   * @param {string} name - 출력할 이름
   * @returns {Promise<{name: string}>}  - 성공여부와 요청한 이름을 담은 객체를 return
   */
  static async postTest(name) {
    const body = {
      name,
    };
    return body;
  }

  /**
   * @param {string} name - 출력할 이름
   * @returns {Promise<{name: string}>} - 성공여부와 입력한 이름이 담긴 객체를 return
   */
  static async queryTest(name) {
    const body = {
      name,
    };
    return body;
  }

  /**
   * @param {Object} body - 들어오는 body 값
   * @param {string} body.email - 생성할 유저 이메일
   * @param {string} body.pw - 생성할 유저 비밀번호
   * @param {string} body.social - 생성할 유저가 회원가입을 한 위치
   */
  static async create({ email, pw, social }) {
    const newBasic = {
      email,
      pw,
      social,
    };
    const body = await Basic.createBasic(newBasic);
    return body;
  }
}
