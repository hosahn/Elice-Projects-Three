import schedule from "node-schedule";
import nodemailer from "nodemailer";
import { Reward, User, UserChallenge } from "../db/index.js";
import { ChallengeService } from "../services/challengeService";

const rule = '0 0 20 * * *';
schedule.scheduleJob(rule, () => {
    const result = ChallengeService.findFailedPeople();
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'hosahn13@gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS,
        },
      });
      const text = "오늘의 도전과제를 아직 완료하지 않으셨습니다!"
      for(let i = 0; i < result.length; i++){
        let info = await transporter.sendMail({
            from: `"밤하늘" <${process.env.NODEMAILER_USER}>`,
            to: result[i],
            subject: 'Auth Number',
            text: text,
            html: `<b>${text}</b>`,
          });
      }
      // send mail with defined transport object

});​ // 오늘 아직 챌린지를 못 한 사람들 체크, 알림 발송


const checkRule = '0 24 2 * * *';
schedule.scheduleJob(checkRule, () => {
    const result = ChallengeService.findFailedPeople();
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'hosahn13@gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.NODEMAILER_USER,
              pass: process.env.NODEMAILER_PASS,
            },
          });
          const text = "챌린지를 실패하셨습니다 ,다음에 다시 도전해주세요!"
          for(let i = 0; i < result.length; i++){
            let info = await transporter.sendMail({
                from: `"밤하늘" <${process.env.NODEMAILER_USER}>`,
                to: result[i],
                subject: 'Auth Number',
                text: text,
                html: `<b>${text}</b>`,
              });
          }
        });​ // 오늘 챌린지를 실패한 사람들 체크, 메일 발송


        //남아있는 사람들은 일단 필터링을 거친, 아직까지는 성공하고 있는 사람들
const sendRule = '0 34 2 * * *';
schedule.scheduleJob(sendRule, async () => {
  // 매일쓰기 5일챌린지, 50일챌린지 10 30 50

  const temporarySuccess11 = await UserChallenge.getTemporarySuccess({tempo : 10, type : 1, duration : 50}); //성공한 사람 확인 50일치중 10일치
  if(temporarySuccess11.length > 0){
  const user11 = temporarySuccess11.map(temporarySuccess11 => temporarySuccess11.user_id); //유저아이디만 따로 배열 생성
  const reward11 = await Reward.findReward({challenge_id : temporarySuccess11[0].challenge_id, duration : 10}); //challengeId와 duration을 이용해 보상 확인
  for(let i = 0; i < user11.length; i++) {
    await Reward.giveReward({reward : reward11, user : user11[i]}); //giveReward로 성공한 사람의 아이디와 challengeID를 받아 user_reward필드에 보상 넣어주기
  }
}
  const temporarySuccess21 = await UserChallenge.getTemporarySuccess({tempo : 30, type : 1, duration : 50}); //모든 부분 보상에 대해 반복
  if(temporarySuccess21.length > 0){
  const user21 = temporarySuccess21.map(temporarySuccess21 => temporarySuccess21.user_id);
  const reward21 = await Reward.findReward({challenge_id : temporarySuccess21[0].challenge_id, duration : 30});
  for(let i = 0; i < user11.length; i++) {
    await Reward.giveReward({reward : reward21, user : user21[i]});
  }
}
  const completelySuccess1 = await UserChallenge.getTemporarySuccess({tempo: 50, type : 1, duration : 50}); 
  if(completelySuccess1.length > 0) {
  const user1= completelySuccess1.map(completelySuccess1 => completelySuccess1.user_id);
  const reward1 = await Reward.findReward({challenge_id : completelySuccess1[0].challenge_id, duration : 50});
  for(let i = 0; i < user1.length; i++) {
    await Reward.giveReward({reward : reward1, user_id : user1[i]});
  }
}
  const completelySuccess2 = await UserChallenge.getTemporarySuccess({tempo : 5, type : 1, duration : 5}); 
  if(completelySuccess2.length > 0) {
  const user2= completelySuccess1.map(completelySuccess2 => completelySuccess2.user_id);
  const reward2 = await Reward.findReward({challenge_id : completelySuccess2[0].challenge_id, duration : 50});
  for(let i = 0; i < user1.length; i++) {
    await Reward.giveReward({reward : reward2, user_id : user2[i]});
  }
}
  //각자 성공한 사람들에게는 보상을 지급한다.
  //보상은 reward에서 찾은 후, reward_id를 user_reward 필드에 넣는다.
}); // 챌린지를 성공한 사람들에게 메일 발송, 보상 지급


