export default class BasicService {
  static async serverCheck() {
    const body = {
      success: true,
      message: "서버가 정상적으로 열렸습니다!",
    };
    return body;
  }

  static async pathTest({ id }) {
    const body = {
      success: true,
      message: `입력한 ID : ${id}`,
    };
    return body;
  }

  static async postTest({ name }) {
    const body = {
      success: true,
      message: `Post Body 에 입력된 name 값 : ${name}`,
    };
    return body;
  }

  static async queryTest({ name }) {
    const body = {
      success: true,
      message: `입력한 이름 : ${name}`,
    };
    return body;
  }
}
