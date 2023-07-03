import TodoForm from "../todoForm/TodoForm"
import TodoList from "../todoList/TodoList"

const Todo = props => {
    return (
         <div>
            <TodoForm />
            <TodoList />
         </div>
    )
}

export default Todo