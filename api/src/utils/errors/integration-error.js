class IntegrationError extends Error {
  constructor (message) {
    super(message)
    this.name = 'IntegrationError'
  }
}

module.exports = IntegrationError
