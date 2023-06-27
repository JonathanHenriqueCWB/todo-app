// CONFIG - configuração do servidor
const app = require('./config/server')
// MODEL - string de conexão (mongoose)
require('./config/conn')    

// CONFIG - model, schema do banco de dados
require('./models/Task')
require('./models/User')

// ROUTES - puxa todas as rotas referentes a tarefas
const route = require('./routes/router')

// ROTAS
app.use('/api', route)

