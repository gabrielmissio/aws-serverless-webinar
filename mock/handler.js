exports.handler = async (event) => ({
  headers: {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': '*',
    'access-control-allow-headers': '*'
  },
  statusCode: 200,
  body: JSON.stringify({ message: 'Hello there!' })
})
