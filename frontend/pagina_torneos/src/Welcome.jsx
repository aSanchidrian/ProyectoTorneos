import React from "react";
import usports_logo from "./U-sports_logo.png";
import utad_logo from "./img.swapcard.png";
import web_icon from "./web-globe-icon-23.png";

import "@fontsource/montserrat";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const welcome = (props) => {

  const check = () => {
    props.state.test = true;
  }

  return (
    <>
      <Navbar>
        <img
          className="mr-4 responsive-image"
          src={utad_logo}
          style={{ maxWidth: "200px", maxHeight: "100px", margin: "auto" }}
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
      <div className="mt-5 justify-content-start">
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
          <Button
            variant="primary"
            style={{ borderRadius: "20px", width: "150px" }}
            onClick={check}
          >
            ¡Comienza!
          </Button>
        </div>
      </div>
    </>
  );
};

export default welcome;
