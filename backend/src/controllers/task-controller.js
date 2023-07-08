const Task = require('../models/Task')
const { User } = require('../models/User')

const taskController = {

    byEmail: async(req, res) => {
        Task.find({"user.email" : req.params.email}).lean().then(tarefas => {
            res.json(tarefas)
        }).catch(err => {
            res.json([{msg: 'Erro ao carregar lista tarefas'}])
        })
        
    },

    create: async(req, res) => {   
        User.findById( req.body.user ).then( user => {
            
            const newTask = {
                description: req.body.description,
                done: req.body.done, user: user
            }
            
            new Task(newTask).save().then(task => {
                res.json([task, { msg: 'Tarefa cadastrada com sucesso'}])
            }).catch(err => {
                res.json([{msg: 'Erro ao cadastrar nova tarefa'}])
            })

        }).catch( err => {
            res.json([{msg: "Tarefa sem usuário"}])
        })
    },

    read : async(req, res) => {
        Task.find().lean().then(tarefas => {
            res.json(tarefas)
        }).catch(err => {
            res.json([{msg: 'Erro ao carregar lista tarefas'}])
        })
    },

    update: async(req, res) => {
        Task.findById(req.body._id).then(tarefa => {        
            tarefa.description = req.body.description
            tarefa.done = req.body.done
            tarefa.save().then(() => {
                res.json([{msg: 'Tarefa auterada com sucesso'}])
            })
        }).catch(err => {
            res.json([{msg: 'Erro ao tentar alterar registro'}])
        })
    },

    delete: async(req, res) => {
        Task.deleteOne({_id: req.params.id}).then(task => {
            res.json([task, { msg: 'Tarefa exluida com sucesso'}])
        }).catch(err => {
            res.json([{msg: 'Erro ao deletar tarefa'}])
        })
    }
}

module.exports = taskController