import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default class Basic {
  static async createBasic(newBasic) {
    const createNewBasic = await prisma.users.create({
      data: newBasic,
    });
    return createNewBasic;
  }
}
