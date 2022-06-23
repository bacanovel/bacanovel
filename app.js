
const express = require('express')
const app = express()
const port = 3000

const router = require('./Routes/router')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use('/', router)


// app.get('/novels', novelController.readList)
// app.get('/novels/add', novelController.addForm)
// app.post('/novels/add', novelController.addNovel)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

