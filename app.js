
const express = require('express')
const app = express()
const port = 3000
const userController = require('./controllers/userController')
const novelController = require('./Controllers/novelController')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', userController.home)
app.get('/login', userController.loginForm)
app.get('/register', userController.registerForm)
app.post('/register', userController.postRegister)

app.get('/novels', novelController.readList)
app.get('/novels/add', novelController.addForm)
app.post('/novels/add', novelController.addNovel)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

