import { Router } from "express";
import DiaryService from "../services/diaryService.js";
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
 *                 user_id:
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
diaryRouter.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const body = await DiaryService.create(data);
    return res.status(201).json(body);
  } catch (error) {
    throw new Error(`일기 생성 에러\n Error : ${error.message}`);
  }
});

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
diaryRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = await DiaryService.delete(id);
    return res.status(204).end();
  } catch (error) {
    throw new Error(`일기 삭제 에러\n Error : ${error.message}`);
  }
});

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
diaryRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = await DiaryService.read(id);
    return res.status(200).send(body);
  } catch (error) {
    throw new Error(`일기 조회 에러\n Error: ${error.message}`);
  }
});

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
diaryRouter.get("/list/:user_id", async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const body = await DiaryService.readList(user_id);
    return res.status(200).send(body);
  } catch (error) {
    throw new Error(`일기 조회 에러\n Error : ${error.message}`);
  }
});

// diaryRouter.post("/images", upload.array("image"), async (req, res, next) => {
//   const images = [];
//   req.files.forEach((file) => images.push(file.location));
//   const body = await ImagesService.transData(images, id);
//   res.status(201).json(images);
// });

export default diaryRouter;
