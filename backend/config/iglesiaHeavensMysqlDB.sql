-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 21, 2023 at 08:41 AM
-- Server version: 8.0.33-0ubuntu0.22.04.2
-- PHP Version: 8.1.2-1ubuntu2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Geografica`
--

-- --------------------------------------------------------

--
-- Table structure for table `Barrio`
--

CREATE TABLE `Barrio` (
  `idBarrio` int NOT NULL,
  `nombreBarrio` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `idComuna` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `Barrio`
--

INSERT INTO `Barrio` (`idBarrio`, `nombreBarrio`, `idComuna`) VALUES
(1, 'El Rosal', 1),
(2, 'Los Angeles', 2),
(3, 'La paz', 3),
(4, 'La pera', 4),
(5, 'Santa barbara', 5),
(6, 'corregidor', 6),
(7, 'Parcela', 7),
(8, 'Chacarita', 8);

-- --------------------------------------------------------

--
-- Table structure for table `Comuna`
--

CREATE TABLE `Comuna` (
  `idComuna` int NOT NULL,
  `nombreComuna` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `idMunicipio` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `Comuna`
--

INSERT INTO `Comuna` (`idComuna`, `nombreComuna`, `idMunicipio`) VALUES
(1, 'Norte', 1),
(2, 'Nororiental', 1),
(3, 'Altamira', 4),
(4, 'Cañaveral', 4),
(5, 'Acapulco', 3),
(6, 'Barbosa', 3),
(7, 'La mata', 2),
(8, 'Cristales', 2);

-- --------------------------------------------------------

--
-- Table structure for table `Creyente`
--

CREATE TABLE `Creyente` (
  `ididentificacion` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nombres` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `NroCelular` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  `dirección` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `IdBarrio` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `Creyente`
--

INSERT INTO `Creyente` (`ididentificacion`, `nombres`, `email`, `NroCelular`, `dirección`, `IdBarrio`) VALUES
('1216724188', 'Ronald Cardenas', 'rc@correo.si', '3132456421', 'casa 12-g villa laura', 3);

-- --------------------------------------------------------

--
-- Table structure for table `Departamento`
--

CREATE TABLE `Departamento` (
  `idDepartamento` int NOT NULL,
  `nombreDepartamento` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `Departamento`
--

INSERT INTO `Departamento` (`idDepartamento`, `nombreDepartamento`) VALUES
(1, 'Santander');

-- --------------------------------------------------------

--
-- Table structure for table `Municipio`
--

CREATE TABLE `Municipio` (
  `idMunicipio` int NOT NULL,
  `NombreMunicipio` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `idDepartamento` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `Municipio`
--

INSERT INTO `Municipio` (`idMunicipio`, `NombreMunicipio`, `idDepartamento`) VALUES
(1, 'Bucaramanga', 1),
(2, 'piedecuesta', 1),
(3, 'Giron', 1),
(4, 'Floridablanca', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Barrio`
--
ALTER TABLE `Barrio`
  ADD PRIMARY KEY (`idBarrio`),
  ADD KEY `idComuna` (`idComuna`);

--
-- Indexes for table `Comuna`
--
ALTER TABLE `Comuna`
  ADD PRIMARY KEY (`idComuna`),
  ADD KEY `idMunicipio` (`idMunicipio`);

--
-- Indexes for table `Creyente`
--
ALTER TABLE `Creyente`
  ADD PRIMARY KEY (`ididentificacion`),
  ADD KEY `IdBarrio` (`IdBarrio`);

--
-- Indexes for table `Departamento`
--
ALTER TABLE `Departamento`
  ADD PRIMARY KEY (`idDepartamento`);

--
-- Indexes for table `Municipio`
--
ALTER TABLE `Municipio`
  ADD PRIMARY KEY (`idMunicipio`),
  ADD KEY `idDepartamento` (`idDepartamento`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Barrio`
--
ALTER TABLE `Barrio`
  MODIFY `idBarrio` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Comuna`
--
ALTER TABLE `Comuna`
  MODIFY `idComuna` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Departamento`
--
ALTER TABLE `Departamento`
  MODIFY `idDepartamento` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Municipio`
--
ALTER TABLE `Municipio`
  MODIFY `idMunicipio` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Barrio`
--
ALTER TABLE `Barrio`
  ADD CONSTRAINT `Barrio_ibfk_1` FOREIGN KEY (`idComuna`) REFERENCES `Comuna` (`idComuna`);

--
-- Constraints for table `Comuna`
--
ALTER TABLE `Comuna`
  ADD CONSTRAINT `Comuna_ibfk_1` FOREIGN KEY (`idMunicipio`) REFERENCES `Municipio` (`idMunicipio`);

--
-- Constraints for table `Creyente`
--
ALTER TABLE `Creyente`
  ADD CONSTRAINT `Creyente_ibfk_1` FOREIGN KEY (`IdBarrio`) REFERENCES `Barrio` (`idBarrio`);

--
-- Constraints for table `Municipio`
--
ALTER TABLE `Municipio`
  ADD CONSTRAINT `Municipio_ibfk_1` FOREIGN KEY (`idDepartamento`) REFERENCES `Departamento` (`idDepartamento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
