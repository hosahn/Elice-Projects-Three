import { Router } from 'express';
import { Report } from '../db/index.js';
import { ChallengeService } from '../services/challengeService.js';
const reportRouter = Router();

reportRouter.get('/', async (req, res) => {
  const user_id = req.user.id;
  let emotionData = {
    happy: 0,
    sad: 0,
    angry: 0,
  };
  const diaryEmotion = await Report.findMonthlyEmotion({ user_id });
  console.log(diaryEmotion);
  for (let i = 0; i < diaryEmotion.length; i++) {
    let emotion = diaryEmotion[i].emotion;
    emotionData[emotion] = diaryEmotion[i].count;
  }
  const timeLine = await Report.findWhen({ user_id });
  let timeData = {
    morning: timeLine.morning[0].count,
    afternoon: timeLine.afternoon[0].count,
    night: timeLine.night[0].count,
    dawn: timeLine.dawn[0].count,
  };
  const UserTag = await Report.findTags({ user_id });
  const AllUsersTag = await Report.findAllUserTags();
  const challenge = await ChallengeService.getChallengeLog({ user_id });
  res.send({
    emotion: emotionData,
    time: timeData,
    userTag: UserTag,
    allTag: AllUsersTag,
    challenge: challenge,
  });
});

export { reportRouter };
