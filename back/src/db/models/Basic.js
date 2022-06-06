// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default class Basic {
  static async createBasic(newBasic) {
    const createNewBasic = await prisma.categories.create({
      data: {
        name: "Alice",
      },
    });
    return createNewBasic;
  }
}
