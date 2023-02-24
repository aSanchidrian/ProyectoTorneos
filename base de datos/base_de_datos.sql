CREATE DATABASE deportes;

USE deportes;

CREATE TABLE usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  correo VARCHAR(100) NOT NULL UNIQUE,
  nickname VARCHAR(50) NOT NULL UNIQUE,
  deporte VARCHAR(20) NOT NULL,
  horario VARCHAR(50) NOT NULL,
  rol VARCHAR(20) NOT NULL,
  equipo_id INT,
  FOREIGN KEY (equipo_id) REFERENCES equipo (id)
);

CREATE TABLE equipo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  deporte VARCHAR(20) NOT NULL,
  num_componentes INT NOT NULL,
  administrador_id INT,
  logo VARCHAR(100),
  FOREIGN KEY (administrador_id) REFERENCES usuario (id)
);

CREATE TABLE actividad (
  id INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(100) NOT NULL,
  deporte VARCHAR(20) NOT NULL,
  administrador_id INT,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  tipo VARCHAR(10) NOT NULL,
  plazas INT NOT NULL,
  estado VARCHAR(20) NOT NULL,
  resultado INT,
  lugar VARCHAR(100),
  FOREIGN KEY (administrador_id) REFERENCES usuario (id)
);

CREATE TABLE actividad_usuario (
  actividad_id INT,
  usuario_id INT,
  PRIMARY KEY (actividad_id, usuario_id),
  FOREIGN KEY (actividad_id) REFERENCES actividad (id),
  FOREIGN KEY (usuario_id) REFERENCES usuario (id)
);

CREATE TABLE actividad_equipo (
  actividad_id INT,
  equipo_id INT,
  PRIMARY KEY (actividad_id, equipo_id),
  FOREIGN KEY (actividad_id) REFERENCES actividad (id),
  FOREIGN KEY (equipo_id) REFERENCES equipo (id)
);

CREATE TABLE torneo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(100) NOT NULL,
  deporte VARCHAR(20) NOT NULL,
  administrador_id INT,
  fecha_comienzo DATE NOT NULL,
  hora_comienzo TIME NOT NULL,
  fecha_fin DATE NOT NULL,
  hora_fin TIME NOT NULL,
  num_min_equipos INT NOT NULL,
);
CREATE TABLE Usuario_Equipo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  id_equipo INT,
  FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
  FOREIGN KEY (id_equipo) REFERENCES Equipo(id)
);

