import { useState } from "react";

export default function AddTodo({ }) {
    const [titleForm, setTitleForm] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titleForm) return;
        // addTodo(text);
        setText('');
    }
    return (
        <div className='mx-4 py-4 '>
            <div className="flex flex-col items-center px-4 py-4 ">
                <p className="xs:text-xl md:text-2xl font-bold">Tambah Todo</p>
                <form onSubmit={handleSubmit} className="mt-6">
                    <input
                        type="text"
                        value={titleForm}
                        onChange={(e) => setTitleForm(e.target.value)}
                        placeholder="Add Todo..."
                    />
                </form>
            </div>
        </div>
    )
};
