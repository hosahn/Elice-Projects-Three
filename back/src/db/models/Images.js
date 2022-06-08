import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
//@ts-check
class Images {
  static async create(data) {
    console.log(data);
    const body = await prisma.images.createMany({
      data: data,
    });
    return body;
  }
}

export { Images };
