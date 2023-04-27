# CloudFormation stacks

## S3 Buckets

### Create

```bash
aws --region us-east-1 cloudformation create-stack --stack-name webinar-cloud-s3-buckets-dev --template-body file://buckets.yml
```

### Update

```bash
aws --region us-east-1 cloudformation update-stack --stack-name webinar-cloud-s3-buckets-dev --template-body file://buckets.yml
```

## DynamoDB Tables

### Create

```bash
aws --region us-east-1 cloudformation create-stack --stack-name webinar-cloud-dynamodb-tables-dev --template-body file://dynamodb-tables.yml --parameters ParameterKey=StageName,ParameterValue=dev
```

### Update

```bash
aws --region us-east-1 cloudformation update-stack --stack-name webinar-cloud-dynamodb-tables-dev --template-body file://dynamodb-tables.yml --parameters ParameterKey=StageName,ParameterValue=dev
```