const DynamoDB = require('aws-sdk/clients/dynamodb')
const S3 = require('aws-sdk/clients/s3')

const REGION = process.env.REGION
const ENDPOINT = REGION === 'local' ? process.env.DYNAMODBLOCAL_ENDPOINT : undefined
const dynamodb = new DynamoDB.DocumentClient({ region: REGION, endpoint: ENDPOINT })
const s3 = new S3({ region: REGION, signatureVersion: 'v4' })

exports.handler = async (event) => {
  console.log(JSON.stringify(event))

  const objectKey = event.Records[0].s3.object.key
  const imageUrl = `https://${event.Records[0].s3.bucket.name}.s3.amazonaws.com/${objectKey}`
  const userId = await getUserId(objectKey)

  const result = await updateUserImage(userId, imageUrl)
  console.log(result)

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'success' })
  }
}

async function getUserId (key) {
  const params = {
    Bucket: process.env.MEDIA_BUCKET_NAME,
    Key: key
  }

  const data = await s3.headObject(params).promise()
  const result = data.Metadata.userid

  return result
}

async function updateUserImage (userId, imageUrl) {
  const params = {
    TableName: process.env.USER_TABLE_NAME,
    Key: { id: userId },
    ReturnValues: 'ALL_NEW',
    UpdateExpression: 'SET #profileUrl = :profileUrl',
    ExpressionAttributeNames: { '#profileUrl': 'profileUrl' },
    ExpressionAttributeValues: { ':profileUrl': imageUrl }
  }

  const result = await dynamodb.update(params).promise()

  if (!result.Attributes) return null

  return result.Attributes
}
