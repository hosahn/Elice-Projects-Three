import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./upload/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
});

export { upload };
