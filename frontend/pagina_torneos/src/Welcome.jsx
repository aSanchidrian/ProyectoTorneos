import React from "react";
import axios from "axios";

// import Redirect from "react-router-dom";
import usports_logo from "./U-sports_logo.png";
import utad_logo from "./img.swapcard.png";
import web_icon from "./web-globe-icon-23.png";
import { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import "@fontsource/montserrat";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Welcome(props) {
  const [show, setShow] = useState(false);
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleLogin = async (event) => {
    event.preventDefault(); //Evita que el formulario HTML se envíe automáticamente cuando se presiona el botón "submit"

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nickname = document.getElementById("nickname").value;
    const sport = document.getElementById("sport").value;
    const schedule = document.getElementById("schedule").value;
    const password = document.getElementById("password").value;
    const conf_password = document.getElementById("conf_password").value;

    try {
      const response = await axios.post("http://localhost:3000/login", {
        name,
        email,
        nickname,
        sport,
        schedule,
        password,
        conf_password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // document.getElementById("login-form").addEventListener("submit", handleLogin);
  // document
  //   .getElementById("register-form")
  //   .addEventListener("submit", handleRegister);

  // const handleLogin = (event) => {
  //   if (event.target.id === "login") {
  //     console.log("Login");
  //     // coger los datos y enviarlos al back
  //   } else if (event.target.id === "register") {
  //     console.log("Register");
  //     // coger los datos y enviarlos al back
  //   }
  // };

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
              <Nav.Link
                href="#link"
                style={{ color: "#0066ef" }}
                onClick={handleShow}
              >
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
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdownMenuLink"
                      style={{ position: "absolute", right: 0 }}
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
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Inicia sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* cuerpo del modal, aqui despliega el login y register */}
          <MDBContainer className="d-flex flex-column justify-content-center">
            <MDBTabs
              pills
              justify
              className="mb-3 d-flex flex-row justify-content-between"
            >
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab1")}
                  active={justifyActive === "tab1"}
                >
                  Iniciar sesion
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab2")}
                  active={justifyActive === "tab2"}
                >
                  Registrarse
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={justifyActive === "tab1"}>
                <br></br>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Username"
                  id="username"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="password"
                  type="password"
                />

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                  <a href="!#">Forgot password?</a>
                </div>

                <Button
                  className="mb-4 w-100"
                  id="login-form"
                  onClick={handleLogin}
                >
                  Sign in
                </Button>
              </MDBTabsPane>

              <MDBTabsPane show={justifyActive === "tab2"}>
                <br></br>
                <MDBInput
                  wrapperClass="mb-3"
                  label="Name"
                  id="name"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Email"
                  id="email"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Nickname"
                  id="nickname"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Sport"
                  id="sport"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Schedule"
                  id="schedule"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Password"
                  id="password"
                  type="password"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="ConfirmPassword"
                  id="conf_password"
                  type="password"
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    label="I have read and agree to the terms"
                  />
                </div>

                <Button
                  className="mb-4 w-100"
                  id="register-form"
                  onClick={handleRegister}
                >
                  Sign up
                </Button>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBContainer>
        </Modal.Body>
      </Modal>
      <div className="mt-5 justify-content-start" style={{ minHeight: "65%" }}>
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
          >
            ¡Comienza!
          </Button>
        </div>
      </div>
    </>
  );
}

export default Welcome;
