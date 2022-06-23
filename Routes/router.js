const express = require('express')
const router = express.Router()
const Controller = require('../Controllers/controller')
const novelRouter = require('./novelRoutes')

router.get('/', Controller.landingPage)
router.use('/novels', novelRouter)

module.exports = router