import ax from 'axios'

const url = 'http://localhost:8080'

const axios =  ax.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json"
    }
})

export default axios

// axios é usado para fazer requisições no servidor