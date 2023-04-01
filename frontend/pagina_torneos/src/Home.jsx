import React from "react";
import bell_logo from "./bell_icon.png";
import usports_logo_mini from "./mini_usports.png";
import calendar_logo from "./calendar_icon.jpg";
import web_icon from "./web-globe-icon-23.png";

import "@fontsource/montserrat";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const welcome = (props) => {
  return (
    <>
      <Navbar>
        <img
          className="mr-3 mt-3 responsive-image"
          src={usports_logo_mini}
          style={{ width: "15%", height: "10%", marginLeft: "auto" }}
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
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        Mi perfil
                      </a>
                      <a className="dropdown-item" href="#">
                        Mis torneos
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
      <div className="d-flex justify-content-center mb-5">
        <hr />
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ minHeight: "100hv", margin: "0 5%", height: "65%" }}
      >
        <div
          style={{
            width: "30%",
          }}
        >
          <Button
            className="rounded-blue-button btn btn-primary"
            style={{ width: "80%", height: "10%" }}
          >
            <b>TIMELINE</b>
          </Button>
          <Button
            className="rounded-blue-button btn btn-primary"
            style={{ width: "80%", height: "10%" }}
          >
            <b>EQUIPOS</b>
          </Button>
          <Button
            className="rounded-blue-button btn btn-primary"
            style={{ width: "80%", height: "10%" }}
          >
            <b>TORNEOS</b>
          </Button>
          <Button
            className="rounded-blue-button btn btn-primary"
            style={{ width: "80%", height: "10%" }}
          >
            <b>ULTIMOS RESULTADOS</b>
          </Button>
        </div>
        <div
          style={{
            width: "70%",
            border: "1.5px solid #0066ef",
            borderRadius: "30px",
          }}
        >
        </div>
      </div>
    </>
  );
};

export default welcome;
