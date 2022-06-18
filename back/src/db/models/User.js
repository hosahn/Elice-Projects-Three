// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class User {
  static async createUser({ social, pw, email, name }) {
    const isUser = await prisma.users.findFirst({
      where: {
        name: name,
        email: email,
        social: social,
      },
    });
    if (isUser) {
      return null;
    }
    const createdUser = await prisma.users.create({
      data: {
        social: social,
        email: email,
        pw: pw,
        name: name,
      },
    });
    return createdUser;
  }
  static async findOneUserById({ id }) {
    const foundUser = await prisma.users.findFirst({
      where: {
        id: id,
      },
    });
    return foundUser;
  }
  static async checkUser({ email }) {
    const foundUser = await prisma.users.findFirst({
      where: {
        AND: {
          social: "local",
          email: email,
        },
      },
    });
    return foundUser;
  }
  static async findUserByEmail({ id }) {
    const foundUsers = await prisma.users.findMany({
      where: {
        id: {
          in: id,
        },
      },
    });
    return foundUsers;
  }
  static async findUser({ email, social, pw }) {
    if (pw) {
      const foundUser = await prisma.users.findFirst({
        where: {
          email: email,
          social: social,
          pw: pw,
        },
      });
      return foundUser;
    } else {
      const foundUser = await prisma.users.findFirst({
        where: {
          email: email,
          social: social,
        },
      });
      return foundUser;
    }
  }
}

export { User };
