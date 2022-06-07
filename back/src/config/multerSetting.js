import multer from "multer";
import * as multerS3 from "multer-s3";
import s3 from "./s3";
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./upload/");
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + "-" + file.originalname);
//     },
//   }),
//   limits: { fileSize: 10 * 1024 * 1024 },
// });

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "ai-project-last",
    key: function (req, file, cb) {
      const filename = file.originalname; // 이미지 이름 가져오기
      const ext = file.mimetype.split("/")[1]; //확장자 이름 가져오기
      if (!["png", "jpg", "jpeg", "gif", "bmp"].includes(ext)) {
        return cb(new Error("이미지 파일만 올릴 수 있습니다."));
      }
      cb(null, filename + `.${ext}`);
    },
  }),
  acl: "public-read-write",
});

export { upload };
