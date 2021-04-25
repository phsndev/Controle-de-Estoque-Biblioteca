-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2021 at 02:11 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `controle-biblioteca`
--

-- --------------------------------------------------------

--
-- Table structure for table `autor`
--

CREATE TABLE `autor` (
  `idautor` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `anoNasc` date NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `nacionalidade` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `editora`
--

CREATE TABLE `editora` (
  `ideditora` int(11) NOT NULL,
  `nome` varchar(90) NOT NULL,
  `cnpj` varchar(90) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `generoliterario`
--

CREATE TABLE `generoliterario` (
  `idgeneroLiterario` int(11) NOT NULL,
  `tipo` varchar(90) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `livro`
--

CREATE TABLE `livro` (
  `idlivro` int(11) NOT NULL,
  `titulo` varchar(90) NOT NULL,
  `anoLancamento` date NOT NULL,
  `autor_idautor` int(11) NOT NULL,
  `editora_ideditora` int(11) NOT NULL,
  `generoLiterario_idgeneroLiterario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`idautor`);

--
-- Indexes for table `editora`
--
ALTER TABLE `editora`
  ADD PRIMARY KEY (`ideditora`);

--
-- Indexes for table `generoliterario`
--
ALTER TABLE `generoliterario`
  ADD PRIMARY KEY (`idgeneroLiterario`);

--
-- Indexes for table `livro`
--
ALTER TABLE `livro`
  ADD PRIMARY KEY (`idlivro`),
  ADD KEY `autor_idautor` (`autor_idautor`),
  ADD KEY `editora_ideditora` (`editora_ideditora`),
  ADD KEY `generoLiterario_idgeneroLiterario` (`generoLiterario_idgeneroLiterario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `autor`
--
ALTER TABLE `autor`
  MODIFY `idautor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `editora`
--
ALTER TABLE `editora`
  MODIFY `ideditora` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `generoliterario`
--
ALTER TABLE `generoliterario`
  MODIFY `idgeneroLiterario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `livro`
--
ALTER TABLE `livro`
  MODIFY `idlivro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `livro`
--
ALTER TABLE `livro`
  ADD CONSTRAINT `autor_idautor` FOREIGN KEY (`autor_idautor`) REFERENCES `autor` (`idautor`),
  ADD CONSTRAINT `editora_ideditora` FOREIGN KEY (`editora_ideditora`) REFERENCES `editora` (`ideditora`),
  ADD CONSTRAINT `generoLiterario_idgeneroLiterario` FOREIGN KEY (`generoLiterario_idgeneroLiterario`) REFERENCES `generoliterario` (`idgeneroLiterario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
