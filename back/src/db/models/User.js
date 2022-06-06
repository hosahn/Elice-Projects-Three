// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default class User {
  static async createUser({ social, pw, email }) {
    const createdUser = await prisma.users.create({
      social: social,
      email: email,
      pw: pw,
    });
    return createdUser;
  }
  static async findUser({ email, social, pw }) {
    if (pw) {
      const foundUser = await prisma.users.findUnique({
        where: {
          email: email,
          social: social,
          pw: pw,
        },
      });
      return foundUser;
    } else {
      const foundUser = await prisma.users.findUnique({
        where: {
          email: email,
          social: social,
        },
      });
      return foundUser;
    }
  }
}
