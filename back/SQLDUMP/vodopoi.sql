-- MySQL dump 10.17  Distrib 10.3.22-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: vodopoi
-- ------------------------------------------------------
-- Server version	10.3.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `vpj_address`
--

DROP TABLE IF EXISTS `vpj_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vpj_address` (
  `id_address` int(11) NOT NULL AUTO_INCREMENT,
  `address_coords` varchar(25) NOT NULL,
  `address_city` varchar(50) NOT NULL,
  `address_street` varchar(50) NOT NULL,
  `address_house` varchar(5) NOT NULL,
  `address_housing` varchar(5) NOT NULL,
  `address_flat` varchar(5) NOT NULL,
  PRIMARY KEY (`id_address`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vpj_address`
--

LOCK TABLES `vpj_address` WRITE;
/*!40000 ALTER TABLE `vpj_address` DISABLE KEYS */;
INSERT INTO `vpj_address` VALUES (1,'44.958963, 34.086242','Симферополь','Ростовская','00','','00');
/*!40000 ALTER TABLE `vpj_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vpj_blacklist`
--

DROP TABLE IF EXISTS `vpj_blacklist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vpj_blacklist` (
  `id_blacklist` int(11) NOT NULL AUTO_INCREMENT,
  `blacklist_id_people` int(11) NOT NULL,
  PRIMARY KEY (`id_blacklist`),
  KEY `blacklist_id_people` (`blacklist_id_people`),
  CONSTRAINT `vpj_blacklist_ibfk_1` FOREIGN KEY (`blacklist_id_people`) REFERENCES `vpj_people` (`id_people`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vpj_blacklist`
--

LOCK TABLES `vpj_blacklist` WRITE;
/*!40000 ALTER TABLE `vpj_blacklist` DISABLE KEYS */;
/*!40000 ALTER TABLE `vpj_blacklist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vpj_event`
--

DROP TABLE IF EXISTS `vpj_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vpj_event` (
  `id_event` int(11) NOT NULL AUTO_INCREMENT,
  `event_id_order` int(11) NOT NULL,
  `event_id_people` int(11) NOT NULL COMMENT 'Тот кто совершил действие',
  `event_id_eventtype` int(11) NOT NULL,
  `event_datetime` datetime NOT NULL,
  PRIMARY KEY (`id_event`),
  KEY `event_id_actor` (`event_id_people`),
  KEY `event_id_eventtype` (`event_id_eventtype`),
  KEY `event_id_order` (`event_id_order`),
  CONSTRAINT `vpj_event_ibfk_1` FOREIGN KEY (`event_id_people`) REFERENCES `vpj_people` (`id_people`),
  CONSTRAINT `vpj_event_ibfk_2` FOREIGN KEY (`event_id_order`) REFERENCES `vpj_order` (`id_order`),
  CONSTRAINT `vpj_event_ibfk_3` FOREIGN KEY (`event_id_eventtype`) REFERENCES `vpj_eventtype` (`id_eventtype`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vpj_event`
--

LOCK TABLES `vpj_event` WRITE;
/*!40000 ALTER TABLE `vpj_event` DISABLE KEYS */;
INSERT INTO `vpj_event` VALUES (1,1,1,3,'2020-10-19 07:33:10');
/*!40000 ALTER TABLE `vpj_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vpj_eventtype`
--

DROP TABLE IF EXISTS `vpj_eventtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vpj_eventtype` (
  `id_eventtype` int(11) NOT NULL AUTO_INCREMENT,
  `eventtype_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id_eventtype`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vpj_eventtype`
--

LOCK TABLES `vpj_eventtype` WRITE;
/*!40000 ALTER TABLE `vpj_eventtype` DISABLE KEYS */;
INSERT INTO `vpj_eventtype` VALUES (1,'Отклик'),(2,'Отмена отклика'),(3,'Добавление'),(4,'Удаление'),(5,'Изменение данных');
/*!40000 ALTER TABLE `vpj_eventtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vpj_feature`
--

DROP TABLE IF EXISTS `vpj_feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vpj_feature` (
  `id_feature` int(11) NOT NULL AUTO_INCREMENT,
  `feature_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id_feature`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vpj_feature`
--

LOCK TABLES `vpj_feature` WRITE;
/*!40000 ALTER TABLE `vpj_feature` DISABLE KEYS */;
INSERT INTO `vpj_feature` VALUES (1,'Видеть список пользователей');
/*!40000 ALTER TABLE `vpj_feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vpj_order`
--

DROP TABLE IF EXISTS `vpj_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vpj_order` (
  `id_order` int(11) NOT NULL AUTO_INCREMENT,
  `order_id_address` int(11) NOT NULL,
  `order_id_people` int(11) NOT NULL,
  `order_id_state` int(11) NOT NULL,
  `order_comment` text NOT NULL,
  `order_creation_time` datetime NOT NULL,
  PRIMARY KEY (`id_order`),
  KEY `order_id_people` (`order_id_people`),
  KEY `order_id_address` (`order_id_address`),
  KEY `order_id_state` (`order_id_state`),
  CONSTRAINT `vpj_order_ibfk_1` FOREIGN KEY (`order_id_people`) REFERENCES `vpj_people` (`id_people`),
  CONSTRAINT `vpj_order_ibfk_2` FOREIGN KEY (`order_id_address`) REFERENCES `vpj_address` (`id_address`),
  CONSTRAINT `vpj_order_ibfk_3` FOREIGN KEY (`order_id_state`) REFERENCES `vpj_state` (`id_state`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vpj_order`
--

LOCK TABLES `vpj_order` WRITE;
/*!40000 ALTER TABLE `vpj_order` DISABLE KEYS */;
INSERT INTO `vpj_order` VALUES (1,1,1,2,'Тестовое принесите воды','2020-10-19 07:32:37');
/*!40000 ALTER TABLE `vpj_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vpj_people`
--

DROP TABLE IF EXISTS `vpj_people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vpj_people` (
  `id_people` int(11) NOT NULL AUTO_INCREMENT,
  `people_name` varchar(100) NOT NULL,
  `people_login` varchar(50) NOT NULL,
  `people_password` varchar(50) NOT NULL,
  `people_phone` varchar(30) NOT NULL,
  `people_email` varchar(60) NOT NULL,
  PRIMARY KEY (`id_people`),
  UNIQUE KEY `people_login` (`people_login`),
  UNIQUE KEY `people_email` (`people_email`),
  UNIQUE KEY `people_phone` (`people_phone`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vpj_people`
--

LOCK TABLES `vpj_people` WRITE;
/*!40000 ALTER TABLE `vpj_people` DISABLE KEYS */;
INSERT INTO `vpj_people` VALUES (1,'Test Full Name','testlogin','testpass(must be md5)','+79780001122','test@email.com'),(7,'Федор Никонов','frity','a8af906636e1d595815d28f06cff3bc1','+79780000000','nikonovfedor36936@gmail.com');
/*!40000 ALTER TABLE `vpj_people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vpj_people_address`
--

DROP TABLE IF EXISTS `vpj_people_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vpj_people_address` (
  `id_people_address` int(11) NOT NULL AUTO_INCREMENT,
  `people_address_id_people` int(11) NOT NULL,
  `people_address_id_address` int(11) NOT NULL,
  PRIMARY KEY (`id_people_address`),
  KEY `people_address_id_people` (`people_address_id_people`),
  KEY `people_address_id_address` (`people_address_id_address`),
  CONSTRAINT `vpj_people_address_ibfk_1` FOREIGN KEY (`people_address_id_address`) REFERENCES `vpj_address` (`id_address`),
  CONSTRAINT `vpj_people_address_ibfk_2` FOREIGN KEY (`people_address_id_people`) REFERENCES `vpj_people` (`id_people`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vpj_people_address`
--

LOCK TABLES `vpj_people_address` WRITE;
/*!40000 ALTER TABLE `vpj_people_address` DISABLE KEYS */;
INSERT INTO `vpj_people_address` VALUES (1,1,1);
/*!40000 ALTER TABLE `vpj_people_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vpj_people_role`
--

DROP TABLE IF EXISTS `vpj_people_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vpj_people_role` (
  `id_people_role` int(11) NOT NULL AUTO_INCREMENT,
  `people_role_id_people` int(11) NOT NULL,
  `people_role_id_role` int(11) NOT NULL,
  PRIMARY KEY (`id_people_role`),
  KEY `people_role_id_role` (`people_role_id_role`),
  KEY `people_role_id_people` (`people_role_id_people`) USING BTREE,
  CONSTRAINT `vpj_people_role_ibfk_1` FOREIGN KEY (`people_role_id_people`) REFERENCES `vpj_people` (`id_people`),
  CONSTRAINT `vpj_people_role_ibfk_2` FOREIGN KEY (`people_role_id_role`) REFERENCES `vpj_role` (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vpj_people_role`
--

LOCK TABLES `vpj_people_role` WRITE;
/*!40000 ALTER TABLE `vpj_people_role` DISABLE KEYS */;
INSERT INTO `vpj_people_role` VALUES (1,1,3);
/*!40000 ALTER TABLE `vpj_people_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vpj_role`
--

DROP TABLE IF EXISTS `vpj_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vpj_role` (
  `id_role` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(30) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vpj_role`
--

LOCK TABLES `vpj_role` WRITE;
/*!40000 ALTER TABLE `vpj_role` DISABLE KEYS */;
INSERT INTO `vpj_role` VALUES (1,'Админ'),(2,'Клиент'),(3,'Владыка');
/*!40000 ALTER TABLE `vpj_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vpj_role_feature`
--

DROP TABLE IF EXISTS `vpj_role_feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vpj_role_feature` (
  `id_role_feature` int(11) NOT NULL AUTO_INCREMENT,
  `role_feature_id_role` int(11) NOT NULL,
  `role_feature_id_feature` int(11) NOT NULL,
  PRIMARY KEY (`id_role_feature`),
  KEY `role_feature_id_feature` (`role_feature_id_feature`),
  KEY `role_feature_id_role` (`role_feature_id_role`),
  CONSTRAINT `vpj_role_feature_ibfk_2` FOREIGN KEY (`role_feature_id_feature`) REFERENCES `vpj_feature` (`id_feature`),
  CONSTRAINT `vpj_role_feature_ibfk_3` FOREIGN KEY (`role_feature_id_role`) REFERENCES `vpj_role` (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vpj_role_feature`
--

LOCK TABLES `vpj_role_feature` WRITE;
/*!40000 ALTER TABLE `vpj_role_feature` DISABLE KEYS */;
INSERT INTO `vpj_role_feature` VALUES (1,1,1),(2,3,1);
/*!40000 ALTER TABLE `vpj_role_feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vpj_state`
--

DROP TABLE IF EXISTS `vpj_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vpj_state` (
  `id_state` int(11) NOT NULL AUTO_INCREMENT,
  `state_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id_state`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vpj_state`
--

LOCK TABLES `vpj_state` WRITE;
/*!40000 ALTER TABLE `vpj_state` DISABLE KEYS */;
INSERT INTO `vpj_state` VALUES (1,'Получен отклик'),(2,'Ожидает отклика'),(3,'Выполнено');
/*!40000 ALTER TABLE `vpj_state` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-03 22:00:24
