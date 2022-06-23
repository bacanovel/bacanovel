const express = require('express')
const app = express()
const port = 3050
const router = require('./Routes/router')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/' , router)

app.listen(port , ()=>{
    console.log(`continuing to port ${port}`)
})
