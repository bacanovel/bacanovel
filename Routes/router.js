const express = require('express')
const router = express.Router()
const Controller = require('../Controllers/controller')
const userController = require('../Controllers/userController')
const novelRouter = require('./novelRoutes')

router.get('/', Controller.home)
router.use('/novels', novelRouter)
router.get('/login', userController.loginForm)
router.get('/register', userController.registerForm)
router.post('/register', userController.postRegister)
router.get('/profile', Controller.profile)

module.exports = router