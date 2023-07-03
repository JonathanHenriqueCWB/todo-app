const { User } = require('../models/User')

const userController = {
    create: async(req, res) => {

        const error = []
        if(!req.body.password) error.push({msg: "Campo senha é obrigatorio"})
        if(!req.body.email) error.push({msg: "Campo email é obrigatorio"})
        if( await User.findOne({ 'email': req.body.email }) ) error.push({msg: "Email já cadastrado"})       
        if(error.length) return res.json(error)

        const newUser = { password: req.body.password, email: req.body.email }
        new User(newUser).save().then(user => {
            res.json([user, {msg: 'Novo usuário criado com sucesso'}])
        }).catch(err => {
            res.json([{msg: "Erro ao cadastrar novo usuário" + err}])
        })
    },

    read : async(req, res) => {
        User.find().lean().then(task => {
            res.json(task)
        }).catch(err => {
            res.json([{msg: "Erro ao carregar lista de usuários"}])
        })
    },

    update: async(req, res) => {
        User.findById(req.body._id).then( user => {
            user.name = req.body.name,
            user.email = req.body.email
            user.save().then(() => {
                res.json([{msg: 'Usuario alterado com sucesso'}])
            })
        })
    },

    delete: async(req, res) => {
        User.deleteOne({_id: req.params.id}).then(() => {
            res.json([{msg: 'Usuário removido com sucesso'}])
        }).catch(err => {
            res.json([{msg: "Erro ao deletar usuário"}])
        })
    }
}

module.exports = userController