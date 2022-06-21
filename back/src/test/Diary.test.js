import request from "supertest";
import "../config/env.js";
import DiaryService from "../services/diaryService.js";
import app from "../app.js";
import createUrl from "../utils/preSign.js";
import { User } from "../db/index.js";
const diaryMock = {
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

function deleteMock(del) {
  const data = Object.keys(diaryMock).reduce((acc, key) => {
    if (key !== del) {
      acc[key] = diaryMock[key];
    }
    return acc;
  }, {});
  return data;
}

let cookie;

beforeAll(async () => {
  const result = await request(app)
    .post("/login/local")
    .send({ email: process.env.TEST_EMAIL, pw: process.env.TEST_PW });
  cookie = result.headers["set-cookie"][0];
  return cookie;
});

describe("Diary Crate Success Test", () => {
  test("should have a DiaryService.create function", async () => {
    expect(typeof DiaryService.create).toBe("function");
  });
  // test("Diary.create() Check the response structure", async () => {
  //   const result = await DiaryService.create(diaryMock); // DiaryService.create 에 필요한 파라미터를 넣어준다.
  //   diaryResultMock["id"] = result.id;
  //   DiaryService.delete(diaryResultMock.id);
  //   expect(result).toEqual(diaryResultMock);
  // });
  test("should return 201 response code", async () => {
    await User.dailyDelete(2);
    const res = await request(app)
      .post("/diary")
      .send(diaryMock)
      .set("Cookie", cookie);
    diaryResultMock["id"] = res.body.id;
    expect(res.statusCode).toBe(201);
  });
  test("Title parameter error test", async () => {
    const titleErrorMock = deleteMock("title");
    const res = await request(app)
      .post("/diary")
      .send(titleErrorMock)
      .set("Cookie", cookie);
    expect(res.body.error.message).toBe("제목은 필수로 입력해야 합니다.");
    expect(res.statusCode).toBe(400);
  });
  test("Text parameter error test", async () => {
    const textErrorMock = deleteMock("text");
    const res = await request(app)
      .post("/diary")
      .send(textErrorMock)
      .set("Cookie", cookie);
    expect(res.body.error.message).toBe(
      "일기 내용은 필수로 적어주셔야 합니다."
    );
    expect(res.statusCode).toBe(400);
  });

  test("Diary Create non-logged-in users Test", async () => {
    const res = await request(app).post("/diary").send(diaryMock);
    expect(res.body.error.message).toBe("로그인 후 사용해야 합니다.");
  });
});

describe("Diary Read Test", () => {
  test("should have a DiaryService.read function", async () => {
    expect(typeof DiaryService.read).toBe("function");
  });
  test("DiaryService.read() Check the response structure", async () => {
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
    const res = await request(app)
      .get(`/diary/${diaryResultMock.id}`)
      .set("Cookie", cookie);
    expect(res.statusCode).toBe(200);
  });
  test("should have a DiaryService.readList function", async () => {
    expect(typeof DiaryService.readList).toBe("function");
  });
  // test("DiarySerivce.readList Check the response structure", async () => {
  //   const result = await DiaryService.readList(diaryMock.userId);
  //   expect(result).toEqual(
  //     expect.objectContaining([
  //       {
  //         id: expect.any(Number),
  //         title: expect.any(String),
  //         text: expect.any(String),
  //         tag: expect.any(String),
  //         date: expect.any(Date),
  //         view: expect.any(Number),
  //       },
  //     ])
  //   );
  // });
  test("should return 200 response code", async () => {
    const res = await request(app).get(`/diary/list`).set("Cookie", cookie);
    expect(res.statusCode).toBe(200);
  });

  test("should have a DiaryService.randomDiarys function", async () => {
    expect(typeof DiaryService.randomDiarys).toBe("function");
  });

  // test("DiarySerivce.randomDiarys Check the response structure", async () => {
  //   const result = await DiaryService.randomDiarys();
  //   expect(result).toEqual(
  //     expect.objectContaining([
  //       {
  //         id: expect.any(Number),
  //         title: expect.any(String),
  //         text: expect.any(String),
  //         tag: expect.any(String),
  //         date: expect.any(String),
  //         view: expect.any(Number),
  //       },
  //     ])
  //   );
  // });
  test("should return 200 response code", async () => {
    const res = await request(app)
      .get(`/diary/random/list`)
      .set("Cookie", cookie);
    expect(res.statusCode).toBe(200);
  });

  test("Read non-existent Diary ID Test", async () => {
    const res = await request(app).get(`/diary/-1`).set("Cookie", cookie);
    expect(res.body.error.message).toBe("Diary가 존재하지 않습니다.");
  });

  test("List Read non-logged-in users Test", async () => {
    const res = await request(app).get(`/diary/list`);
    expect(res.body.error.message).toBe("로그인 후 사용해야 합니다.");
  });

  test("Random List non-logged-in users Test", async () => {
    const res = await request(app).get(`/diary/random/list`);
    expect(res.body.error.message).toBe("로그인 후 사용해야 합니다.");
  });
});

describe("Diary Delete Test", () => {
  test("should have a DiaryServce.Delete function", async () => {
    expect(typeof DiaryService.delete).toBe("function");
  });
  test("should return 204 response code", async () => {
    const res = await request(app)
      .delete(`/diary/${diaryResultMock.id}`)
      .set("Cookie", cookie);
    expect(res.statusCode).toBe(204);
  });

  test("Delete non-existent diary ID Test", async () => {
    const res = await request(app).delete(`/diary/-1`).set("Cookie", cookie);
    expect(res.body.error.message).toBe("Diary가 존재하지 않습니다.");
  });
  test("Delete non-logged-in users Test", async () => {
    const res = await request(app).get(`/diary/${diaryResultMock.id}`);
    expect(res.body.error.message).toBe("로그인 후 사용해야 합니다.");
  });
});

describe("Get PreSignURL Test", () => {
  test("shuold have a createUrl function", () => {
    expect(typeof createUrl).toBe("function");
  });
  test("should return 200 response code", async () => {
    const res = await request(app).get("/upload/test").set("Cookie", cookie);
    expect(res.statusCode).toBe(200);
  });
  test("Get PreSignURL non-logged-in users Test", async () => {
    const res = await request(app).get(`/diary/${diaryResultMock.id}`);
    expect(res.body.error.message).toBe("로그인 후 사용해야 합니다.");
  });
});

describe("Diary Search Test", () => {
  test("should have a searchTitle function", async () => {
    expect(typeof DiaryService.searchTitle).toBe("function");
  });
  test("should return 200 response code", async () => {
    const res = await request(app)
      .get(`/diary/search`)
      .query({
        title: "일기",
      })
      .set("Cookie", cookie);
    expect(res.statusCode).toBe(200);
  });
  test("Diary searchTitle non-logged-in users Test", async () => {
    const res = await request(app).get(`/diary/search`).query({
      title: "일기",
    });
    expect(res.body.error.message).toBe("로그인 후 사용해야 합니다.");
  });
  test("Diary searchTitle query length must be greater than 1", async () => {
    const res = await request(app)
      .get(`/diary/search`)
      .query({
        title: "",
      })
      .set("Cookie", cookie);
    expect(res.body.error.message).toBe("검색어를 한 글자 이상 입력해주세요!");
  });

  test("should have a searchText function", async () => {
    expect(typeof DiaryService.searchText).toBe("function");
  });
  test("should return 200 response code", async () => {
    const res = await request(app)
      .get(`/diary/search`)
      .query({
        text: "내용",
      })
      .set("Cookie", cookie);
    expect(res.statusCode).toBe(200);
  });

  test("Diary search don't have a Query", async () => {
    const res = await request(app).get("/diary/search").set("Cookie", cookie);
    expect(res.body.error.message).toBe("올바른 쿼리 값을 입력해주세요.");
  });
});
