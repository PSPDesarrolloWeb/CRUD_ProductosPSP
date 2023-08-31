-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-08-2023 a las 19:44:28
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `productos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_prod` int(11) NOT NULL,
  `nombre_prod` varchar(255) NOT NULL,
  `precio_prod` decimal(10,2) DEFAULT NULL,
  `fecha_fab_prod` date DEFAULT NULL,
  `cantidad_prod` int(11) DEFAULT NULL,
  `prov_id_prod` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_prod`, `nombre_prod`, `precio_prod`, `fecha_fab_prod`, `cantidad_prod`, `prov_id_prod`) VALUES
(2, 'Piano Korg Krome', '2560.21', '2023-08-20', 100, 1),
(4, 'Torre de parlantes M&A', '12500.20', '2023-08-01', 2500, 2),
(8, 'Guitarra acústica Yamaha', '650.20', '2023-08-01', 100, 7),
(10, 'Teclado electrónico Casio', '299.99', '2023-08-05', 50, 2),
(14, 'Batería Pearl', '950.75', '2023-07-20', 25, 11),
(15, 'Piano de cola Steinway', '5500.00', '2023-08-10', 10, 12),
(16, 'Violín Stradivarius', '850.00', '2023-07-15', 30, 13),
(17, 'Flauta travesera Yamaha', '180.50', '2023-08-03', 40, 14),
(18, 'Guitarra eléctrica Fender', '899.99', '2023-07-25', 15, 7),
(19, 'Bajo Ibanez de 5 cuerdas', '450.25', '2023-08-08', 20, 8),
(20, 'Violonchelo Stradivarius', '1200.00', '2023-07-18', 12, 9),
(21, 'Saxofón alto Yamaha', '680.75', '2023-08-12', 18, 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_prod`),
  ADD KEY `proveedor_id` (`prov_id_prod`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`prov_id_prod`) REFERENCES `proveedores` (`id_prov`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
