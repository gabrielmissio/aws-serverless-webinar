require('dotenv').config()
const DynamoDB = require('aws-sdk/clients/dynamodb')
const items = require('./items.json')

const dynamodb = new DynamoDB.DocumentClient({
  region: process.env.REGION,
  endpoint: process.env.DYNAMODBLOCAL_ENDPOINT
})

const putItems = () => {
  items.forEach(async (item) => {
    await dynamodb.put({
      TableName: process.env.USER_TABLE_NAME,
      Item: item
    }).promise()

    console.log(`created item ${JSON.stringify(item)}`)
  })
}

const deleteItems = () => {
  items.forEach(async (item) => {
    await dynamodb.delete({
      TableName: process.env.USER_TABLE_NAME,
      Key: { id: item.id }
    }).promise()

    console.log(`deleted item ${JSON.stringify(item)}`)
  })
}

const handler = (operation) => {
  if (operation === 'start') return putItems()
  if (operation === 'undo') return deleteItems()

  return console.log(`Invalid parameter: ${operation}`)
}

handler(process.env.OPERATION)
