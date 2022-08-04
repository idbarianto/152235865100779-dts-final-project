

let Pagination = () => {
    return (
        <>
            <div className="flex justify-center py-10">
                <nav aria-label="Page navigation example">
                    <ul className="flex list-style-none">
                        <li className="page-item disabled"><p className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none" href="#" tabIndex={-1} aria-disabled="true">Previous</p></li>
                        <li className="page-item"><p className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" href="#">1</p></li>
                        <li className="page-item active"><p className="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md" href="#">2</p></li>
                        <li className="page-item"><p className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" href="#">3</p></li>
                        <li className="page-item"><p className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" href="#">Next</p></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Pagination;