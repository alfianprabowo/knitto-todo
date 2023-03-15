import AddButton from "./buttons/add_button";
import Todo from ".//todo";
import Pagination from "./pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import Todos from "./todos";

const Content = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(0);
    const [limit, setLimit] = useState(10);
    const [todosPerPage] = useState(10);

    // const isEmpty = data?.[0]?.length === 0;

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setTodos(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);


    // Get current posts
    const indexOfLastTodo = currentPage * limit;
    const indexOfFirstTodo = indexOfLastTodo - limit;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const paginateFront = () => {
        if (currentPage < todos.length / limit) {
            setCurrentPage(currentPage + 1);
        }
    }
    const paginateBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <div className="flex flex-col items-center px-4 ">

            <div class="container xs:p-4 sm:p-8 bg-gray-100 rounded-lg flex flex-col h-full max-w-screen-lg mx-auto my-6 ">
                <div class="pb-6 flex flex-row w-full justify-between items-center">
                    <p className="text-primary text-lg font-semibold">Todo List</p>
                    <AddButton text={'Add Todo'} />
                </div>

                <div className="pb-2">
                </div>

                {/* <div className="mt-10">
                    {isEmpty ? <p>----</p> : <>
                        {data &&
                            data.map((item) => (
                                <Todo data={item} key={item.id} />
                            ))}

                    </>}

                </div> */}

                <Todos todos={currentTodos} loading={loading} />

                <div>
                    <Pagination
                        todoPerPage={todosPerPage}
                        totalTodos={todos.length}
                        paginate={paginate}
                        paginateBack={paginateBack}
                        paginateFront={paginateFront}
                        currentPage={currentPage} />
                </div>

            </div>
        </div>
    )
}

export default Content;