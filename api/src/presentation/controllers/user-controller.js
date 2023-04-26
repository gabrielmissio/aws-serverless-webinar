const userService = require('../../domain/services/user-service')
const { errorHandler } = require('../helpers/response-helper')

exports.createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body)
    return res.status(201).json(newUser)
  } catch (error) {
    console.error(error)
    return errorHandler(error, res)
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.idOrEmail)
    return res.status(200).json(user)
  } catch (err) {
    console.error(err)
    return errorHandler(err, res)
  }
}

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.params.idOrEmail, req.body)
    return res.status(200).json(updatedUser)
  } catch (err) {
    console.error(err)
    return errorHandler(err, res)
  }
}

exports.deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.idOrEmail)
    return res.sendStatus(204)
  } catch (err) {
    console.error(err)
    return errorHandler(err, res)
  }
}
