const mediaRepository = require('../../infra/repositories/media-repository')
const userRepository = require('../../infra/repositories/user-repository')
const ConflictError = require('../../utils/errors/conflict-error')
const NotFoundError = require('../../utils/errors/not-found-error')

exports.createUser = async (userData) => {
  const userExists = await userRepository.getByEmail(userData.email)

  if (userExists) {
    throw new ConflictError(`User with email '${userData.email}' already exists`)
  }

  const newUser = await userRepository.create(userData)

  return newUser
}

exports.getUser = async (idOrEmail) => {
  let user = await userRepository.getById(idOrEmail)

  if (!user) {
    user = await userRepository.getByEmail(idOrEmail)
  }

  if (!user) {
    throw new NotFoundError(`User with idOrEmail '${idOrEmail}' not found`)
  }

  return user
}

exports.updateUser = async (idOrEmail, userData) => {
  const user = await exports.getUser(idOrEmail) // throws NotFoundError if user not found

  const updatedUser = await userRepository.update(user.id, userData)

  return updatedUser
}

exports.deleteUser = async (idOrEmail) => {
  const user = await exports.getUser(idOrEmail) // throws NotFoundError if user not found

  await userRepository.delete(user.id)
}

exports.getAllUsers = async (pageSize = 10, next) => {
  const users = await userRepository.getAll(pageSize, next)

  return users
}

exports.updateUserImage = async (idOrEmail) => {
  const user = await exports.getUser(idOrEmail) // throws NotFoundError if user not found

  const key = `imgs/${user.id}`
  const metadata = { userId: user.id }

  const preSignedUrl = await mediaRepository.generatePresignedUrl(key, metadata)

  return preSignedUrl
}
