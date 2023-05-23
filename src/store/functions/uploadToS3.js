import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { postData } from "../data/postsContext";
import path from "path";
const bucket = "amr-blogging-app";
const AWS_S3_ACCESS_KEY = "AKIAQKIAI4Q7MS5B2AUH";
const AWS_S3_SECRET_KEY = "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";
const filePath = path.join(
  process.cwd(),
  "src",
  "store",
  "data",
  "postsContext"
);
const uploadToS3 = async (path, mimemtype, fileName) => {
  const client = new S3Client({
    region: "eu-central-1",
    credentials: {
      accessKeyId: AWS_S3_ACCESS_KEY,
      secretAccessKey: AWS_S3_SECRET_KEY,
    },
  });
  const data = await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Body: fileName,
      Key: fileName.name,

      ACL: "public-read",
    })
  );
  console.log(`https://${bucket}.s3.amazonaws.com/${fileName.name}`);
  console.log(fileName);
};

export default uploadToS3;
