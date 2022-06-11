import AWS from "aws-sdk";
import path from "path";

const __dirname = path.resolve();
AWS.config.loadFromPath(__dirname + "/src/config/s3.json"); // 인증

const s3 = new AWS.S3();

export default s3;
