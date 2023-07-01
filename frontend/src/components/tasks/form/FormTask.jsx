import {useState} from 'react'

const FormTask = props => {

    const [description, setDescription] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        window.alert('Formulario recebido com sucesso')
    }

    return (
        <div>
            <h2>Nova tarefa</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="description">Descrição tarefa </label>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    <input type="submit" value="CRIAR TAREFA" />
                </div>
            </form>
        </div>
    )
}

export default FormTask