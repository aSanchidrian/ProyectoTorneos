import React from "react";
import usports_logo from "./U-sports_logo.png";
import usports_logo_mini from "./mini_usports.png";
import utad_logo from "./img.swapcard.png";
import web_icon from "./web-globe-icon-23.png";


import "@fontsource/montserrat";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const welcome = ( props ) => {
  return (
    <>
      <Navbar>
        <img
          className="mr-4 responsive-image"
          src={usports_logo_mini}
          style={{ maxWidth: "15%", maxHeight: "10%", marginLeft: "auto" }}
        />
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="mr-3">
              <Nav.Link href="#link" style={{ color: "#0066ef" }}>
                Iniciar sesion
              </Nav.Link>
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
                        Ingles
                      </a>
                      <a className="dropdown-item" href="#">
                        Español
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
      <br></br>
      <div className="row d-flex justify-content-center">
        <div className="col-3 row">
          <Button className="btn btn-primary rounded-blue-button">
            TimeLine
          </Button>
          <Button className="btn btn-primary rounded-blue-button">
            Equipos
          </Button>
          <Button className="btn btn-primary rounded-blue-button">
            Torneos
          </Button>
          <Button className="btn btn-primary rounded-blue-button-card">
            Destacados
          </Button>
          <div className="card-destacados">
            <h4>Noticia 1</h4>
            <h4>Noticia 2</h4>
            <h4>Noticia 3</h4>
            <h4>Noticia 1</h4>
            <h4>Noticia 2</h4>
            <h4>Noticia 3</h4>
          </div>
        </div>
        <div className="col-8 d-flex justify-content-center info-grande"></div>
      </div>
    </>
  );
};

export default welcome;
