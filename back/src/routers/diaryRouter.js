import { Router } from "express";
import DiaryService from "../services/diaryService.js";
import { validate } from "../middlewares/validator.js";
import { check, param, body } from "express-validator";
const diaryRouter = Router();

/**
 *  @swagger
 *  tags:
 *    name: Diary
 *    description: 일기장 관련 API
 */

/**
 * @swagger
 * /diary:
 *   post:
 *     tags: [Diary]
 *     description: 일기 작성 API
 *     produces:
 *     - "application/json"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               user_id:
 *                 type: number
 *                 example: 1
 *                 description: "현재 로그인한 유저의 ID값"
 *               text:
 *                 type: string
 *                 example: "일기 내용 입니다."
 *                 description: "작성한 일기 내용"
 *               title:
 *                 type: string
 *                 example: "제목"
 *                 description: "작성한 일기 제목"
 *               tag:
 *                 type: string
 *                 example: "공부"
 *                 description: "일기 주제 태그"
 *     responses:
 *       '201':
 *         description: "Diary 생성 완료"
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 4
 *                 userId:
 *                   type: number
 *                   example: 1
 *                 text:
 *                   type: string
 *                   example: "일기 내용 입니다."
 *                 title:
 *                   type: string
 *                   example: "제목"
 *                 tag:
 *                   type: string
 *                   example: "공부"
 *                 date:
 *                   type: Date
 *                   example: "2022-06-07T07:21:56.000Z"
 *                 view:
 *                   type: number
 *                   example: 1
 */
