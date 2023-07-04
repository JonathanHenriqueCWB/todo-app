const { User } = require('../models/User')
const auth = require('.././config/auth')
const bcryptjs = require('bcryptjs')

const userController = {
    create: async(req, res) => {
        const error = []
        if(!req.body.password) error.push({msg: "Campo senha é obrigatorio"})
        if(!req.body.email) error.push({msg: "Campo email é obrigatorio"})
        if( await User.findOne({ 'email': req.body.email }) ) error.push({msg: "Email já cadastrado"})       
        if(error.length) return res.json(error)

        const newUser = { password: req.body.password, email: req.body.email }
        new User(newUser).save().then(user => {
            auth.incluirToken(user)
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
    },

    login: async(req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne({ 'email': email }).select('+password')
        
        if (!user) return res.status(400).send([{ msg: 'Usuário não encontrado!' }]);
        if (!await bcryptjs.compare(password, user.password)) return res.status(400).send([{ msg: 'Senha inválida!' }]);
        
        await auth.incluirToken(user);
        res.status(200).json([user]);
    }
}

module.exports = userController