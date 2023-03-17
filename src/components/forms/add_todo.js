import { useState } from "react";

export default function add_todo({ }) {
    const [titleForm, setTitleForm] = useState();

    const addTodo = (e) => {
        e.preventDefault();

    }
    return (
        <div className='mx-4 py-4'>
            <div className="flex flex-col items-center px-4 py-4 ">
                <p className="xs:text-xl md:text-2xl font-bold">Tambah Todo</p>
            </div>
            <form onSubmit={addTodo}>

            </form>
        </div>
    )
};
