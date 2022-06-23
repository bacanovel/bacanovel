const express = require('express')
const router = express.Router()
const novelController = require('../Controllers/novelController')

router.get('/', novelController.novelList)
module.exports = router
