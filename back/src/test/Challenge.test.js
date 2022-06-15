import { ChallengeService } from "../services/challengeService.js";
import { Schedule } from "../schedule/checkConfirm.js";
import request from "supertest";
import "../config/env.js";
import app from "../app.js";

const challengeStartMock = {
  user_id: 1,
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
});
