// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";
import moment from "moment";
const prisma = new PrismaClient();
class Reward {
  static async giveReward({ reward, user_id }) {
    const alreadyGiven = prisma.user_rewards.findFirst({
      where: {
        reward_id: reward,
        user_id: user_id,
      },
    });
    if (alreadyGiven) return false;
    else {
      return await prisma.user_rewards.create({
        data: {
          reward_id: reward,
          user_id: user_id,
          inserted_at: moment().format(),
        },
      });
    }
  }
  static async findReward({ challenge_id, duration }) {
    const result = prisma.reward.findMany({
      where: {
        challenge_id: challenge_id,
        duration: duration,
      },
      select: {
        id: true,
      },
    });
    return result;
  }
}

export { Reward };
