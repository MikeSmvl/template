terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.74.1"
    }
  }

  required_version = "~> 1.1.5"
}

provider "aws" {
  region = "ca-central-1"
}

resource "aws_ecr_repository" "template_repo" {
  name = "template-repo"
}