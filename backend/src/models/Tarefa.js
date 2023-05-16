const Mongoose = require('mongoose')

const todoSchema = new Mongoose.Schema({
    description: { type: String, require: true },
    done: { type: Boolean, require: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

const Tarefa = Mongoose.model('Tarefa', todoSchema)
module.exports = Tarefa

// Testando cadastro no banco de dados
/*
    const novaTarefa = new Tarefa({
        description: 'Descriçaõ qualquer'
    })

    novaTarefa.save().then(() => {
        console.log('Tarefa 09')
    }).catch(err => {
        console.log('Erro ao cadastrar a nova tarefa' + err)
    })
*/