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
 *                 url:
 *                   type: string
 *                   description: 이미지 주소
 *                   example: "https://ai-project-last.s3.ap-northeast-2.amazonaws.com/diary/1654738493690TypeScript_inflearn.png"
 *                 imageUrl:
 *                   type: string
 *                   description: 이미지가 저장된 S3 주소
 *                   example: "https://ai-project-last.s3.ap-northeast-2.amazonaws.com/diary/${fileName}"
 */
uploadRouter.get("/:file", (req, res, next) => {
  try {
    const { file } = req.params;
    const fileName = Date.now() + file;
    const url = createUrl(`diary/${fileName}`);
    const imageUrl = `https://ai-project-last.s3.ap-northeast-2.amazonaws.com/diary/${fileName}`;
    const body = {
      success: true,
      url,
      imageUrl,
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

export default uploadRouter;
