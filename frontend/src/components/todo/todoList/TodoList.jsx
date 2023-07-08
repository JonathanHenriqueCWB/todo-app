import './TodoList.css'

const TodoList = props => {

    return (
        <div className='TodoList'>
            <h2>TAREFAS</h2>
            {props.tarefas.map(task => (
                <div key={task._id}>
                    <input name='tarefa' type="text" readOnly value={task.description} />
                    <input type="submit" value="DONE" />
                    <input type="submit" value="DEL" onClick={() => props.deletarTarefa(task._id)} />
                </div>
            ))}
        </div>
    )
}

export default TodoList