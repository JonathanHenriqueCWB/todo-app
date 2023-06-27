const { User } = require('../models/User')

const userController ={
    create: async(req, res) => {
        const newUser = {
            name: req.body.name, password: req.body.password, email: req.body.email
        }

        new User(newUser).save().then(() => {
            res.json({msg: 'Novo usuário criado com sucesso'})
        }).catch(err => {
            res.json({msg: "Erro ao cadastrar novo usuário"})
        })
    },

    read : async(req, res) => {
        User.find().lean().then(task => {
            res.json(task)
        }).catch(err => {
            res.json({msg: "Erro ao carregar lista de usuários"})
        })
    },

    update: async(req, res) => {
        User.findById(req.body._id).then( user => {
            user.name = req.body.name,
            user.email = req.body.email
            user.save().then(() => {
                res.json({msg: 'Usuario alterado com sucesso'})
            })
        })
    },

    delete: async(req, res) => {
        User.deleteOne({_id: req.params.id}).then(() => {
            res.json({msg: 'Usuário removido com sucesso'})
        }).catch(err => {
            res.json({msg: "Erro ao deletar usuário"})
        })
    }
}

module.exports = userController