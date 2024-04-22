import React from "react";
import './Main.css';
import Sidemenu from "../components/Sidemenu";
import Header from "./Header";

function Main(){
    return(
        <main>
            <Sidemenu/>
            <div className="banner"></div>
            <Header/>
        </main>
    )
}
export default Main;