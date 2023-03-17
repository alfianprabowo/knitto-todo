import AddButton from "./buttons/add_button";
import Pagination from "./pagination";
import { useState, useEffect } from "react";
import TodoList from "./todo_list";
import { getTodoList } from "../services/todo_api";

export default function Content({ todo }) {


    // console.log(data.length)
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(0);
    const [limit, setLimit] = useState(10);
    const [todosPerPage] = useState(10);


    // console.log(`is fetch ${data?.length}`)

    // const isEmpty = data.length === 0;

    useEffect(() => {
        setTodos(todo)

    }, []);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setLoading(true);
    //         const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    //         setTodos(res.data);
    //         setLoading(false);
    //     };

    //     fetchPosts();
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
            console.log(currentPage)

        }

    }
    const paginateBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            console.log(currentPage)
            setStart(start - limit);
            console.log(currentPage)

        }

    }

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

                {/* <div className="mt-10">
                    {isEmpty ? <p>----</p> : <>
                        {data &&
                            data.map((item) => (
                                <Todo data={item} key={item.id} />
                            ))}

                    </>}

                </div> */}

                <TodoList todos={currentTodos} loading={loading} />

                <div>
                    <Pagination
                        todoPerPage={todosPerPage}
                        totalTodos={todos.length}
                        paginateBack={paginateBack}
                        paginateFront={paginateFront}
                        currentPage={currentPage} />
                </div>

            </div>
        </div>
    )

}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
    const data = await res.json()

    return {
        props: {
            data,
        },
        revalidate: 10,
    }
}