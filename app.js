const express = require('express')
const cors = require('cors')

const data = require('./data.json')

const app = express()

app.use(cors())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)

    next();
});


app.all('/', (req, res) => {
    res.send(data)
})


app.listen(3001, () => {
    console.log(` listening on http://localhost:3001`)
})
