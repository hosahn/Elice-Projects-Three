import upload from "../middlewares/multer.js";
import { Router } from "express";
import s3 from "../config/s3.js";
import createUrl from "../test/preSign.js";
const uploadRouter = Router();

/**
 *  @swagger
 *  tags:
 *    name: Upload
 *    description: 이미지 관련 API
 */

// /**
//  * @swagger
//  * /upload:
//  *   post:
//  *     tags: [Upload]
//  *     description: 일기 작성 API
//  *     requestBody:
//  *       content:
//  *         multipart/form-data:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               image:
//  *                 type: string
//  *                 format: binary
//  *     responses:
//  *       "201":
//  *         content:
//  *           aplication/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 suceess:
//  *                   type: boolean
//  *                   description: 응답 여부
//  *                   example: true
//  *                 location:
//  *                   type: string
//  *                   description: 이미지 주소
//  *                   example: "https://ai-project-last.s3.ap-northeast-2.amazonaws.com/diary/1654738493690TypeScript_inflearn.png"
//  */
// uploadRouter.post("/", upload.single("image"), async (req, res, next) => {
//   try {
//     const body = {
//       success: true,
//       location: req.file.location,
//     };
//     res.status(201).json(body);
//   } catch (error) {
//     throw new Error(`이미지 업로드 에러 \n Error : ${error.message}`);
//   }
// });

/**
 * @swagger
 * /upload/{file}:
 *   get:
 *     tags: [Upload]
 *     description: 일기 작성 API
 *     parameters:
 *     - in: path
 *       name: file
 *       required: true
 *       example: "file"
 *     responses:
 *       "201":
 *         content:
 *           aplication/json:
 *             schema:
 *               type: object
 *               properties:
 *                 suceess:
 *                   type: boolean
 *                   description: 응답 여부
 *                   example: true
 *                 location:
 *                   type: string
 *                   description: 이미지 주소
 *                   example: "https://ai-project-last.s3.ap-northeast-2.amazonaws.com/diary/1654738493690TypeScript_inflearn.png"
 */
uploadRouter.get("/:file", (req, res, next) => {
  try {
    const { file } = req.params;
    const fileName = Date.now() + file;
    const url = createUrl(`diary/${fileName}`);
    const body = {
      success: true,
      url: url,
      imageUrl: `https://ai-project-last.s3.ap-northeast-2.amazonaws.com/diary/${fileName}`,
    };
    res.status(201).json(body);
  } catch (error) {
    throw new Error(`이미지 업로드 에러 \n Error : ${error.message}`);
  }
});

uploadRouter.delete("/:file", async (req, res, next) => {
  try {
    const { file } = req.params;
    s3.deleteObject(
      {
        Bucket: "ai-project-last", // 삭제하고 싶은 이미지가 있는 버킷 이름
        Key: `diary/${file}`, // 삭제하고 싶은 이미지의 key
      },
      (err, data) => {
        if (err) console.log(err); // 실패 시 에러 메시지
        else console.log(data); // 성공 시 데이터 출력
      }
    );
    res.send("완료");
  } catch (error) {
    throw new Error(`S3 이미지 삭제 실패\nError: ${error.message}`);
  }
});

// imagesRouter.post("/", upload.array("images"), async (req, res, next) => {
//   try {
//     const images = [];
//     if (req.files.length !== 0) {
//       req.files.forEach((file) => images.push(file.location));
//     }
//     const body = await ImagesService.create(diary_id, images);
//     return res.status(201).json(body);
//   } catch (error) {
//     throw new Error(`이미지 업로드 에러\n Error : ${error.message}`);
//   }
// });

export default uploadRouter;
