import {useState} from 'react'
import './TodoForm.css'

const TodoForm = props => {

    const [description, setDescription] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        window.alert('Formulario recebido com sucesso')
    }

    return (
        <div className='TodoForm'>
            <form onSubmit={handleSubmit}>
                <h1>NOVA TAREFA</h1><br />
                <div>
                    <label htmlFor="description"></label>
                    <input id='description' name='description' type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    <input type="submit" value="CRIAR TAREFA" />
                </div>
            </form>
        </div>
    )
}

export default TodoForm