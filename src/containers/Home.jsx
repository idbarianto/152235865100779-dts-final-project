
import "tailwindcss/tailwind.css"

import Nav from "../components/Nav";
import Slide from "../components/Slide";
import Galery from "../components/Galery";
import Footer from "../components/Footer";



let Home = () => {
    return (
        <>

            <Nav></Nav>
            
            <Slide></Slide>

            <Galery></Galery>

            <Footer></Footer>
        
        </>
    )
}


export default Home;