const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Express server')
})

app.listen(port, () => {
    console.log('Server is running on port '+ port)
})