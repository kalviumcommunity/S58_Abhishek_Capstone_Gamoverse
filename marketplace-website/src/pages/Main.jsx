import React ,{useState,useEffect} from "react";
import './Main.css';
import Sidemenu from "../components/Sidemenu";
import Header from "./Header";
import Home from "./Home";
import gta from './GTA.jpg'

function Main(){
    const [active,setActive]=useState(false);
    const [games,setGames]=useState([]);
    
    const handleToggleActive=()=>{
        setActive(!active);
    }

    const fetchData=()=>{
        fetch('http://localhost:8000/data/getdata.json')
        .then(res=>res.json())
        .then(data=>{
            setGames(data)
        })
        .catch(e=>console.log(e.message));
    }

    useEffect(()=>{
        fetchData();
    },[])

    return(
        <main>
            <Sidemenu active={active}/>
            <div className={`banner ${active?'active':undefined}`}>

            <Header toggleActive={handleToggleActive}/>
            <div className="container-fluid">
                <Home games={games}/>
            </div>
            </div>
        </main>
    )
}
export default Main;