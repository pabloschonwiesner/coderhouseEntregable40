delimiter $$

CREATE DATABASE `productos` /*!40100 DEFAULT CHARACTER SET utf8mb4 */$$



CREATE TABLE `productos` (
  `id_producto` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `price` float(8,2) DEFAULT NULL,
  `thumbnail` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4$$

