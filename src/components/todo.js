const Todo = ({ title, completed }) => {

    const setCompleted = () => {
        return completed == true ? 'Completed' : 'Not Completed';
    }

    return (
        <div>
            <a href="#" class="block w-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  mb-4">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{title}</h5>

                {completed === true ?
                    <p className="text-green-500">Completed</p> :
                    <p className="text-red-500">Not Completed</p>}
            </a>
        </div>
    )
}

export default Todo;