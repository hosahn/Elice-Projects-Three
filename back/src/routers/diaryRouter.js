import { upload } from "../config/multerSetting.js";
import { Router } from "express";
import ImagesService from "../services/imagesService.js";
import DiaryService from "../services/diaryService.js";
const diaryRouter = Router("diary");

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
 *
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
diaryRouter.post("/", upload.array("image"), async (req, res, next) => {
  try {
    const images = [];
    const data = JSON.parse(req.body.data);
    req.files.forEach((file) => images.push(file.location));
    const body = await DiaryService.create(data, images);
    return res.status(201).json(body);
  } catch (error) {
    throw new Error(`일기 생성 에러\n Error : ${error.message}`);
  }
});

diaryRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = await DiaryService.delete(id);
    return res.status(204).end();
  } catch (error) {
    throw new Error(`일기 삭제 에러\n Error : ${error.message}`);
  }
});

// diaryRouter.post("/images", upload.array("image"), async (req, res, next) => {
//   const images = [];
//   req.files.forEach((file) => images.push(file.location));
//   const body = await ImagesService.transData(images, id);
//   res.status(201).json(images);
// });

export { diaryRouter };
