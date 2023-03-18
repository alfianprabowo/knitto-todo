import AddButton from "./buttons/add_button";
import Pagination from "./pagination";
import { useState, useEffect } from "react";
import TodoList from "./todo_list";

export default function Content({ dataTodo }) {
    const [todos, setTodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(0);
    const [crot, setCrot] = useState(0);
    const [limit, setLimit] = useState(10);
    const todoLength = dataTodo.length;

    // Get current posts
    const indexOfLastTodo = currentPage * limit;
    const indexOfFirstTodo = indexOfLastTodo - limit;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    // Change Page 
    const paginateFront = () => {
        if (currentPage < dataTodo.length / limit) {
            setCurrentPage(currentPage + 1);
            setStart(start + limit)
            setCrot(crot + limit)
        }
    }

    const paginateBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setStart(start - limit);
            setCrot(crot - limit)
        }
    }

    return (
        <div className="flex flex-col items-center px-4 ">

            <div className="container xs:p-4 sm:p-8 bg-gray-100 rounded-lg flex flex-col h-full max-w-screen-lg mx-auto my-6 ">
                <div className="pb-6 flex flex-row w-full justify-between items-center">
                    <p className="text-primary text-lg font-semibold">Todo List</p>
                    <AddButton text={'Add Todo'} />
                </div>

                <TodoList start={start} limit={limit} />

                <div>
                    <Pagination
                        limit={limit}
                        totalTodos={todoLength}
                        paginateBack={paginateBack}
                        paginateFront={paginateFront}
                        currentPage={currentPage} />
                </div>
            </div>
        </div>
    )

}

