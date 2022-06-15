import request from "supertest";
import "../config/env.js";
import app from "../app.js";
import EmotionService from "../services/emotionService.js";

const emotionMock = {
  diaryId: 410,
  emotion: "happy",
};
let cookie;

beforeAll(async () => {
  const result = await request(app)
    .post("/login/local")
    .send({ email: process.env.TEST_EMAIL, pw: process.env.TEST_PW });
  cookie = result.headers["set-cookie"][0];
});

describe("Emotion Create Test", () => {
  test("should have a create function", async () => {
    expect(typeof EmotionService.create).toBe("function");
  });
  test("should return 201 response code", async () => {
    const res = await request(app)
      .post("/emotion")
      .send(emotionMock)
      .set("Cookie", cookie);
    expect(res.statusCode).toBe(201);
  });
});
