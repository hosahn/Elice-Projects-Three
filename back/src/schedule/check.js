import schedule from "node-schedule";
import nodemailer from "nodemailer";
import { Reward, User, UserChallenge } from "../db/index/js";
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

const sendRule = '0 34 2 * * *';
schedule.scheduleJob(sendRule, async () => {
  const FiveOne = await UserChallenge.getSucceed({duration : 5, type : 1}); // "기간" + "타입"
  const fiftyOne = await UserChallenge.getSucceed({duration : 50, type : 1});

}); // 챌린지를 성공한 사람들에게 메일 발송, 보상 지급


