import React from "react";
import "./App.css";
import utad_logo from "./img.swapcard.png";
import usports_logo from "./U-sports_logo.png";
import web_icon from "./web-globe-icon-23.png";
import Home from "./Home";
import LoginAdmin from "./LoginAdmin";
import axios from "axios";
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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

function App() {
  const [logued, setLogued] = useState(false);
  const [show, setShow] = useState(false);
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showLoginAdmin, setShowLoginAdmin] = useState(false);
  const [tokenString, setTokenString] = useState("");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleLogin = async (event) => {
    //Evita que el formulario HTML se envíe automáticamente cuando se presiona el botón "submit"
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      axios
        .post("http://localhost:3001/auth/login", {
          username,
          password,
        })
        .then((response) => {
          let respUser = response.data;
          console.log(respUser);
          let token = respUser.match(/token: (.*)$/)[1];
          respUser = respUser.substring(0, respUser.indexOf("@"));
          localStorage.setItem("user", respUser);
          setTokenString(token);
          // alert(tokenString);
        })
        .catch((error) => {
          console.error("ERROR", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nickname = document.getElementById("nickname").value;
    const sport = document.getElementById("sport").value;
    const schedule = document.getElementById("schedule").value;
    const password = document.getElementById("password_r").value;
    const conf_password = document.getElementById("conf_password").value;

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
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

  const handleStart = async (event) => {
    const user = localStorage.getItem("user");

    if (user && user.trim() !== "") {
      setLogued(true);
    } else {
      alert("Por favor, inicie sesión.");
    }
  };

  const handleClickAdmin = async (event) => {
    setShowLoginAdmin(true);
  };

  useEffect(() => {
    // Aquí podríamos consultar si el usuario ya ha iniciado sesión en el servidor
    // y establecer el estado de logued en consecuencia.
    // setLogued(false);
    // localStorage.clear();
  }, []);

  const isLogued = () => {
    if (logued) {
      return (
        <>
          <Home setLogued={setLogued} token={tokenString} />
        </>
      );
    } else {
      return (
        <>
          {/* <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login-admin" element={<LoginAdmin />} />
          </Routes> */}
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
                      label="E-mail"
                      id="username"
                      type="text"
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Contraseña"
                      id="password"
                      type="password"
                    />

                    <div className="d-flex justify-content-between mx-4 mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        label="Recordarme"
                      />
                      <a href="!#">Olvide mi contraseña</a>
                    </div>
                    {!showLoginAdmin ? (
                      <div className="d-flex justify-content-center mx-4 mb-4">
                        <button onClick={handleClickAdmin}>
                          Acceso administrador
                        </button>
                      </div>
                    ) : (
                      <LoginAdmin />
                    )}
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
                      label="Nombre"
                      id="name"
                      type="text"
                    />
                    <MDBInput
                      wrapperClass="mb-3"
                      label="Correo electronico"
                      id="email"
                      type="email"
                    />
                    <MDBInput
                      wrapperClass="mb-3"
                      label="Nombre de usuario"
                      id="nickname"
                      type="text"
                    />
                    <MDBInput
                      wrapperClass="mb-3"
                      label="Deporte"
                      id="sport"
                      type="text"
                    />
                    <MDBInput
                      wrapperClass="mb-3"
                      label="Horario"
                      id="schedule"
                      type="text"
                    />
                    <MDBInput
                      wrapperClass="mb-3"
                      label="Contraseña"
                      id="password_r"
                      type="password"
                    />
                    <MDBInput
                      wrapperClass="mb-3"
                      label="Confirmar contraseña"
                      id="conf_password"
                      type="password"
                    />

                    <div className="d-flex justify-content-center mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        label="Acepto terminos y condiciones"
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
          <div
            className="mt-5 justify-content-start"
            style={{ minHeight: "65%" }}
          >
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
                onClick={handleStart}
              >
                ¡Comienza!
              </Button>
            </div>
          </div>
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
        <Link to="/calendar">
          <button>
            <img src="ruta_de_tu_imagen" alt="calendar_icon.jpg" />
          </button>
        </Link>
        <footer className="d-flex justify-content-center">
          <hr />
        </footer>
      </div>
    </div>
  );
}

export default App;


