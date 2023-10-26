-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-10-2023 a las 02:40:40
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `luminis`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `idCart` int(11) NOT NULL,
  `date` date NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `idCategory` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`idCategory`, `name`) VALUES
(1, 'infantil'),
(2, 'suspenso'),
(3, 'drama'),
(4, 'utiles_escolares'),
(5, 'politica'),
(6, 'terror'),
(7, 'sagas'),
(8, 'docentes'),
(9, 'libros_escolares');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagesproducts`
--

CREATE TABLE `imagesproducts` (
  `idImgProduct` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `idProduct` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagesproducts`
--

INSERT INTO `imagesproducts` (`idImgProduct`, `name`, `idProduct`) VALUES
(5, 'sinImagen.png', 16),
(6, 'product-1698089155957.jpg', 17),
(7, 'product-1698089155959.jpg', 17),
(8, 'product-1698175135990.jpg', 18),
(9, 'product-1698187272871.png', 19),
(10, 'product-1698187272980.jpg', 19),
(11, 'product-1698190450069.png', 20),
(12, 'product-1698190450145.jpg', 20),
(13, 'product-1698190450087.jpg', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `idProduct` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `editorial` varchar(50) DEFAULT NULL,
  `author` varchar(50) DEFAULT NULL,
  `detail` varchar(150) NOT NULL,
  `characteristic` varchar(100) NOT NULL,
  `purchasePrice` double NOT NULL,
  `salePrice` double NOT NULL,
  `stock` int(11) NOT NULL,
  `idCategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`idProduct`, `name`, `brand`, `editorial`, `author`, `detail`, `characteristic`, `purchasePrice`, `salePrice`, `stock`, `idCategory`) VALUES
(16, 'El Mounstro de Colores ', '', 'Flamboyant', 'Anna Llenas', 'El monstruo de colores identifica cada emoción con un color de esta manera es muy fácil para los niños poder identificar las emociones de manera gráfi', ' 25cm x 25cm ,44 páginas, Tapa  dura, Letra minúscula', 1000, 4120, 12, 1),
(17, 'El Mounstro de Colores ', '', 'Flamboyant', 'Anna Llenas', 'El monstruo de colores identifica cada emoción con un color de esta manera es muy fácil para los niños poder identificar las emociones de manera gráfi', ' 25cm x 25cm ,44 páginas, Tapa  dura, Letra minúscula', 1020, 4125, 12, 1),
(18, 'Caperucita Roja', '', 'la estacion', 'Los hermanos Grimm (Jacob y Wilhelm)', 'Todo comienza con una abuelita medio enfermucha, y una canasta con una deliciosa torta y un frasco de miel. Caperucita debe llevársela a su abuela, pa', ' IMPRENTA MAYÚSCULA, tapa blanda, edad recomendada 6 años, 49 paginas, medidas:  13.00 x 21.00, ', 1800, 3330, 4, 1),
(19, 'libro', '', 'hola mundo', 'hola mundo', 'dsgfdsghjghjhgkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', 'jjhjkhkjf', 520, 3000, 15, 8),
(20, 'gyjhgjgkhgjh', '', 'jhjhkhkj', 'jkhjkhkjh', 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', 'hgjhgh', 235, 4566, 5646, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `dni` varchar(12) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `password` varchar(120) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cellPhone` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `province` varchar(50) NOT NULL,
  `cp` varchar(10) NOT NULL,
  `rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`idCart`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idCategory`);

--
-- Indices de la tabla `imagesproducts`
--
ALTER TABLE `imagesproducts`
  ADD PRIMARY KEY (`idImgProduct`),
  ADD KEY `idProduct` (`idProduct`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idProduct`),
  ADD KEY `idCategory` (`idCategory`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `idCart` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `idCategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `imagesproducts`
--
ALTER TABLE `imagesproducts`
  MODIFY `idImgProduct` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `idProduct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `imagesproducts`
--
ALTER TABLE `imagesproducts`
  ADD CONSTRAINT `imagesproducts_ibfk_1` FOREIGN KEY (`idProduct`) REFERENCES `products` (`idProduct`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`idCategory`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
