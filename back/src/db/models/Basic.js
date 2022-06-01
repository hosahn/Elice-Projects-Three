import { BasicModel } from "../index.js";

export default class Basic {
  static async createBasic(newBasic) {
    const createNewBasic = await BasicModel.create(newBasic);
    return createNewBasic;
  }
}
