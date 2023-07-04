const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/user-controller')

router.get('/', (req, res) => usuarioController.read(req, res))
router.post('/create', (req, res) => usuarioController.create(req, res))
router.put('/update', (req, res) => usuarioController.update(req, res))
router.delete('/delete/:id', (req, res) => usuarioController.delete(req, res))
router.post('/login', (req, res) => usuarioController.login(req, res))

module.exports = router