import React, { useEffect } from "react";


import Nav from "../components/Nav";
import CardDetail from "../components/CardDetail";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';

import {
    auth
} from '../authentication/firebase'


import "tailwindcss/tailwind.css"

let Detail = () => {
    
    const navigate = useNavigate();

    const [user, loading] = useAuthState(auth);

    useEffect(
        () => {
            if (loading) {
                return;
            }
            if (!user) {
                navigate("/login");
            }
        }, [loading, user, navigate]
    )

    return (
        <>

            <Nav></Nav>

            <CardDetail></CardDetail>

            <Footer></Footer>

        </>
    )
}


export default Detail;