diaryRouter.post(
  "/",
  [
    body("userId")
      .exists({ checkFalsy: true })
      .withMessage("현재 접속해 있는 유저의 ID 값이 들어가 있지 않습니다.")
      .bail(),
    body("title")
      .exists()
      .isLength({ min: 1 })
      .withMessage("제목은 필수로 입력해야 합니다.")
      .bail(),
    body("text")
      .exists()
      .isLength({ min: 1 })
      .withMessage("일기 내용은 필수로 적어주셔야 합니다.")
      .bail(),
    validate,
  ],
  async (req, res, next) => {
    const data = req.body;
    const { userId } = data;
    try {
      if (await DiaryService.challengeCheck(userId)) {
        await DiaryService.check(userId);
      }
    } catch (error) {
      next(error);
    }
    try {
      const body = await DiaryService.create(data);
      return res.status(201).json(body);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @swagger
 * /diary/{id}:
 *   delete:
 *     tags: [Diary]
 *     description: 다이어리 삭제
 *     produces:
 *     - application/json
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       example: 2
 *     responses:
 *       '204':
 *         description: "삭제 성공"
 */
diaryRouter.delete(
  "/:id",
  [
    param("id")
      .trim()
      .exists({ checkFalsy: true })
      .withMessage("Diary ID 값을 path로 넣어주세요.")
      .bail()
      .toInt()
      .isInt()
      .withMessage("Diary ID 값은 Type이 Number 이여야 합니다.")
      .bail()
      .custom(async (value) => {
        const diary = await DiaryService.find(value);
        if (!diary) {
          throw new Error("Diary가 존재하지 않습니다.");
        }
      }),
    validate,
  ],
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const body = await DiaryService.delete(id);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @swagger
 * /diary/{id}:
 *   get:
 *     tags: [Diary]
 *     description: 다이어리 개별 조회
 *     produces:
 *     - application/json
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       example: 2
 *     responses:
 *       '200':
 *         description: "다이어리 개별 조회 성공"
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 37
 *                 user_id:
 *                   type: number
 *                   example: 10
 *                 text:
 *                   type: string
 *                   example: "일기 내용 입니다."
 *                 title:
 *                   type: string
 *                   example: "제목"
 *                 tag:
 *                   type: string
 *                   example: "공부"
 *                 date:
 *                   type: Date
 *                   example: "2022-06-07T07:21:56.000Z"
 *                 view:
 *                   type: number
 *                   example: 1
 *                 images:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       image:
 *                         type: string
 *                         example:  "https://ai-project-last.s3.ap-northeast-2.amazonaws.com/diary/1654656839850docker.png"
 */
diaryRouter.get(
  "/:id",
  [
    param("id")
      .trim()
      .exists({ checkFalsy: true })
      .withMessage("Diary ID 값을 path로 넣어주세요.")
      .bail()
      .toInt()
      .isInt()
      .withMessage("Diary ID 값은 Type이 Number 이여야 합니다.")
      .bail()
      .custom(async (value) => {
        const diary = await DiaryService.find(value);
        if (!diary) {
          throw new Error("Diary가 존재하지 않습니다.");
        }
      }),
    validate,
  ],
  async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    try {
      const body = await DiaryService.read(id);
      return res.status(200).send(body);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @swagger
 * /diary/list/{user_id}:
 *   get:
 *     tags: [Diary]
 *     description: 유저가 작성한 일기 조회
 *     produces:
 *     - application/json
 *     parameters:
 *     - in: path
 *       name: user_id
 *       required: true
 *       example: 1
 *     responses:
 *       '200':
 *         description: "유저가 작성한 일기 조회 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 37
 *                   user_id:
 *                     type: number
 *                     example: 10
 *                   text:
 *                     type: string
 *                     example: "일기 내용 입니다."
 *                   title:
 *                     type: string
 *                     example: "제목"
 *                   tag:
 *                     type: string
 *                     example: "공부"
 *                   date:
 *                     type: Date
 *                     example: "2022-06-07T07:21:56.000Z"
 *                   view:
 *                     type: number
 *                     example: 1
 *
 */
diaryRouter.get(
  "/list/:userId",
  [
    param("userId")
      .trim()
      .exists({ checkFalsy: true })
      .withMessage("Diary ID 값을 path로 넣어주세요.")
      .bail()
      .toInt()
      .isInt()
      .withMessage("Diary ID 값은 Type이 Number 이여야 합니다.")
      .bail()
      .custom(async (value) => {
        const user = await DiaryService.userCheck(value);
        if (!user) {
          throw new Error("유저가 존재하지 않습니다.");
        }
      }),
    validate,
  ],
  async (req, res, next) => {
    const { userId } = req.params;
    try {
      const body = await DiaryService.readList(userId);
      return res.status(200).send(body);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @swagger
 * /diary/random/list:
 *   get:
 *     tags: [Diary]
 *     description: 유저가 작성한 일기 조회
 *     produces:
 *     - application/json
 *     responses:
 *       '200':
 *         summary: "랜덤한 일기 3개를 반환 합니다."
 *         description: |
 *           반환 형식
 *           ```js
 *           [
 *            {
 *            "id": 1,
 *            "text": "일기 내용",
 *            "title": "일기 제목",
 *            "tag": "공부",
 *            "date": "2022-06-09T10:45:55+00:00",
 *            "view": 4,
 *            }
 *           ]
 *           ```
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 37
 *                   text:
 *                     type: string
 *                     example: "일기 내용 입니다."
 *                   title:
 *                     type: string
 *                     example: "제목"
 *                   tag:
 *                     type: string
 *                     example: "공부"
 *                   date:
 *                     type: Date
 *                     example: "2022-06-07T07:21:56.000Z"
 *                   view:
 *                     type: number
 *                     example: 1
 */
diaryRouter.get("/random/list", async (req, res, next) => {
  try {
    const diarys = await DiaryService.randomDiarys();
    return res.status(200).send(diarys);
  } catch (error) {
    next(error);
  }
});

// diaryRouter.post("/images", upload.array("image"), async (req, res, next) => {
//   const images = [];
//   req.files.forEach((file) => images.push(file.location));
//   const body = await ImagesService.transData(images, id);
//   res.status(201).json(images);
// });

export default diaryRouter;
