# CloudFormation stacks

## DynamoDB Tables

### Create

```bash
aws --region us-east-1 cloudformation create-stack --stack-name webinar-cloud-dynamodb-tables-dev --template-body file://dynamodb-tables.yml --parameters ParameterKey=StageName,ParameterValue=dev
```

### Update

```bash
aws --region us-east-1 cloudformation update-stack --stack-name webinar-cloud-dynamodb-tables-dev --template-body file://dynamodb-tables.yml --parameters ParameterKey=StageName,ParameterValue=dev
```