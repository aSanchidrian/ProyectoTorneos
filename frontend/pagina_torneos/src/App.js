import React from "react";
import "./App.css";
import utad_logo from "./img.swapcard.png";
import usports_logo from "./U-sports_logo.png";
import web_icon from "./web-globe-icon-23.png";
// import axios from "axios";
import { useState, useEffect } from "react";
import "@fontsource/montserrat";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Welcome from "./Welcome";
import Home from "./Home";

function App() {
  const [logued, setLogued] = useState(true);
  let test=true;

  const isLogued = () => {
    if (!logued) {
      return (
        <>
          <Welcome state={{logued, test}}></Welcome>
        </>
      );
    } else {
      return (
        <>
          <Home></Home>
        </>
      );
    }
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gap: "1rem",
    height: "100vh",
  };

  const sectionStyle = {
    background: "#f2f2f2",
    padding: "20px",
  };

  return (
    <div className="App">
      {/* Aqui va la mitad de la pagina: welcome, home... */}
      <>{isLogued()}</>
      {/* parte de abajo */}
      
      <footer className="d-flex justify-content-center">
        <hr />
      </footer>
    </div>
  );
}

export default App;
