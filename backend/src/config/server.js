const express = require('express')
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


const PORT = 8080
app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`))

module.exports = app
