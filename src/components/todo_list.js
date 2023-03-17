import Todo from "./cards/todo_card";


const TodoList = ({ todos, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!todos) {
        return <h2>No data</h2>
    }

    return (
        <div>
            <ul>
                {todos.map((post) => (
                    <li key={post.id}>
                        <Todo title={post.title} completed={post.completed} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList