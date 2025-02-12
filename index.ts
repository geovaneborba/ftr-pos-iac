import * as aws from "@pulumi/aws";

const ecr = new aws.ecr.Repository("test-pos-rocketseat", {
  name: "test-pos-rocketseat",
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true",
  },
});

const firstBucket = new aws.s3.Bucket("first-bucket-ftr", {
  bucket: "first-bucket-ftr",
  acl: "private",
  tags: {
    IAC: "true",
  },
});

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;

export const bucketName = firstBucket.id;
export const bucketArn = firstBucket.arn;
