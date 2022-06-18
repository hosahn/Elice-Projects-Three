// Create service client module using ES6 syntax.
import { S3Client } from "@aws-sdk/client-s3";
import "../config/env.js";
// Set the AWS Region.
// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: process.env.AWS_REGION });
export default s3Client;
