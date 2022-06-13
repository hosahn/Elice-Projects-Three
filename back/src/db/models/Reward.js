// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";
import moment from "moment";
const prisma = new PrismaClient();
class Reward {
  static async giveReward({ reward, user, challenge_id }) {
    const alreadyGiven = await prisma.user_rewards.findFirst({
      where: {
        reward_id: reward,
        user_id: user,
      },
    });
    if (alreadyGiven) return false;
    else {
      console.log("created");
      return await prisma.user_rewards.create({
        data: {
          challenge_id: challenge_id,
          reward_id: reward,
          user_id: user,
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
