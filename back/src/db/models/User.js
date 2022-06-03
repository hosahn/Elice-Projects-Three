import { UserModel } from "../schemas/user.js";

class User {
  static async create({ newUser }) {
    const createdNewUser = await UserModel.create(newUser);
    return createdNewUser;
  }
  static async findUserById({ user_id }) {
    const foundUser = await UserModel.findOne({ id: user_id });
    return foundUser;
  }
}
export { User };
//로그인에 사용하는 User 클래스
