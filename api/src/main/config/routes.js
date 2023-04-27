const express = require('express')
const validator = require('../middlewares/validator')
const userController = require('../../presentation/controllers/user-controller')
const userSchemas = require('../../presentation/validators/user-schemas')

const router = express.Router()

router.post('/users', validator(userSchemas.createUser), userController.createUser)
router.get('/users', validator(userSchemas.getAllUsers), userController.getAllUsers)
router.get('/users/:idOrEmail', validator(userSchemas.getUser), userController.getUser)
router.patch('/users/:idOrEmail', validator(userSchemas.updateUser), userController.updateUser)
router.delete('/users/:idOrEmail', validator(userSchemas.deleteUser), userController.deleteUser)

module.exports = router
