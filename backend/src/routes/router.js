const express = require('express')
const router = express.Router()

const tarefas = require('./task-route')
const usuarios = require('./user-route')

router.use('/tarefas', tarefas)
router.use('/usuarios', usuarios)

module.exports = router
