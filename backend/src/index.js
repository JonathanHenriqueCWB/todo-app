// Arquivos de configuração
const app = require('./config/server')
require('./config/database')

// Chamando model para manipulação no banco de dados
const Tarefa = require('./models/Tarefa')


// PUXA TAREFAS COMPLETAS E POR ID
app.get('/', function(req, res){
    Tarefa.find().lean().then(tarefas => {
        res.send(tarefas)
    }).catch(err => {
        res.send('Lista de tarefas vazias')
    })
})

// GET
app.get('/tarefas', function(req, res){
    Tarefa.find().lean().then(tarefas => {
        res.send(tarefas)
    }).catch(err => {
        res.send('Lista de tarefas não encontradas')
    })
})

app.get('/tarefas/:id', (req, res) => {
    Tarefa.findById({_id: req.params.id}).lean().then(tarefa => {
        res.send(tarefa)
    }).catch(err => {
        res.send('Erro ao encontrar a categoria selecionada')
    })
})

// POST
app.post('/tarefas/create', (req, res) => {
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
app.put('/tarefas/update', (req, res) => {
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
app.delete('/tarefas/delete/:id', (req, res) => {
    Tarefa.deleteOne({_id: req.params.id}).then(() => {
        res.send('Tarefa deletada com sucesso')
    }).catch(err => {
        res.send('Erro ao deletar tarefa')
    })
})





