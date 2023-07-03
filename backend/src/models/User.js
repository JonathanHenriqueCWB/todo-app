const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: {type: String},
    password: {type: String},
    token: {type: String, select: false}
}, {timestamps: true})

// Antes de salvar no banco bcryptjs gera um hash
userSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;
    next();
});

const User = mongoose.model('User', userSchema)
module.exports = { User, userSchema }