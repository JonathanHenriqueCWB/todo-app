import axios from '../../../services/axios'
import {useState, useEffect} from 'react'
import './TodoList.css'

const TodoList = pros => {

    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        axios.get("/api/tarefas/root@email.com").then(response => {
            setTarefas(response.data)
        }).catch(err => {
            setTarefas(err)
        })
    }, [])

    console.log(tarefas)

    return (
        <div className='TodoList'>
            <h2>TAREFAS</h2>
            {tarefas.map(product => (
                <div key={product._id}>
                    <input type="text" readOnly value={product.description}  placeholder='NOVA TAREFA' />
                    <input type="submit" value="DONE" />
                    <input type="submit" value="DEL" />
                </div>
            ))}
        </div>
    )
}

export default TodoList