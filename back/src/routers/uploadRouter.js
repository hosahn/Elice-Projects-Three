import upload from "../middlewares/multer.js";
import { Router } from "express";
import s3 from "../config/s3.js";
import createUrl from "../test/preSign.js";
const uploadRouter = Router();

/**
 *  @swagger
 *  tags:
 *    name: upload
 *    description: 이미지 관련 API
 */
uploadRouter.post("/", upload.single("image"), async (req, res, next) => {
  try {
    res.status(201).send(req.file.location);
  } catch (error) {
    throw new Error(`이미지 업로드 에러 \n Error : ${error.message}`);
  }
});

uploadRouter.delete("/", async (req, res, next) => {
  try {
    s3.deleteObject(
      {
        Bucket: "ai-project-last", // 삭제하고 싶은 이미지가 있는 버킷 이름
        Key: "diary/1654676700888TypeScript_inflearn.png", // 삭제하고 싶은 이미지의 key
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

uploadRouter.get("/:file", async (req, res) => {
  const { file } = req.params;
  const fileName = `diary/${Date.now()}${file}`;
  const url = createUrl(fileName);
  return res.status(200).send(url);
});

export default uploadRouter;
