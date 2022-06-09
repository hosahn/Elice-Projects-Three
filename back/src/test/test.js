import request from "supertest";
import { app } from "../app.js";
import DiaryService from "../services/diaryService.js";
import Diary from "../db/models/Diary.js";
import newDiary from "./data/new-product.json";
import * as httpMocks from "node-mocks-http";
import "../config/env.js";

// test("GET / URL 테스트", async () => {
//   const res = await request(app).get("/basic");
//   expect(res.body).toEqual("서버가 정상적으로 열렸습니다!");
// });

// describe("Basic Router 테스트", () => {
//   test("Basic Create 요청", async () => {
//     const res = await request(app).post("/basic").send({
//       email: "test@example.com",
//       pw: "1234",
//       social: "local",
//     });
//     expect(res.body.email).toEqual("test@example.com");
//   });

//   test("GET /basic/:id", async () => {
//     const res = await request(app).get("/basic/test");
//     expect(res.body.id).toEqual("test");
//   });

//   test("포스트 요청 테스트", async () => {
//     const res = await request(app).post("/basic/post").send({ name: "Shin" });
//     expect(res.body.name).toEqual("Shin");
//   });

//   test("Query 요청 확인", async () => {
//     const res = await request(app)
//       .get("/basic/query")
//       .query({ name: "신광천" });
//     expect(res.body.name).toEqual("신광천");
//   });
// });

Diary.create = jest.fn();

describe("Diary Crate 테스트 ", () => {
  test("should have a DiaryService.create function", async () => {
    expect(typeof DiaryService.create).toBe("function");
  });
  // test("should call Diary.create()", async () => {
  //   DiaryService.create(req.body); // DiaryService.create 에 필요한 파라미터를 넣어준다.
  //   expect(Diary.create).toBeCalledWith(newDiary); //  해당 파라미터를 가진 함수가 한번이라도 호출됐는지 확인
  //   // 즉 이때는 Diary.create에 newDiary 라는 이름으로 파라미터가 들어갔는지 확인
  // });
  // test("should return 201 response code", async () => {
  //   const res = await request(app).post("/diary").send(newDiary);
  //   console.log(res.body);
  //   expect(res.statusCode).toEqual(201);
  // });
});
