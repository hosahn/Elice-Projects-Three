import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class UserChallenge {
  static async findChallengeByUser({ user_id }) {
    const result = prisma.user_challenge.findFirst({
      where: {
        user_id: user_id,
      },
    });
    return result;
  }
  static async findChallengesByUser({ user_id }) {
    const result = prisma.user_challenge.findMany({
      where: {
        user_id: user_id,
      },
      select: {
        challenge_id: true,
      },
    });
  }
  static async findChallenge({ user_id, challenge_id }) {
    const result = prisma.user_challenge.findFirst({
      where: {
        user_id: Number(user_id),
        challenge_id: Number(challenge_id),
        is_completed: false,
      },
    });
    return result;
  }

  static async findUncompleted({ user_id }) {
    const result = prisma.user_challenge.findMany({
      where: {
        user_id: user_id,
        is_completed: false,
      },
      select: {
        challenge_id: true,
      },
    });
  }
  static async addChallenge({ user_id, challenge_id, type }) {
    const result = prisma.user_challenge.create({
      data: {
        user_id: Number(user_id),
        challenge_id: Number(challenge_id),
        type: Number(type),
        is_completed: false,
        is_broken: true,
        start_date: null,
      },
    });
    return result;
  }
  static async deleteChallenge({ user_id, challenge_id }) {
    const result = prisma.user_challenge.deleteMany({
      where: {
        challenge_id: Number(challenge_id),
        user_id: Number(user_id),
      },
    });
    return result;
  }

  static async deleteChallengeByIds({ array }) {
    const result = prisma.user_challenge.deleteMany({
      where: {
        id: {
          in: array,
        },
      },
    });
    return result;
  }
  static async findFailed({}) {
    const result = prisma.user_challenge.findMany({
      where: {
        is_broken: true,
      },
      select: {
        user_id: true,
      },
    });
    return result;
  }

  static async getSucceed({ duration, type }) {
    const result = prisma.user_challenge.findMany({
      where: {
        type: type,
        challenge: {
          duration: duration,
        },
      },
      include: {
        challenge: {
          select: {
            id: true,
          },
        },
      },
    }); // 성공한 유저 + challengeID return
  }
  static async getTemporarySuccess({ tempo }) {
    const result = prisma.user_challenge.findMany({
      where: {},
    });
  }
}
export { UserChallenge };
