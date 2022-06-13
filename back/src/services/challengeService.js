import { Challenge, Diary, User, UserChallenge } from "../db/index.js";

class ChallengeService {
  static async setChallenge({ user_id, challenge_id }) {
    const result = await Challenge.findChallenge({ challenge_id });
    const def = false;
    if (await UserChallenge.findChallenge({ user_id, challenge_id })) {
      return "Challenge already exists";
    }
    const add = await UserChallenge.addChallenge({
      user_id,
      challenge_id,
      type: result.type,
      duration: result.duration,
    });
    return add;
  }
  static async stopChallenge({ user_id, challenge_id }) {
    const deleted = await UserChallenge.deleteChallenge({
      user_id,
      challenge_id,
    });
    return deleted;
  }
  static async getChallengeLog({ user_id }) {
    const challenge = await UserChallenge.findChallengesByUser({ user_id });
    const challenge_array = challenge.map(
      (challenge) => challenge.challenge_id
    );
    const completed = challenge.map((challenge) => challenge.is_Completed);
    const result = await Challenge.findChallengesById({ challenge_array });
    return { completed: completed, challenge: result };
  }

  static async findFailedPeople() {
    const result = await UserChallenge.findFailed({});
    const array = result.map((result) => result.user_id);
    const array2 = await User.findUserByEmail({ id: array });
    return array2;
  }
  static async findSucceed({ duration, type }) {
    const array = await UserChallenge.findSucceed({ duration, type });
    const array2 = await User.findUserByEmail({ id: array });
    return array2;
  }
  static async deleteFailedPeople({ array }) {
    const result = await UserChallenge.deleteChallengeByIds({ array });
    return result;
  }
}

export { ChallengeService };
