const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/todo').then(() => {
    console.log('Connected to database successfully')
}).catch(err => {
    console.log(`Error connecting to database ${err}`)
})

