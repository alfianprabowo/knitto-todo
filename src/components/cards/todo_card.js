const TodoCard = ({ title, completed }) => {

    return (
        <div>
            <a href="#" className="block w-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-100  mb-4">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{title}</h5>

                {completed === true ?
                    <p className="text-green-500">Completed</p> :
                    <p className="text-red-500">Not Completed</p>}
            </a>
        </div>
    )
}

export default TodoCard;