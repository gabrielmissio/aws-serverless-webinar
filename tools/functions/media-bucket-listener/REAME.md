# Media Bucket Listener 

This lambda listens to the media bucket and updates the user DynamoDB record when a new image is uploaded.

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

To invoke the lambda function locally, navigate to the `tools/functions/media-bucket-listener` directory and run:

```bash
sls invoke local --function main --path events/create-object-demo.json --env
```

or use the above command from "dev" package.json script

```bash
npm run dev
```

## Deployment

To deploy the lambda function, run the following command from the `tools/functions/media-bucket-listener` directory:

```bash
sls deploy --verbose --stage dev
```

or use the above command from "deploy" package.json script

```bash
npm run deploy
```
