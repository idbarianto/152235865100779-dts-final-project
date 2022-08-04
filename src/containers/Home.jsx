
import "tailwindcss/tailwind.css"

import Nav from "../components/Nav";
import Slide from "../components/Slide";
import Footer from "../components/Footer";



let Home = () => {
    return (
        <>

            <Nav></Nav>
            
            <Slide></Slide>

            <section className="overflow-hidden text-gray-700 my-10">
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div>
                        <header className="bg-white shadow">
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <h1 className="text-3xl font-bold text-gray-900">Home</h1>
                            </div>
                        </header>
                        <main>
                            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                <div className="px-4 py-6 sm:px-0">
                                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>


            <Footer></Footer>
        
        </>
    )
}


export default Home;