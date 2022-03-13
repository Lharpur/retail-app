-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 13, 2022 at 05:27 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `retailapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `format` varchar(255) NOT NULL,
  `cat` varchar(255) NOT NULL,
  `label` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `releaseDate` int(255) NOT NULL,
  `quantity` int(255) NOT NULL,
  `copies_sold` int(255) DEFAULT NULL,
  `album_id` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `logdb`
--

CREATE TABLE `logdb` (
  `ip_address` varchar(255) NOT NULL,
  `referer` varchar(255) NOT NULL,
  `url_referer` varchar(255) NOT NULL,
  `method_type` varchar(255) NOT NULL,
  `log_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `logdb`
--

INSERT INTO `logdb` (`ip_address`, `referer`, `url_referer`, `method_type`, `log_created`) VALUES
('127.0.0.1', 'http://localhost:3000/', '/retail-app/server/ws.php', 'POST', '2022-03-13 05:26:18'),
('127.0.0.1', 'http://localhost:3000/', '/retail-app/server/ws.php', 'POST', '2022-03-13 05:26:56');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(255) UNSIGNED NOT NULL,
  `userId` int(255) NOT NULL,
  `album_id` int(255) NOT NULL,
  `cost` int(255) NOT NULL,
  `dateOrdered` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `userdb`
--

CREATE TABLE `userdb` (
  `userId` int(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userdb`
--

INSERT INTO `userdb` (`userId`, `fname`, `lname`, `password`, `email`) VALUES
(14, 'Test', 'User', '$2y$10$RbKITjwhu.dotCkCRgUUouIkY1dd1CGvk1oZ9A5sK19vvcB0OlSPu', 'test@email.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`album_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `album_id` (`album_id`);

--
-- Indexes for table `userdb`
--
ALTER TABLE `userdb`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `album_id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userdb`
--
ALTER TABLE `userdb`
  MODIFY `userId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `userdb` (`userId`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`album_id`) REFERENCES `albums` (`album_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
