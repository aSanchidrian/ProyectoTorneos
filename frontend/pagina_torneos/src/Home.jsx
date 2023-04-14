import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import bell_logo from "./bell_icon.png";
import usports_logo_mini from "./mini_usports.png";
import calendar_logo from "./calendar_icon.jpg";
import web_icon from "./web-globe-icon-23.png";

import "@fontsource/montserrat";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Teams from "./Teams";

function Home() {
  const [showContent, setShowContent] = useState(false);
  const [open, setOpen] = useState(false);

  function handleButtonClick(buttonId) {
    switch (buttonId) {
      case "btn-1":
        setShowContent(<h1>Contenido del botón 1</h1>);
        break;
      case "btn-2":
        setShowContent(<Teams></Teams>);
        break;
      case "btn-3":
        setShowContent(<div>Contenido del botón 3</div>);
        break;
      case "btn-4":
        setShowContent(<span>Contenido del botón 4</span>);
        break;
      default:
        setShowContent(null);
    }
  }

  return (
    <>
      <Navbar>
        <img
          className="mr-3 mt-3 responsive-image"
          src={usports_logo_mini}
          style={{ width: "20%", height: "10%", marginLeft: "auto" }}
        />
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text
              className="mr-4"
              style={{ maxWidth: "3%", maxHeight: "3%" }}
            >
              <img
                src={calendar_logo}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              ></img>
            </Navbar.Text>
            <Navbar.Text
              className="mr-4"
              style={{ maxWidth: "3%", maxHeight: "3%" }}
            >
              <img
                src={bell_logo}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              ></img>
            </Navbar.Text>
            <Navbar.Text>
              <div className="collapse navbar-collapse" id="navbar-list-4">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown" align="end">
                    <a
                      className="nav-link dropdown-toggle"
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
                        className="rounded-circle"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        Mi perfil
                      </a>
                      <a className="dropdown-item" href="#">
                        Mis torneos
                      </a>
                      <a className="dropdown-item" href="#">
                        Mis actividades
                      </a>
                      <a className="dropdown-item" href="#">
                        Cerrar sesion
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex justify-content-center mb-2">
        <hr />
      </div>
      <div
        className="d-flex justify-content-center containerPrincipal"
        style={{ minHeight: "100hv", height: "79%" }}
      >
        <div
          className="mr-2"
          style={{
            width: "20%",
          }}
        >
          <Button
            className="rounded-blue-button btn btn-primary"
            id="btn-1"
            onClick={() => handleButtonClick("btn-1")}
            style={{ width: "100%", height: "10%" }}
          >
            <b>TIMELINE</b>
          </Button>
          <Button
            className="rounded-blue-button btn btn-primary"
            id="btn-2"
            onClick={() => handleButtonClick("btn-2")}
            style={{ width: "100%", height: "10%" }}
          >
            <b>EQUIPOS</b>
          </Button>
          <Button
            className="rounded-blue-button btn btn-primary"
            id="btn-3"
            onClick={() => handleButtonClick("btn-3")}
            style={{ width: "100%", height: "10%" }}
          >
            <b>TORNEOS</b>
          </Button>
          <Button
            className="rounded-blue-button btn btn-primary"
            id="btn-4"
            onClick={() => handleButtonClick("btn-4")}
            style={{ width: "100%", height: "10%" }}
          >
            <b>ACTIVIDADES</b>
          </Button>
          <Button
            className="rounded-blue-button btn btn-primary"
            id="btn-4"
            onClick={() => handleButtonClick("btn-4")}
            style={{ width: "100%", height: "10%" }}
          >
            <b>ULTIMOS RESULTADOS</b>
          </Button>
        </div>
        <div
          className="ml-2"
          style={{
            width: "80%",
            border: "1.5px solid #0066ef",
            borderRadius: "30px",
          }}
        >
          {/* cosas a cargar en el cuadrado grande*/}
          {showContent}
        </div>
      </div>
    </>
  );
}

export default Home;
