
import "tailwindcss/tailwind.css"

import Nav from "../components/Nav";
import Articles from "../components/Articles";
import Pagination from "../components/Pagination";

import Footer from "../components/Footer";


let Article = () => {
    return (
        <>

            <Nav></Nav>

            <Articles></Articles>

            <Pagination></Pagination>

            <Footer></Footer>
        
        </>
    )
}


export default Article;