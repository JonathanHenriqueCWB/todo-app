const mongoose = require('mongoose')
const {userSchema} = require('./User')

const taskSchema = new mongoose.Schema({
    description: { type: String, require: true },
    done: { type: Boolean, require: true, default: false },
    user: {type: userSchema}
}, {timestamps: true})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task