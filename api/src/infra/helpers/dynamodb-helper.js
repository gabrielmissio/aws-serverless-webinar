exports.makeDynamicUpdateParams = (payload) => {
  const hasAtLeastOneKey = Object.keys(payload).length > 0
  if (!hasAtLeastOneKey) throw new Error('invalid payload')

  const expressionAttributeValues = {}
  const expressionAttributeNames = {}
  const updateExpression = []

  Object.keys(payload).forEach((key) => {
    if (payload[key] === undefined) return
    expressionAttributeValues[`:${key}`] = payload[key]
    expressionAttributeNames[`#${key}`] = key
    updateExpression.push(`#${key} = :${key}`)
  })

  return {
    ExpressionAttributeValues: expressionAttributeValues,
    ExpressionAttributeNames: expressionAttributeNames,
    UpdateExpression: `SET ${updateExpression.join(', ')}`
  }
}
