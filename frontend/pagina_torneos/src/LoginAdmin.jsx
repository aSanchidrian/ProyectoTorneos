import React, { useState } from "react";

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
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <br></br>
      <br></br>
    </div>
  );
}

export default LoginAdmin;
