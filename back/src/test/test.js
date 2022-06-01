import request from "supertest";
import { app } from "../app.js";
import "../config/env.js";
import "../db/index.js";
import mongoose from "mongoose";

let db;
beforeAll(() => {
  const errorMsg =
    "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.js 파일을 확인해 주세요.";
  const DB_URL = process.env.MONGODB_URL || errorMsg;

  if (DB_URL !== process.env.MONGODB_URL) {
    throw new Error(errorMsg);
  }

  mongoose.connect(DB_URL);
  db = mongoose.connection;

  db.on("connected", () =>
    console.log("정상적으로 MongoDB 서버에 연결되었습니다.  ")
  );
  db.on("error", (error) => {
    console.error("MongoDB 연결에 실패하였습니다..." + "\n" + error);
    throw new Error("몽고 DB 연결에 실패하였습니다.");
  });
});

afterAll(() => {
  db.close();
  console.log("DB 연결 종료");
});

describe("GET / 테스트", () => {
  const body = {
    success: true,
    message: "서버가 정상적으로 열렸습니다!",
  };
  test("GET / URL 테스트", async () => {
    const res = await request(app).get("/basic");
    expect(res.body).toEqual(body);
  });
});

describe("GET /:id 테스트", () => {
  const body = {
    success: true,
    message: `입력한 ID : test`,
  };
  test("GET /:id", async () => {
    const res = await request(app).get("/basic/test");
    expect(res.body).toEqual(body);
  });
});

describe("POST /post 테스트", () => {
  const body = {
    success: true,
    message: `Post Body 에 입력된 name 값 : Shin`,
  };
  test("포스트 요청 테스트", async () => {
    const res = await request(app).post("/basic/post").send({ name: "Shin" });
    expect(res.body).toEqual(body);
  });
});

describe("POST /basic 테스트", () => {
  const body = {
    name: "Shin",
    age: 26,
  };
  test("Basic Create 요청", async () => {
    const res = await request(app)
      .post("/basic")
      .send({ name: "Shin", age: 26 });
    expect(res.body).toEqual(body);
  });
});

describe("GET Query /query?name 테스트", () => {
  const body = {
    success: true,
    message: `입력한 이름 : 신광천`,
  };
  test("Query 요청 확인", async () => {
    const res = await request(app)
      .get("/basic/query")
      .query({ name: "신광천" });
    expect(res.body).toEqual(body);
  });
});
