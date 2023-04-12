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

function Teams() {
  return (
    <>
      <div
        className="d-flex justify-content-center container-3"
        style={{ flexDirection: "column", height: "100%", margin: "0.25% 2% 0.25% 2%", alignItems: "center" }}
      >
        <div
          style={{
            height: "30%",
            border: "1.5px solid #0066ef",
            borderRadius: "30px",
          }}
        >
          
        </div>
        <h1></h1>
        <div
          style={{
            height: "30%",
            border: "1.5px solid #0066ef",
            borderRadius: "30px",
          }}
        >
          <h3 style={{color: "#0066ef"}}><b>Equipos</b></h3>
        </div>
        <h1></h1>
        <div
          style={{
            height: "30%",
            border: "1.5px solid #0066ef",
            borderRadius: "30px",
          }}
        >
          <h3 style={{color: "#0066ef"}}><b>Publicaciones</b></h3>
        </div>
      </div>
    </>
  );
}

export default Teams;
