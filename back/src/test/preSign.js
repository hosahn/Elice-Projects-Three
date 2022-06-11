import {
  CreateBucketCommand,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  DeleteBucketCommand,
  ListObjectsCommand,
} from "@aws-sdk/client-s3";
import s3Client from "./S3Client.js"; // Helper function that creates an Amazon S3 service client module.
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import fetch from "node-fetch";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  signatureVersion: "v4",
});

const s3 = new AWS.S3();
const myBucket = process.env.BUCKET_NAME;
const myKey = `diary/${Date.now()}`;
const signedUrlExpireSeconds = 60 * 5;

export default function createUrl(fileName) {
  const url = s3.getSignedUrl("putObject", {
    Bucket: myBucket,
    Key: fileName,
    Expires: signedUrlExpireSeconds,
    ContentType: "image/*",
  });
  return url;
}

// // export const bucketParams = {
// //   Bucket: `test-bucket-${Math.ceil(Math.random() * 10 ** 10)}`,
// //   Key: `test-object-${Math.ceil(Math.random() * 10 ** 10)}`,
// //   Body: "BODY",
// // };

// // console.log(`Creating bucket ${bucketParams.Bucket}`);
// // const data = await s3Client.send(
// //   new CreateBucketCommand({ Bucket: bucketParams.Bucket })
// // );
// // console.log(`Waiting for "${bucketParams.Bucket}" bucket creation...\n`);
// // console.log(bucketParams.Key);
// // console.log(data);

// // console.log(`Putting object "test-object-3492276656" in bucket`);
// // const data = await s3Client.send(
// //   new PutObjectCommand({
// //     Bucket: "test-bucket-543491873",
// //     Key: "test-object-3492276656",
// //     Body: "BODY",
// //   })
// // );

// const bucketParams = {
//   Bucket: "ai-project-last",
//   Key: "diary/",
//   Body: "image",
//   ContentType: "multipart/form-data",
// };

// const command = new PutObjectCommand(bucketParams);
// const signedUrl = await getSignedUrl(s3Client, command, {
//   expiresIn: 3600,
// });
// console.log(command);
// console.log(signedUrl);
// // const signedUrl =
// //   "https://test-bucket-543491873.s3.ap-northeast-2.amazonaws.com/test-object-3492276656?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIATXNYY6I3RZICOSNB%2F20220608%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20220608T144324Z&X-Amz-Expires=3600&X-Amz-Signature=14df9199cd1e7f6f50ce4a460dfb52c6197bad5e08ed09c2876db02eee81e966&X-Amz-SignedHeaders=host&x-id=GetObject";
// // const response = await fetch(signedUrl);
// // console.log(`\nResponse returned by signed URL: ${await response.text()}\n`);

// // const bucketParams = { Bucket: "ai-project-last" };

// // const data = await s3Client.send(new ListObjectsCommand(bucketParams));
// // console.log("Success", data);
