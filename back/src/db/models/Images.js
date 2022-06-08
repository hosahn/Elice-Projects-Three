import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
//@ts-check
class Images {
  /**
   *
   * @param {string[]} data - 이미지의 주소가 담긴 배열
   * @returns
   */
  static async create(data) {
    const body = await prisma.images.createMany({
      data: data,
    });
    return body;
  }
}

export { Images };
