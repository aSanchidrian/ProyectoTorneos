import React from "react";
import "./App.css";
import utad_logo from "./img.swapcard.png";
import usports_logo from "./U-sports_logo.png";
import web_icon from "./web-globe-icon-23.png";
// import axios from "axios";
// import { useState, useEffect } from "react";
import "@fontsource/montserrat";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar>
        <img
          className="mr-4 responsive-image"
          src={utad_logo}
          style={{ maxWidth: "200px", maxHeight: "100px", margin: "auto" }}
        />
        <Container>
          {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="mr-3">
              <Nav.Link href="#link" style={{ color: "#0066ef" }}>
                Iniciar sesion
              </Nav.Link>
            </Navbar.Text>
            <Navbar.Text>
              <div class="collapse navbar-collapse" id="navbar-list-4">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src={web_icon}
                        width="40"
                        height="40"
                        class="rounded-circle"
                      />
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a class="dropdown-item" href="#">
                        Ingles
                      </a>
                      <a class="dropdown-item" href="#">
                        España
                      </a>
                      <a class="dropdown-item" href="#">
                        Aleman
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* mitad de la pagina */}
      <div className="d-flex justify-content-center mb-5">
        <hr />
      </div>
      <br></br>
      <div className="mt-5 d-flez justify-content-start">
        <div className="display-4">
          <p
            className="mr-auto"
            style={{ color: "#0066ef", fontFamily: "montserrat" }}
          >
            <b>Bienvenido a</b>
          </p>
          <img
            className="responsive-image"
            src={usports_logo}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <br></br>
        <div className="d-block gap-2">
          <Button variant="primary" style={{borderRadius: "20px", width: ""}}>¡Comienza!</Button>
        </div>
      </div>
      <footer className="d-flex justify-content-center">
        <hr />
      </footer>
    </div>
  );
}

export default App;
