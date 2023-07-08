import './TodoForm.css'

const TodoForm = props =>  {
    return (
        <div className='TodoForm'>
            <form>
                <h1>NOVA TAREFA</h1><br />
                <div>
                    <label htmlFor="description"></label>
                    <input id='description' name='description' type="text" value={props.description} onChange={e => props.setDescription(e.target.value)} />
                    <input type="submit" value="CRIAR TAREFA" onClick={props.novaTarefa} />
                </div>
            </form>
        </div>
    )
}

export default TodoForm