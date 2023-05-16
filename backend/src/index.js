// Configuração Servidor Express e Middleware
    const app = require('./config/server')

// Confi string de conexão banco de dados mongoose
    require('./config/database')

// Model mongoose
    require('./models/Tarefa')

// Configuração das rotas
    const tarefas = require('./routes/tarefas-route')

// ROTAS
    app.use('/tarefas', tarefas)


