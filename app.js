const express = require('express')
const userController = require('./controllers/userController')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', userController.home)
app.get('/login', userController.loginForm)
app.get('/register', userController.registerForm)
app.post('/register', userController.postRegister)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})