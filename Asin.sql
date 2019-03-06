-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: Asin
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.18.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `leaves`
--

DROP TABLE IF EXISTS `leaves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leaves` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `layouts` longtext NOT NULL,
  `contents` longtext NOT NULL,
  `title` varchar(250) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaves`
--

LOCK TABLES `leaves` WRITE;
/*!40000 ALTER TABLE `leaves` DISABLE KEYS */;
INSERT INTO `leaves` VALUES (2,'{\"lg\":[],\"md\":[],\"sm\":[],\"xs\":[],\"xxs\":[]}','[{\"fr\":\"<p>Merci de r&eacute;diger un contenu.</p>\"}]','{\"fr\":\"<p>Page 2</p>\"}','2019-02-21 16:37:17'),(3,'{\"lg\":[{\"w\":2,\"h\":74,\"x\":2,\"y\":0,\"i\":\"0\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":70,\"x\":0,\"y\":0,\"i\":\"1\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":4,\"y\":0,\"i\":\"2\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":58,\"x\":6,\"y\":0,\"i\":\"3\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":8,\"y\":0,\"i\":\"4\",\"moved\":false,\"static\":false}],\"md\":[{\"w\":2,\"h\":72,\"x\":0,\"y\":0,\"i\":\"0\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":70,\"x\":2,\"y\":0,\"i\":\"1\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":106,\"x\":8,\"y\":0,\"i\":\"2\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":60,\"x\":6,\"y\":0,\"i\":\"3\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":20,\"x\":7,\"y\":106,\"i\":\"4\",\"moved\":false,\"static\":false}],\"sm\":[{\"w\":2,\"h\":50,\"x\":2,\"y\":0,\"i\":\"0\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":50,\"x\":4,\"y\":0,\"i\":\"1\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":74,\"x\":4,\"y\":50,\"i\":\"2\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":42,\"x\":0,\"y\":0,\"i\":\"3\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":2,\"y\":50,\"i\":\"4\",\"moved\":false,\"static\":false}],\"xs\":[{\"w\":2,\"h\":46,\"x\":2,\"y\":0,\"i\":\"0\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":46,\"x\":0,\"y\":92,\"i\":\"1\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":64,\"x\":0,\"y\":2,\"i\":\"2\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":40,\"x\":2,\"y\":64,\"i\":\"3\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":0,\"y\":66,\"i\":\"4\",\"moved\":false,\"static\":false}],\"xxs\":[{\"w\":2,\"h\":28,\"x\":0,\"y\":50,\"i\":\"0\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":0,\"y\":78,\"i\":\"1\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":0,\"y\":0,\"i\":\"2\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":0,\"y\":0,\"i\":\"3\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":0,\"y\":0,\"i\":\"4\",\"moved\":false,\"static\":false}]}','[{\"fr\":\"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipg ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa q// // // // // // // // // // // // // // // // // // // ui officia deserunt mollit anim id est laborum.cupidatat non proident, sunt in culpa q// // // // // // // // // // // // // // // // // // // ui officia deserunt mollit anim id est laborum.</p>\"},{\"fr\":\"<p>Lorem ipsum dolor sit amet, conffffffffffffffffffffffffsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore madddddddddddddddddddddddddddddddddddddddddgna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Merci de r&eacute;digsssssssssssssssssssssssssssssssssssser un contenu.Merci de r&eacute;diger un contenu.</p>\"},{\"fr\":\"<p>contenu.MMerci de r&eacute;diger un contenu.Merci de r&eacute;ffffffffffffdfiger un contenu.Merci de r&eacute;diger usssssssssscontenu.MMerci de r&eacute;diger un contenu.Merci de r&eacute;ffffffffffffdfiger un contenu.Merci de r&eacute;diger ussssssssssssssn contenu.Merci de r&eacute;diger un contenu.MerMerci de r&eacute;diger un contenu.ssssn contenu.Mde r&eacute;diger un contenu.erci de r&eacute;diger un contessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssnu.Merci de r&eacute;diger un contenude r&eacute;diger un contenu.erci de r&eacute;diger un ffffffffffffffffffffffffcontessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssnu.Merci de r&eacute;ssssssssssssssssssssssssfffffffffffsssssssssssdigerffffffqqqqqqqqqqqqqqqqqqqqqqqqqqffffffffffffffffffffffff un qqqqqqqqqqqqqqqddddddddddddddddddddddddddddddqggggggggggggggggggqqqqqqqqcontenu..erci de r&eacute;diger un contenu.Mer</p>\"},{\"fr\":\"<p>Merci de r&eacute;diger un contenu.MMerci de r&eacute;diger un contenu.Merci de r&eacute;ffffffffffffdfiger un contenudddd.Merci de r&eacute;diger usssssssssaaaaaaaaaaaaaaaaaaasssddddddddddddddddddddddsssnf contenu.Merci de r&eacute;diger un contenu.Merci de r&eacute;diger un contenu.Merci de r&eacute;dide r&eacute;diger un contenu.erci de r&eacute;diger un contessssssssssssssssssssssssssssssssssssssssssssssde r&eacute;diger un contenu.erci de r&eacute;diger un contessssssssssssssssffffffffffffffffffffgggggggggggggggggggggggggggggggggg</p>\"}]','{\"fr\":\"<p>Merci de donner un titre &agrave; cette page pour mettre &agrave; jour la navigation.</p>\"}','2019-02-28 15:32:52'),(4,'{\"lg\":[{\"w\":2,\"h\":28,\"x\":0,\"y\":0,\"i\":\"0\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":2,\"y\":0,\"i\":\"1\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":4,\"y\":0,\"i\":\"2\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":6,\"y\":0,\"i\":\"3\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":8,\"y\":0,\"i\":\"4\",\"moved\":false,\"static\":false}],\"md\":[{\"w\":2,\"h\":28,\"x\":0,\"y\":0,\"i\":\"0\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":2,\"y\":0,\"i\":\"1\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":4,\"y\":0,\"i\":\"2\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":6,\"y\":0,\"i\":\"3\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":8,\"y\":0,\"i\":\"4\",\"moved\":false,\"static\":false}],\"sm\":[{\"w\":2,\"h\":28,\"x\":0,\"y\":0,\"i\":\"0\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":2,\"y\":0,\"i\":\"1\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":60,\"x\":4,\"y\":0,\"i\":\"2\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":4,\"y\":60,\"i\":\"3\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":0,\"y\":28,\"i\":\"4\",\"moved\":false,\"static\":false}],\"xs\":[{\"w\":2,\"h\":20,\"x\":0,\"y\":0,\"i\":\"0\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":20,\"x\":2,\"y\":0,\"i\":\"1\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":62,\"x\":0,\"y\":28,\"i\":\"2\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":20,\"x\":2,\"y\":28,\"i\":\"3\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":20,\"x\":0,\"y\":56,\"i\":\"4\",\"moved\":false,\"static\":false}],\"xxs\":[{\"w\":2,\"h\":28,\"x\":0,\"y\":0,\"i\":\"0\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":0,\"y\":0,\"i\":\"1\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":0,\"y\":0,\"i\":\"2\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":0,\"y\":0,\"i\":\"3\",\"moved\":false,\"static\":false},{\"w\":2,\"h\":28,\"x\":0,\"y\":0,\"i\":\"4\",\"moved\":false,\"static\":false}]}','[null,null,{\"fr\":\"<p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et emp&ecirc;che de se concentrer sur la mise en page elle-m&ecirc;me. L\'avantage du Lorem Ipsum sur un texte g&eacute;n&eacute;rique comme \'Du texte. Du texte. Du texte.\' est qu\'il poss&egrave;de une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du fran&ccedil;ais standard. De nombreuses suites logicielles de mise en page ou &eacute;diteurs de sites Web ont fait du Lorem Ipsum leur faux texte par d&eacute;faut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'&agrave; leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellementMerci de r&eacute;diger un contenu.</p>\"}]','{\"fr\":\"<p>compagnies en accompagnement</p>\"}','2019-03-05 08:31:03');
/*!40000 ALTER TABLE `leaves` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `styles`
--

DROP TABLE IF EXISTS `styles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `styles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `element` varchar(250) NOT NULL,
  `styles` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `styles`
--

LOCK TABLES `styles` WRITE;
/*!40000 ALTER TABLE `styles` DISABLE KEYS */;
INSERT INTO `styles` VALUES (1,'Home','{\"background\":\"rgba(192,191,201,0.07)\"}');
/*!40000 ALTER TABLE `styles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `first_name` varchar(250) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `available` tinyint(1) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'bfdlmdr@gmail.com','03e31a','','',1,1,'2018-11-27 17:47:53'),(3,'test.vue.messenger@gmail.com','03e31a','B','b',NULL,NULL,'2018-11-27 17:47:53'),(4,'mathieu.adamski@gmail.com','15e4071970bfd8cf14ee1c','Adamski','Mathieu',NULL,1,'2018-11-27 17:47:53'),(5,'petit.margaux@outlook.fr','25e2191f76b59a8e','Petit','Margaux',1,1,'2019-02-28 13:57:39'),(6,'frogermathilde@gmail.com','25e2191f76b59a8e','Froger','Mathilde',1,1,'2019-02-28 13:58:26');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-06  3:14:27
