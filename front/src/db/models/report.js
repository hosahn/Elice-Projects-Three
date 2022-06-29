import { PrismaClient } from "@prisma/client";
import pkg from "moment";
const { months } = pkg;
import moment from "moment";
const prisma = new PrismaClient();

class Report {
  static async findMonthlyEmotion({ user_id }) {
    const from = moment().add(1, "days").format("YYYY-MM-DD");
    const to = moment().subtract(1, "months").format("YYYY-MM-DD");
    const result =
      await prisma.$queryRaw`select count(*) as count, emotion from diary where user_id = ${user_id}
      AND ( date between ${to} and ${from}) group by emotion;
`;
    return result;
  }
  static async findWhen({ user_id }) {
    const morning = await prisma.$queryRaw`
    select count(*) as count from diary where user_id = ${user_id}
AND ( select hour(date) >= 6 AND  hour(date) < 13);`;
    const afternoon = await prisma.$queryRaw`
    select count(*) as count from diary where user_id = ${user_id}
AND ( select hour(date) >= 13 AND hour(date) < 18)
    `;
    const night = await prisma.$queryRaw`
    select count(*) as count from diary where user_id = ${user_id}
AND ( select hour(date) >= 18 AND hour(date) < 24)
`;
    const dawn = await prisma.$queryRaw`
select count(*) as count from diary where user_id = ${user_id}
AND (select hour(date) >= 0 AND hour(date) < 6)
`;
    return { morning, afternoon, night, dawn };
  }
  static async findTags({ user_id }) {
    const from = moment().add(1, "days").format("YYYY-MM-DD");
    const to = moment().subtract(1, "months").format("YYYY-MM-DD");
    const result = await prisma.$queryRaw`
    select count(*) as count, tag from diary where user_id = ${user_id}
AND ( date between ${to} and ${from})
group by tag order by count desc limit 3
    `;
    return result;
  }

  static async findAllUserTags() {
    const from = moment().add(1, "days").format("YYYY-MM-DD");
    const to = moment().subtract(1, "months").format("YYYY-MM-DD");
    const result = await prisma.$queryRaw`
    select count(*) as count, tag from diary where ( date between ${to} and ${from}) group by tag order by count desc limit 3
    `;
    return result;
  }
}

export { Report };
