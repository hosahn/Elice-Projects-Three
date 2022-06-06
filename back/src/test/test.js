import request from "supertest";
import { app } from "../app.js";
import "../config/env.js";

describe("GET / 테스트", () => {
  test("GET / URL 테스트", async () => {
    const res = await request(app).get("/basic");
    expect(res.body).toEqual("서버가 정상적으로 열렸습니다!");
  });
});

describe("GET /:id 테스트", () => {
  test("GET /:id", async () => {
    const res = await request(app).get("/basic/test");
    expect(res.body.id).toEqual("test");
  });
});

describe("POST /post 테스트", () => {
  test("포스트 요청 테스트", async () => {
    const res = await request(app).post("/basic/post").send({ name: "Shin" });
    expect(res.body.name).toEqual("Shin");
  });
});

describe("POST /basic 테스트", () => {
  test("Basic Create 요청", async () => {
    const res = await request(app).post("/basic").send({
      email: "test@example.com",
      pw: "1234",
      social: "local",
    });
    console.log(res.body);
    expect(res.body.email).toEqual("test@example.com");
  });
});

describe("GET Query /query?name 테스트", () => {
  test("Query 요청 확인", async () => {
    const res = await request(app)
      .get("/basic/query")
      .query({ name: "신광천" });
    expect(res.body.name).toEqual("신광천");
  });
});
