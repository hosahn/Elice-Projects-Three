import { Reward, User, UserChallenge } from "../db/index.js";
import { ChallengeService } from "../services/challengeService.js";

class Schedule {
  static async findUnconfirmed() {
    const result = await ChallengeService.findFailedPeople();
    console.log(result);
    return result;
  }
  static async deleteFailed() {
    const result = await ChallengeService.findFailedPeople();
    console.log(result);
    const array = result.map((result) => result.id);
    console.log(array);
    const deleted = await ChallengeService.deleteFailedPeople({ array });
    console.log(deleted);
    return deleted;
  }
  static async findSucceed() {
    const temporarySuccess11 = await UserChallenge.getTemporarySuccess({
      tempo: 10,
      type: 1,
      duration: 50,
    }); //성공한 사람 확인 50일치중 10일치
    if (temporarySuccess11.length > 0) {
      const user11 = temporarySuccess11.map(
        (temporarySuccess11) => temporarySuccess11.user_id
      ); //유저아이디만 따로 배열 생성
      const reward11 = await Reward.findReward({
        challenge_id: temporarySuccess11[0].challenge_id,
        duration: 10,
      }); //challengeId와 duration을 이용해 보상 확인
      for (let i = 0; i < user11.length; i++) {
        await Reward.giveReward({ reward: reward11, user: user11[i] }); //giveReward로 성공한 사람의 아이디와 challengeID를 받아 user_reward필드에 보상 넣어주기
      }
    }
    console.log(temporarySuccess11);
    const temporarySuccess21 = await UserChallenge.getTemporarySuccess({
      tempo: 30,
      type: 1,
      duration: 50,
    }); //모든 부분 보상에 대해 반복
    if (temporarySuccess21.length > 0) {
      const user21 = temporarySuccess21.map(
        (temporarySuccess21) => temporarySuccess21.user_id
      );
      const reward21 = await Reward.findReward({
        challenge_id: temporarySuccess21[0].challenge_id,
        duration: 30,
      });
      for (let i = 0; i < user11.length; i++) {
        await Reward.giveReward({ reward: reward21, user: user21[i] });
      }
    }
    console.log(temporarySuccess21);
    const completelySuccess1 = await UserChallenge.getTemporarySuccess({
      tempo: 50,
      type: 1,
      duration: 50,
    });
    if (completelySuccess1.length > 0) {
      const user1 = completelySuccess1.map(
        (completelySuccess1) => completelySuccess1.user_id
      );
      const reward1 = await Reward.findReward({
        challenge_id: completelySuccess1[0].challenge_id,
        duration: 50,
      });
      for (let i = 0; i < user1.length; i++) {
        await Reward.giveReward({ reward: reward1, user_id: user1[i] });
      }
    }
    console.log(completelySuccess1);
    const completelySuccess2 = await UserChallenge.getTemporarySuccess({
      tempo: 5,
      type: 1,
      duration: 5,
    });
    console.log(completelySuccess2);
    if (completelySuccess2.length > 0) {
      const user2 = completelySuccess1.map(
        (completelySuccess2) => completelySuccess2.user_id
      );
      const reward2 = await Reward.findReward({
        challenge_id: completelySuccess2[0].challenge_id,
        duration: 50,
      });
      for (let i = 0; i < user1.length; i++) {
        await Reward.giveReward({ reward: reward2, user_id: user2[i] });
      }
    }
  }
}

Schedule.findSucceed();

export { Schedule };
