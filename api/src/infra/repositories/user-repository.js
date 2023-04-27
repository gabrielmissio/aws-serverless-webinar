const DynamoDB = require('aws-sdk/clients/dynamodb')
const { randomUUID } = require('crypto')
const { makeDynamicUpdateParams } = require('../helpers/dynamodb-helper')
const IntegrationError = require('../../utils/errors/integration-error')

const REGION = process.env.REGION
const ENDPOINT = REGION === 'local' ? process.env.DYNAMODBLOCAL_ENDPOINT : undefined
const dynamodb = new DynamoDB.DocumentClient({ region: REGION, endpoint: ENDPOINT })

exports.getByEmail = async (email) => {
  try {
    const params = {
      TableName: process.env.USER_TABLE_NAME,
      IndexName: 'email-index',
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email
      }
    }

    const result = await dynamodb.query(params).promise()

    if (result.Items.length === 0) return null

    return result.Items[0]
  } catch (err) {
    console.error(err)
    throw new IntegrationError('Error fetching user by email')
  }
}

exports.getById = async (id) => {
  try {
    const params = {
      TableName: process.env.USER_TABLE_NAME,
      Key: {
        id
      }
    }

    const result = await dynamodb.get(params).promise()

    if (!result.Item) return null

    return result.Item
  } catch (err) {
    console.error(err)
    throw new IntegrationError('Error fetching user by id')
  }
}

exports.create = async (userData) => {
  try {
    const newUser = {
      id: randomUUID(),
      ...userData
    }

    const params = {
      TableName: process.env.USER_TABLE_NAME,
      Item: newUser,
      ConditionExpression: 'attribute_not_exists(id) AND attribute_not_exists(email)'
    }

    await dynamodb.put(params).promise()
    return newUser
  } catch (err) {
    console.error(err)
    throw new IntegrationError('Error creating user')
  }
}

exports.update = async (id, userData) => {
  try {
    const params = {
      TableName: process.env.USER_TABLE_NAME,
      Key: { id },
      ReturnValues: 'ALL_NEW',
      ...makeDynamicUpdateParams(userData)
    }

    const result = await dynamodb.update(params).promise()

    if (!result.Attributes) return null

    return result.Attributes
  } catch (err) {
    console.error(err)
    throw new IntegrationError('Error updating user')
  }
}

exports.delete = async (id) => {
  try {
    const params = {
      TableName: process.env.USER_TABLE_NAME,
      Key: {
        id
      }
    }

    await dynamodb.delete(params).promise()
  } catch (err) {
    console.error(err)
    throw new IntegrationError('Error deleting user')
  }
}
