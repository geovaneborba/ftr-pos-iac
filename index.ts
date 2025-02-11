import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const ecr = new aws.ecr.Repository("test-pos-rocketseat", {
  name: "test-pos-rocketseat",
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true",
  },
});

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
