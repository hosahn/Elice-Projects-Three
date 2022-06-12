import request from "supertest";
import "../config/env.js";
import DiaryService from "../services/diaryService.js";
import app from "../app.js";

const diaryMock = {
  userId: 2,
  title: "일기 제목",
  text: "이건 일기 내용",
  tag: "공부",
};

const diaryResultMock = {
  id: 0,
  title: "일기 제목",
  text: "이건 일기 내용",
  tag: "공부",
};

describe("Diary Crate Test ", () => {
  test("should have a DiaryService.create function", async () => {
    expect(typeof DiaryService.create).toBe("function");
  });
  test("Diary.create() Compare response values", async () => {
    const result = await DiaryService.create(diaryMock); // DiaryService.create 에 필요한 파라미터를 넣어준다.
    diaryResultMock["id"] = result.id;
    expect(result).toEqual(diaryResultMock);
  });
  test("should return 201 response code", async () => {
    const res = await request(app).post("/diary").send(diaryMock);
    expect(res.statusCode).toBe(201);
  });
});

describe("Diary Read One Test", () => {
  test("should have a DiaryService.read function", async () => {
    expect(typeof DiaryService.read).toBe("function");
  });
  test("DiaryService.read() Compare response value", async () => {
    const result = await DiaryService.read(diaryResultMock.id);
    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        title: expect.any(String),
        text: expect.any(String),
        tag: expect.any(String),
        date: expect.any(Date),
        view: expect.any(Number),
      })
    );
  });
  test("should return 200 response code", async () => {
    const res = await request(app).get(`/diary/${diaryResultMock.id}`);
    expect(res.statusCode).toBe(200);
  });
});

describe("Diary Read List Test", () => {
  test("should have a DiaryService.readList", async () => {
    expect(typeof DiaryService.readList).toBe("function");
  });
  test("DiarySerivce.readList Compare response value", async () => {
    const result = await DiaryService.readList(diaryMock.userId);
    expect(result).toEqual(
      expect.objectContaining([
        {
          id: expect.any(Number),
          title: expect.any(String),
          text: expect.any(String),
          tag: expect.any(String),
          date: expect.any(Date),
          view: expect.any(Number),
        },
      ])
    );
  });
  test("should return 200 response code", async () => {
    const res = await request(app).get(`/diary/${diaryMock.userId}`);
    expect(res.statusCode).toBe(200);
  });
});
