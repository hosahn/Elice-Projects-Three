<<<<<<< HEAD
import { PrismaClient } from "@prisma/client";
=======
import { PrismaClient } from '@prisma/client';
>>>>>>> origin/test/tag/ny
const prisma = new PrismaClient();

class Fortune {
  static async getFortune() {
    const result =
      await prisma.$queryRaw`select text from fortune order by rand() limit 1 `;
    return result;
  }
}

export { Fortune };
