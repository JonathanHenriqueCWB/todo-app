// Rotas express
const express = require('express')
const router = express.Router()
// Model
const Tarefa = require('../models/Tarefa')

// PUXA TAREFAS COMPLETAS E POR ID
router.get('/', function(req, res){
    Tarefa.find().lean().then(tarefas => {
        res.send(tarefas)
    }).catch(err => {
        res.send('Lista de tarefas vazias')
    })
})

// GET
router.get('/read', function(req, res){
    Tarefa.find().lean().then(tarefas => {
        res.send(tarefas)
    }).catch(err => {
        res.send('Lista de tarefas não encontradas')
    })
})

router.get('/read/:id', (req, res) => {
    Tarefa.findById({_id: req.params.id}).lean().then(tarefa => {
        res.send(tarefa)
    }).catch(err => {
        res.send('Erro ao encontrar a categoria selecionada')
    })
})

// POST
router.post('/create', (req, res) => {
    const newTask = {
        description: req.body.description
    }

    new Tarefa(newTask).save().then(() => {
        res.send('Tarefa cadastrada com sucesso')
    }).catch(err => {
        res.send('Erro ao cadastrar nova tarefa')
    })
})

// PUT
router.put('/update', (req, res) => {
    Tarefa.findById(req.body._id).then(tarefa=> {        
        tarefa.description = req.body.description
        tarefa.save().then(() => {
            res.send('Tarefa auterada com sucesso')
        })
    }).catch(err => {
        res.send('Erro ao tentar alterar registro')
    })
})

// DELETE
router.delete('/delete/:id', (req, res) => {
    Tarefa.deleteOne({_id: req.params.id}).then(() => {
        res.send('Tarefa deletada com sucesso')
    }).catch(err => {
        res.send('Erro ao deletar tarefa')
    })
})

module.exports = router
