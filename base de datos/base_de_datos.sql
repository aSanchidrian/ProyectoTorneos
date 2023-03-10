-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Servidor: sql8.freemysqlhosting.net
-- Tiempo de generación: 10-03-2023 a las 10:18:22
-- Versión del servidor: 5.5.62-0ubuntu0.14.04.1
-- Versión de PHP: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sql8602538`
--
CREATE DATABASE IF NOT EXISTS `sql8602538` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sql8602538`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Actividad`
--

CREATE TABLE `Actividad` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `deporte` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `plazas_disponibles` int(11) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `lugar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Calendario`
--

CREATE TABLE `Calendario` (
  `id` int(11) NOT NULL,
  `torneo_id` int(11) NOT NULL,
  `actividad_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Equipo`
--

CREATE TABLE `Equipo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `deporte` varchar(255) NOT NULL,
  `num_componentes` int(11) NOT NULL,
  `logo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Torneo`
--

CREATE TABLE `Torneo` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `deporte` varchar(255) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `min_equipos` int(11) NOT NULL,
  `num_rondas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuario`
--

CREATE TABLE `Usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `deporte` varchar(255) NOT NULL,
  `horario_disponibilidad` varchar(255) NOT NULL,
  `permisos` tinyint(1) NOT NULL DEFAULT '0',
  `PASSWORD` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Usuario`
--

INSERT INTO `Usuario` (`id`, `nombre`, `email`, `nickname`, `deporte`, `horario_disponibilidad`, `permisos`, `PASSWORD`) VALUES
(3, 'Alex2', 'alexfdeaszperera@hotmail.com', 'alexfp22001', 'futbol', '13:00-14:00', 0, '$2b$10$0xB6RHejiehnRBW5lFz1UeURZBKd1lSSnqKrjKkohTz9ujTyse826');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuario_Actividad`
--

CREATE TABLE `Usuario_Actividad` (
  `usuario_id` int(11) NOT NULL,
  `actividad_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuario_Equipo`
--

CREATE TABLE `Usuario_Equipo` (
  `usuario_id` int(11) NOT NULL,
  `equipo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Actividad`
--
ALTER TABLE `Actividad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Calendario`
--
ALTER TABLE `Calendario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `torneo_id` (`torneo_id`),
  ADD KEY `actividad_id` (`actividad_id`);

--
-- Indices de la tabla `Equipo`
--
ALTER TABLE `Equipo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Torneo`
--
ALTER TABLE `Torneo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`,`nickname`);

--
-- Indices de la tabla `Usuario_Actividad`
--
ALTER TABLE `Usuario_Actividad`
  ADD PRIMARY KEY (`usuario_id`,`actividad_id`),
  ADD KEY `actividad_id` (`actividad_id`);

--
-- Indices de la tabla `Usuario_Equipo`
--
ALTER TABLE `Usuario_Equipo`
  ADD PRIMARY KEY (`usuario_id`,`equipo_id`),
  ADD KEY `equipo_id` (`equipo_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Actividad`
--
ALTER TABLE `Actividad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `Calendario`
--
ALTER TABLE `Calendario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `Equipo`
--
ALTER TABLE `Equipo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `Torneo`
--
ALTER TABLE `Torneo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `Usuario`
--
ALTER TABLE `Usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Calendario`
--
ALTER TABLE `Calendario`
  ADD CONSTRAINT `Calendario_ibfk_1` FOREIGN KEY (`torneo_id`) REFERENCES `Torneo` (`id`),
  ADD CONSTRAINT `Calendario_ibfk_2` FOREIGN KEY (`actividad_id`) REFERENCES `Actividad` (`id`);

--
-- Filtros para la tabla `Usuario_Actividad`
--
ALTER TABLE `Usuario_Actividad`
  ADD CONSTRAINT `Usuario_Actividad_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario` (`id`),
  ADD CONSTRAINT `Usuario_Actividad_ibfk_2` FOREIGN KEY (`actividad_id`) REFERENCES `Actividad` (`id`);

--
-- Filtros para la tabla `Usuario_Equipo`
--
ALTER TABLE `Usuario_Equipo`
  ADD CONSTRAINT `Usuario_Equipo_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario` (`id`),
  ADD CONSTRAINT `Usuario_Equipo_ibfk_2` FOREIGN KEY (`equipo_id`) REFERENCES `Equipo` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
