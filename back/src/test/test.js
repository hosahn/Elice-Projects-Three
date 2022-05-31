import request from "supertest";
import { basicRouter } from "../routers/basicRouter.js";
import { app } from "../app.js";

describe("GET / 테스트", () => {
  const body = {
    success: true,
    message: "서버가 정상적으로 열렸습니다!",
  };
  test("GET / URL 테스트", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual(body);
  });
});

describe("GET /:id 테스트", () => {
  const body = {
    success: true,
    message: `입력한 ID : test`,
  };
  test("GET /:id", async () => {
    const res = await request(app).get("/test");
    expect(res.body).toEqual(body);
  });
});

describe("POST /post 테스트", () => {
  const body = {
    success: true,
    message: `Post Body 에 입력된 name 값 : Shin`,
  };
  test("포스트 요청 테스트", async () => {
    const res = await request(app).post("/post").send({ name: "Shin" });
    expect(res.body).toEqual(body);
  });
});

describe("GET Query /query?name 테스트", () => {
  const body = {
    success: true,
    message: `입력한 이름 : 신광천`,
  };
  test("Query 요청 확인", async () => {
    const res = await request(app).get("/query").query({ name: "신광천" });
    expect(res.body).toEqual(body);
  });
});

describe("Error /error 테스트", () => {
  test("에러 요청 테스트", async () => {
    const res = await request(app).get("/error");
    expect(res.statusCode).toBe(500);
  });
});
