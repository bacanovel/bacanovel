const express = require('express')
const router = express.Router()
const Controller = require('../Controllers/controller')
const novelRouter = require('./novelRoutes')

router.get('/', Controller.home)
router.use('/novels', novelRouter)
// app.get('/login', userController.loginForm)
// app.get('/register', userController.registerForm)
// app.post('/register', userController.postRegister)

module.exports = router