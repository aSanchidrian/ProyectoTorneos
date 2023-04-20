import React from "react";
import "./App.css";
import utad_logo from "./img.swapcard.png";
import usports_logo from "./U-sports_logo.png";
import web_icon from "./web-globe-icon-23.png";
// import axios from "axios";
import { useState, useEffect } from "react";
import "@fontsource/montserrat";

import Welcome from "./Welcome";
import Home from "./Home";

function App() {
  const [logued, setLogued] = useState(true);
  let test = true;

  useEffect(() => {
    // Aquí podríamos consultar si el usuario ya ha iniciado sesión en el servidor
    // y establecer el estado de logued en consecuencia.

    setLogued(true);
  }, []);
  const isLogued = () => {
    if (logued) {
      return (
        <>
          <Home></Home>
        </>
      );
    } else {
      return (
        <>
          <Welcome state={{ logued, test }}></Welcome>
        </>
      );
    }
  };

  return (
    <div className="App">
      {/* Aqui va la mitad de la pagina: welcome, home... */}
      <>{isLogued()}</>
      {/* parte de abajo */}

      <div id="holder">
        <footer className="d-flex justify-content-center">
          <hr />
        </footer>
      </div>
    </div>
  );
}

export default App;
