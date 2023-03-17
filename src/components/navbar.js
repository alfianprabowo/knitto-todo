
const CustomNavbar = ({ children }) => {
    return (
        <div>
            <nav className="bg-gray-100 px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b border-gray-200  ">
                <div className="container flex flex-wrap items-center ">
                    <a className="flex ">
                        <span className="self-center text-xl whitespace-nowrap text-primary xs:px-4 md:px-10">Todo App</span>
                    </a>

                </div>
            </nav>

            {children}

        </div>
    )
}

export default CustomNavbar;
