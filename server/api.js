const path = require('path')
const express = require('express')
const app = express()

app.use('/public', express.static('../public'))

app.get('/', (req, res, next)=>{
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    } catch (error) {
        next(error)
    }
})

module.exports = app