import axios from "../../../services/axios"
import { useState, useEffect } from 'react'

import TodoForm from "../todoForm/TodoForm"
import TodoList from "../todoList/TodoList"

const Todo = props => {

    // LocalStorage
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    const email = localStorage.getItem("email")
    
    // Estado
    const [tarefas, setTarefas] = useState([])
    const [description, setDescription] = useState('')

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios.get(`/api/tarefas/${email}`, config).then(response => {
            setTarefas(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, [email, token])

    const refresh = () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios.get(`/api/tarefas/${email}`, config).then(response => {
            setTarefas(response.data)
        }).catch(err => {
            console.log(err)
        })
    }    

    const handleAdd = () => {
        const bodyParam = { 
            description : description,
            done: false,
            user:  id
        }

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios.post('/api/tarefas/create',bodyParam, config).then(() => {
            // refresh()
        }).catch(err => {
            console.log(err)
        })
    }

    const handleDell = id => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios.delete(`/api/tarefas/delete/${id}`, config).then(response => {
            refresh()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
         <div>
            <TodoForm 
                description={description}
                novaTarefa={handleAdd}
                setDescription={setDescription} />
                
            <TodoList 
                tarefas={tarefas}
                deletarTarefa={handleDell} />
         </div>
    )
}

export default Todo