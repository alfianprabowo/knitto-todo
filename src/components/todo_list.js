import TodoCard from "./cards/todo_card";
import { useGetTodoListQuery } from "../services/todo_api"
import { useState, useEffect } from "react";


const TodoList = ({ start, limit }) => {
    const [_start, setStart] = useState(start);
    const [_limit, setLimit] = useState(limit);

    console.log(`start ${_start}`)
    console.log(`limit ${_limit}`)

    const queryParams = {
        _start: _start,
        _limit: _limit,
    }

    const { data, error, isLoading } = useGetTodoListQuery(queryParams);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (!data) {
        return <h2>No data</h2>
    }

    if (error) {
        return <div >
            {" "}
            Something went wrong, Please retry again{" "}
        </div>

    }

    return (
        <div>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>
                        <TodoCard title={todo.title} completed={todo.completed} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList