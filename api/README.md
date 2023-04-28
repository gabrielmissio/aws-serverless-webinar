# User API

This directory contains the code and resources for the User API.

## Configuration

This project uses dotenv to manage environment variables. The following environment variables are required to be set:

MEDIA_BUCKET_NAME: The name of S3 media bucket.
USER_TABLE_NAME: The name of DynamoDB users table.
USER_TABLE_ARN: The ARN of DynamoDB users table.

To set these environment variables, create a .env file in the root directory of the project with the following format:

```makefile
MEDIA_BUCKET_NAME=your_s3_media_bucket_name
USER_TABLE_NAME=your_dynamodb_user_table_name
USER_TABLE_ARN=your_dynamodb_user_table_arn
```

The Serverless Framework will automatically include these environment variables when deploying the function or  running the function locally

## Local Development

To run the API locally, navigate to the `api` directory and run:

```bash
sls offline start --stage dev
```

or use the above command from "dev" package.json script

```bash
npm run dev
```

## Deployment

To deploy the API, run the following command from the `api` directory:

```bash
sls deploy --verbose --stage dev
```

or use the above command from "deploy" package.json script

```bash
npm run deploy
```
