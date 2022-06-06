//@ts-check
import Basic from "../db/models/Basic.js";
export default class BasicService {
  static async serverCheck() {
    const body = {
      success: true,
      message: "서버가 정상적으로 열렸습니다!",
    };
    return body;
  }
  /**
   * @template T
   * @param {T} id - 출력할 ID 값
   * @returns {Promise<{success: boolean, message: string}>} - 성공여부와 입력한 ID가 담긴 객체를 return
   */
  static async pathTest(id) {
    const body = {
      success: true,
      message: `입력한 ID : ${id}`,
    };
    return body;
  }

  /**
   * @param {string} name - 출력할 이름
   * @returns {Promise<{success: boolean, message: string}>}  - 성공여부와 요청한 이름을 담은 객체를 return
   */
  static async postTest(name) {
    const body = {
      success: true,
      message: `Post Body 에 입력된 name 값 : ${name}`,
    };
    return body;
  }

  /**
   * @param {string} name - 출력할 이름
   * @returns {Promise<{success: boolean, message: string}>} - 성공여부와 입력한 이름이 담긴 객체를 return
   */
  static async queryTest(name) {
    const body = {
      success: true,
      message: `입력한 이름 : ${name}`,
    };
    return body;
  }

  /**
   * @param {Object} body - 들어오는 body 값
   * @param {string} body.name - 생성할 유저 이름
   * @return {Promise<{name: string}>} - 생성한 유저에 대한 정보를 반환
   */
  static async create({ name }) {
    const newBasic = {
      name,
    };
    // const body = await Basic.createBasic(newBasic);
    const { name: getName } = await Basic.createBasic(newBasic);
    const body = { name: getName };
    return body;
  }
}
