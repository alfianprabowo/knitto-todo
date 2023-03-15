const Pagination = ({
    todoPerPage,
    totalTodos,
    paginate,
    paginateBack,
    paginateFront,
    currentPage,
}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTodos / todoPerPage); i++) {
        pageNumbers.push(i);
    }

    return (

        <div class="flex flex-col items-center">
            <span class="text-sm text-gray-700 dark:text-gray-400">
                Showing <span class="font-semibold text-gray-900 dark:text-white">{" "}{currentPage * todoPerPage - 10} {" "}  </span>
                to <span class="font-semibold text-gray-900 dark:text-white">{currentPage * todoPerPage} </span>
                of <span class="font-semibold text-gray-900 dark:text-white">{totalTodos} </span> Todos
            </span>


            <nav className='flex mt-2'>
                <button href="#" onClick={() => { paginateBack() }} class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-blue-100 hover:text-gray-700">
                    <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                    Prev
                </button>
                <button href="#" onClick={() => { paginateFront() }} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-blue-100 hover:text-gray-700 ">
                    Next
                    <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </nav>

        </div>


    )

}

export default Pagination;