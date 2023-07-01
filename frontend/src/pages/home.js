import FormTask from "../components/tasks/form/FormTask"
import ListTask from "../components/tasks/list/ListTask"

const Task = props => {
    return (
        <div>
            <FormTask />
            <ListTask />
        </div>
    )
}

export default Task