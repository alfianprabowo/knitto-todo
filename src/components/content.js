import AddButton from "./buttons/add_button";
import Pagination from "./pagination";
import { useState, useEffect } from "react";
import TodoList from "./todo_list";
import { getTodoList } from "../services/todo_api";
import { useGetTodoListQuery } from "../services/todo_api"
import TodoCard from '../components/cards/todo_card'

export default function Content({ dataTodo }) {




    const loadData = () => {
        setLoading(true);

    }

    return (
        <div className="flex flex-col items-center px-4 ">

            <div className="container xs:p-4 sm:p-8 bg-gray-100 rounded-lg flex flex-col h-full max-w-screen-lg mx-auto my-6 ">
                <div className="pb-6 flex flex-row w-full justify-between items-center">
                    <p className="text-primary text-lg font-semibold">Todo List</p>
                    <AddButton text={'Add Todo'} />
                </div>

                <TodoCurrentPage data={dataTodo} />

            </div>
        </div>
    )

}

const TodoCurrentPage = (dataTodo) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(0);
    const [limit, setLimit] = useState(10);
    const [todosPerPage] = useState(10);
    const todoLength = dataTodo.length;
    console.log(todoLength)

    const queryParams = {
        _start: start,
        _limit: limit,
    }

    const { data, error, isLoading } = useGetTodoListQuery(queryParams);
    // const { data, error, isLoading } = useGetTodoListQuery();

    let content = null;

    if (isLoading) {
        content = <div > Please wait ............ </div>;
    }
    if (!data) {
        return <div>No posts :(</div>
    }

    if (error) {
        content = (
            <div >
                {" "}
                Something went wrong, Please retry after some time{" "}
            </div>
        );
    }

    if (data) {

        content = (
            <>
                <div>
                    {data.map((data, index) => (
                        <ul>
                            <li key={data.id}>
                                <TodoCard title={data.title} completed={data.completed} />
                            </li>
                        </ul>

                    ))}
                </div>

            </>
        );
    }

    // useEffect(() => {
    //     setTodos(currentTodos)

    // }, []);

    // Get current posts
    const indexOfLastTodo = currentPage * limit;
    const indexOfFirstTodo = indexOfLastTodo - limit;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    // Change Page 
    const paginateFront = () => {
        if (currentPage < todos.length / limit) {
            setCurrentPage(currentPage + 1);
            setStart(start + limit)
        }
    }

    const paginateBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            console.log(currentPage)
            setStart(start - limit);
        }
    }
    return <>
        {content}
        <TodoList todos={currentTodos} loading={isLoading} />

        <div>
            <Pagination
                todoPerPage={todosPerPage}
                totalTodos={todoLength}
                paginateBack={paginateBack}
                paginateFront={paginateFront}
                currentPage={currentPage} />
        </div>
    </>;

}

// export async function getStaticProps() {
//     const res = fetch(`https://jsonplaceholder.typicode.com/todos`)
//     const dataTodo = await res.json()

//     return {
//         props: {
//             dataTodo,
//         },
//         revalidate: 60,
//     }
// }

