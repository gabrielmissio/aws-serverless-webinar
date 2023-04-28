
module.exports = (schema) => {
  return (req, res, next) => {
    const { body, query, params } = req
    const { error } = schema.validate({ body, query, params })

    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    next()
  }
}
