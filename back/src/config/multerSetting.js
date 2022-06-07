import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
import path from "path";
const __dirname = path.resolve();
AWS.config.loadFromPath(__dirname + "/src/config/s3.json"); // 인증

const s3 = new AWS.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "ai-project-last",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      const filename = file.originalname; // 이미지 이름 가져오기
      const ext = file.mimetype.split("/")[1]; //확장자 이름 가져오기
      if (!["png", "jpg", "jpeg", "gif", "bmp"].includes(ext)) {
        return cb(new Error("이미지 파일만 올릴 수 있습니다."));
      }
      cb(null, `diary/${Date.now()}${filename}`);
    },
    acl: "public-read-write",
    location: "/uploads",
  }),
});

export { upload };
