import TodoCard from "./cards/todo_card";


const TodoList = ({ todos, }) => {

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoCard title={todo.title} completed={todo.completed} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList