const express = require('express')
const router = express.Router()
const tarefaController = require('../controllers/task-controller')
const auth = require('../config/auth')

router.use(auth.autorizar)

router.get('/', (req, res) => tarefaController.read(req, res))
router.get('/:email', (req, res) => tarefaController.byEmail(req, res))
router.post('/create', (req, res) => tarefaController.create(req, res))
router.put('/update', (req, res) => tarefaController.update(req, res))
router.delete('/delete/:id', (req, res) => tarefaController.delete(req, res))

module.exports = router
