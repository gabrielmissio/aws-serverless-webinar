/*
* This migration file is used to create the dynamodb table in the local development environment using dynamodb Local.
* In other environments, AWS CloudFormation should be used to manage the dynamodb resources.
*/

require('dotenv').config()
const DynamoDB = require('aws-sdk/clients/dynamodb')

const dynamodb = new DynamoDB({
  region: process.env.REGION,
  endpoint: process.env.DYNAMODBLOCAL_ENDPOINT
})

const params = {
  TableName: process.env.USER_TABLE_NAME,
  AttributeDefinitions: [
    {
      AttributeName: 'id',
      AttributeType: 'S'
    },
    {
      AttributeName: 'email',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'id',
      KeyType: 'HASH'
    }
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'email-index',
      KeySchema: [
        {
          AttributeName: 'email',
          KeyType: 'HASH'
        }
      ],
      Projection: {
        ProjectionType: 'ALL'
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
      }
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  }
}

const createTable = async () => {
  const response = await dynamodb.createTable(params).promise()
  console.log(JSON.stringify(response))
}

const deleteTable = async () => {
  const response = await dynamodb.deleteTable({ TableName: params.TableName }).promise()
  console.log(JSON.stringify(response))
}

const handler = (operation) => {
  if (operation === 'start') return createTable()
  if (operation === 'undo') return deleteTable()

  return console.log(`Invalid parameter: ${operation}`)
}

handler(process.env.OPERATION)
