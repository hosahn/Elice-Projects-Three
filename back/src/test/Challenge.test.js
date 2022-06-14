import { ChallengeService } from "../services/challengeService.js";
import { Schedule } from "../schedule/checkConfirm.js";
import request from "supertest";
import "../config/env.js";
import app from "../app.js";

const challengeStartMock = {
  user_id: 2,
  challenge_id: 4,
};

const challengeStopMock = {
  user_id: 2,
  challenge_id: 4,
};

describe("Challenge Start Test", () => {
  test("should have a ChallengeService.create function", async () => {
    expect(typeof ChallengeService.setChallenge).toBe("function");
  });
  test("Challege.setChallege() Check the response structure", async () => {
    const result = await ChallengeService.setChallenge(challengeStartMock); // DiaryService.create 에 필요한 파라미터를 넣어준다.
    expect(result).toEqual(challengeStartMock);
  });
  test("ChallegeID Parameter error test", async () => {
    const res = await request(app)
      .get("/challenge/start")
      .send(challengeStartMock);
    expect(res).toBe("올바르지 않은 접근입니다.");
  });
  test("UserId parameter error test", async () => {
    const userIdErrorMock = { ...diaryMock };
    delete userIdErrorMock.userId;
    const res = await request(app).post("/diary").send(userIdErrorMock);
    expect(res.body.error.message).toBe(
      "현재 접속해 있는 유저의 ID 값이 들어가 있지 않습니다."
    );
    expect(res.statusCode).toBe(400);
  });
  test("Title parameter error test", async () => {
    const titleErrorMock = { ...diaryMock };
    delete titleErrorMock.title;
    const res = await request(app).post("/diary").send(titleErrorMock);
    expect(res.body.error.message).toBe("제목은 필수로 입력해야 합니다.");
    expect(res.statusCode).toBe(400);
  });
  test("Text parameter error test", async () => {
    const textErrorMock = { ...diaryMock };
    delete textErrorMock.text;
    const res = await request(app).post("/diary").send(textErrorMock);
    expect(res.body.error.message).toBe(
      "일기 내용은 필수로 적어주셔야 합니다."
    );
    expect(res.statusCode).toBe(400);
  });
});
