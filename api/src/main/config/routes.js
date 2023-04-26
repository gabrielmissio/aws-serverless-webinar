const express = require('express')
const userController = require('../../presentation/controllers/user-controller')

const router = express.Router()

router.post('/users', userController.createUser)
router.get('/users/:idOrEmail', userController.getUser)
router.patch('/users/:idOrEmail', userController.updateUser)
router.delete('/users/:idOrEmail', userController.deleteUser)

module.exports = router
