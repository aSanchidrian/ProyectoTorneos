import React, { useState } from "react";
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

function LoginAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para verificar los datos de inicio de sesión del administrador
    if (username === "admin" && password === "password") {
      // Iniciar sesión exitosamente, puedes redirigir a la página de administrador
      console.log("Inicio de sesión exitoso");
    } else {
      // Datos de inicio de sesión incorrectos, puedes mostrar un mensaje de error
      console.log("Datos de inicio de sesión incorrectos");
    }
  };

  return (
    <div>
      <br></br>
      <h2>Inicio de Sesión Administrador</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario: </label>
          <MDBInput wrapperClass="mb-3" label="" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="password">Contraseña: </label>
          <MDBInput
            wrapperClass="mb-3"
            label=""
            id="password_r"
            type="password"
          />
        </div>
      </form>
      <br></br>
      <br></br>
    </div>
  );
}

export default LoginAdmin;
