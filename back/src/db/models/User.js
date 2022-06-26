// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";
import bcrypt, { hash } from "bcrypt";

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
    } else {
      console.log(process.env.SALT_ROUND);
      const hashedPW = await bcrypt.hash(pw, 10);
      const createdUser = await prisma.users.create({
        data: {
          social: social,
          email: email,
          pw: hashedPW,
          name: name,
        },
      });
      return createdUser;
    }
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
        },
      });
      console.log(foundUser);
      const hashed = foundUser.pw;
      const comparedResult = await bcrypt.compare(pw, hashed);
      console.log(comparedResult);
      if (comparedResult) {
        return foundUser;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

export { User };
