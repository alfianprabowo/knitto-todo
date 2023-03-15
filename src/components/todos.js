import Todo from "./todo";


const Todos = ({ todos, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
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

export default Todos