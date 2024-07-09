import React, { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "../App";
import "./Main.css";
import Sidemenu from "../components/Sidemenu";
import Home from "./Home";
import Header from "./Header";
import Bag from "./Bag";
import Categories from "./Categories";
import MyLibrary from "./MyLibrary";
import { Route, Routes } from "react-router-dom";

function Main() {
  const { library, bag } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const handleToggleActive = () => {
    setActive(!active);
  };

  const fetchData = () => {
    fetch("http://localhost:8000/data/getdata")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        console.log(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(games, library, "line 29");

  return (
    <main className="main">
      <Sidemenu className="sidemenu" active={active} />

      <div>
        <Header toggleActive={handleToggleActive} />
        <div className="container-fluid">
          {games && games.length > 0 && (
            <Routes>
              <Route path="/" element={<Home games={games} />}></Route>
              <Route
                path="/category"
                element={<Categories games={games} />}
              ></Route>
              <Route
                path="/library"
                element={<MyLibrary games={library} />}
              ></Route>
              <Route path="/bag" element={<Bag games={bag} />}></Route>
            </Routes>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
