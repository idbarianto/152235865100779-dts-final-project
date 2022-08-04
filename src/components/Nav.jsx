
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useAuthState } from 'react-firebase-hooks/auth';

import {
    auth,
    keliarAplikasi,
} from '../authentication/firebase';

let Nav = () => {


    const navigate = useNavigate();
    
    const [user] = useAuthState(auth);

    const buttonLogoutOnClickHandler = async () => {
        await keliarAplikasi();
        navigate("/login");
    };


    return (
        <>
            <nav className="z-0 relative">
                <div className="relative z-10 bg-grey-900 shadow">
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex items-center px-2 lg:px-0">
                                <p className="flex-shrink-0">
                                    <img className="block lg:hidden h-12 w-16" src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" alt="Logo" />
                                    <img className="hidden lg:block h-12 w-auto" src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" alt="Logo" />
                                </p>
                                <div className="hidden lg:block lg:ml-2">
                                    <div className="flex">
                                        <Link to="/" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-gray-400 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> Home </Link>
                                        <Link to="/article" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-gray-400 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> Article </Link>
                                        <Link to="/profile" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-gray-400 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> About Me </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                                <div className="max-w-lg w-full lg:max-w-xs">
                                    <label htmlFor="search" className="sr-only">Search </label>
                                    <form methode="get" className="relative z-50">
                                        <button type="submit" id="searchsubmit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <input type="text" name="s" id="s" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-100 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-gray-100 focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search" />
                                    </form>
                                </div>

                                {user ? 
                                    (
                                        <button onClick={buttonLogoutOnClickHandler} class="bg-gray-100 text-black px-3 py-2 ml-2 rounded-md text-sm font-medium" aria-current="page">Logout</button>
                                    ) 
                                    : 
                                    (
                                        <Link to="/login" class="bg-gray-100 text-black px-3 py-2 ml-2 rounded-md text-sm font-medium" aria-current="page">Login</Link>
                                    )
                                }


                            </div>
                            <div className="flex lg:hidden">
                                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div x-show="menu" className="block md:hidden">
                        <div className="px-2 pt-2 pb-3">
                            <Link to="/" className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home </Link>
                            <Link to="/article" className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Article </Link>
                            <Link to="/profile" className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">About Me </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Nav;