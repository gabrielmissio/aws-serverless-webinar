const ConflictError = require('../../utils/errors/conflict-error')
const NotFoundError = require('../../utils/errors/not-found-error')
const IntegrationError = require('../../utils/errors/integration-error')

exports.errorHandler = (err, res) => {
  if (err instanceof NotFoundError) {
    return res.status(404).json({ error: err.message })
  }

  if (err instanceof ConflictError) {
    return res.status(409).json({ error: err.message })
  }

  if (err instanceof IntegrationError) {
    return res.status(500).json({ error: err.message })
  }

  return res.status(500).json({ error: 'Internal server error' })
}
