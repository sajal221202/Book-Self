import React from "react";
import Header from "../../components/header/header";
import { Outlet } from 'react-router-dom';
const Home = () => {
    return(
       <main>
        <Header />
        <Outlet/>
       </main>
    )
}

export default Home;