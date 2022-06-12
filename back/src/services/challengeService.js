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
  static async getChallenges({ user_id }) {
    const challenge_array = await UserChallenge.findUncompleted({ user_id });
    const result = await Challenge.findChallenges({ challenge_array });
    return result;
  }
  static async findFailedPeople() {
    const array = await UserChallenge.findFailed({});
    const array2 = await User.findUserByEmail({ id: array });
    return array2;
  }
  static async findSucceed({ duration, type }) {
    const array = await UserChallenge.findSucceed({ duration, type });
    const array2 = await User.findUserByEmail({ id: array });
    return array2;
  }
}

export { ChallengeService };
