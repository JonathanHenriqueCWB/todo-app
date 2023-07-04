import axios from '../../../services/axios'
import {useState, useEffect} from 'react'
import './TodoList.css'

const TodoList = pros => {

    const [tarefas, setTarefas] = useState([])
    const token = localStorage.getItem("token")
    const email = localStorage.getItem("email")

    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios.get(`/api/tarefas/${email}`, config).then(response => {
            setTarefas(response.data)
        }).catch(err => {
            setTarefas(err)
        })
    }, [email, token])

    return (
        <div className='TodoList'>
            <h2>TAREFAS</h2>
            {tarefas.map(product => (
                <div key={product._id}>
                    <input name='tarefa' type="text" readOnly value={product.description}  placeholder='NOVA TAREFA' />
                    <input type="submit" value="DONE" />
                    <input type="submit" value="DEL" />
                </div>
            ))}
        </div>
    )
}

export default TodoList