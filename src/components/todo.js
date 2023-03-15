const Todo = ({ title, completed }) => {
    // const { title, completed } = data;

    const setCompleted = () => {
        return completed == true ? 'Completed' : 'Not Completed';
    }

    return (
        <div>
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800  ">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>

                <p class="font-normal text-gray-700 dark:text-gray-400">{completed === true ? 'Completed' : 'Not Completed'} </p>
            </a>
        </div>
    )
}

export default Todo;