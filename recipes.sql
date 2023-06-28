-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 28, 2023 at 04:37 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `RecSha`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `Title` varchar(255) NOT NULL,
  `ID` int(255) NOT NULL,
  `Instructions` varchar(255) DEFAULT NULL,
  `Rating` float NOT NULL,
  `Type` varchar(255) NOT NULL DEFAULT 'Chinese'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`Title`, `ID`, `Instructions`, `Rating`, `Type`) VALUES
('Pasta', 1, 'Boil water, add the required pasta type also add the required sauce and stir it.', 3.43, 'Chinese'),
('Pizza', 2, 'Prepare a base with flour and toast it with vegetables.', 4.5, 'Chinese'),
('Samosa', 3, 'Make a fine batter with basin and deep fry with potato stuff in oil', 4.5, 'Chinese'),
('Soup', 4, 'Heat water and add spices with tomato paste', 4.9, 'Chinese'),
('Sushi', 5, NULL, 4.7, 'Chinese'),
('Gulabjam', 6, NULL, 5, 'Indian'),
('Burger', 7, NULL, 4.56, 'Mexican');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
