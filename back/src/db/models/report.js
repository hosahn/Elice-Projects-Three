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
      await prisma.$queryRaw`select count(*) as count, emotion from diary where user_id = 2
      AND ( date between ${to} and ${from}) group by emotion;
`;
    return result;
  }
  static async findWhen({ user_id }) {
    const morning = await prisma.$queryRaw`
    select count(*) as count from diary where user_id = 2
AND ( date between '06:00:00' and '12:00:00');`;
    const afternoon = await prisma.$queryRaw`
    select count(*) as count from diary where user_id = 2
AND ( date between '12:00:01' and '18:00:00')
    `;
    const night = await prisma.$queryRaw`
    select count(*) as count from diary where user_id = 2
AND ( date between '18:00:01' and '24:00:00')
`;
    const dawn = await prisma.$queryRaw`
select count(*) as count from diary where user_id = 2
AND (date between '00:00:01' and '06:00:00')
`;
    return { morning, afternoon, night, dawn };
  }
  static async findTags({ user_id }) {
    const from = moment().add(1, "days").format("YYYY-MM-DD");
    const to = moment().subtract(1, "months").format("YYYY-MM-DD");
    const result = await prisma.$queryRaw`
    select count(*) as count, tag from diary where user_id = 2
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
