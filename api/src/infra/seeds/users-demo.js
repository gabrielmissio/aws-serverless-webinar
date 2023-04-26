const DynamoDB = require('aws-sdk/clients/dynamodb')
const items = require('./items.json')

const dynamodb = new DynamoDB.DocumentClient({
  region: 'local',
  endpoint: 'http://localhost:8000'
})

const putItems = () => {
  items.forEach(async (item) => {
    await dynamodb.put({
      TableName: process.env.TABLE_NAME || 'webinar-cloud-users-dev',
      Item: item
    }).promise()

    console.log(`created item ${JSON.stringify(item)}`)
  })
}

const deleteItems = () => {
  items.forEach(async (item) => {
    await dynamodb.delete({
      TableName: process.env.TABLE_NAME || 'webinar-cloud-users-dev',
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
