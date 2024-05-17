import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="side-bar">
          <h2 className="title-sidebar">Jean Neymar</h2>

          <div className="div-title-for-navigate">
            <Link to="/">
              <h3 className="title-for-homepage">Acceuil</h3>
            </Link>
          </div>
          <div className="div-title-for-navigate">
            <Link to="/about">
              <h3>A propos</h3>
            </Link>
          </div>
          <div className="div-title-for-navigate">
            <Link to="/books">
              <h3>Oeuvres</h3>
            </Link>
          </div>
        </div> 
        <div className="div-pages">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
