-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- Serveur: localhost
-- Généré le : Dim 13 Septembre 2020 à 22:05
-- Version du serveur: 5.0.51
-- Version de PHP: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- Base de données: `stock`
-- 

-- --------------------------------------------------------

-- 
-- Structure de la table `invoice`
-- 

CREATE TABLE `invoice` (
  `id` int(11) NOT NULL auto_increment,
  `giveBy` varchar(50) NOT NULL,
  `giveTo` varchar(50) NOT NULL,
  `addAtDay` varchar(50) NOT NULL,
  `addAtTime` varchar(50) NOT NULL,
  `childLin` text NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- 
-- Contenu de la table `invoice`
-- 


-- --------------------------------------------------------

-- 
-- Structure de la table `ordered`
-- 

CREATE TABLE `ordered` (
  `orderedId` int(11) NOT NULL auto_increment,
  `giveBy` varchar(50) NOT NULL,
  `giveTo` varchar(50) NOT NULL,
  `addAtDay` varchar(50) NOT NULL,
  `addAtTime` varchar(50) NOT NULL,
  `orderedChilds` text NOT NULL,
  PRIMARY KEY  (`orderedId`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=45 ;

-- 
-- Contenu de la table `ordered`
-- 

INSERT INTO `ordered` VALUES (44, 'Societé:"magasin"', 'walid', '13/9/2020', '21:48', '[{"productId":1,"productName":"la souris n01","productQty":"4"}]');

-- --------------------------------------------------------

-- 
-- Structure de la table `product`
-- 

CREATE TABLE `product` (
  `productId` int(11) NOT NULL auto_increment,
  `lastUpdate` varchar(200) NOT NULL,
  `productName` text NOT NULL,
  `productQty` int(11) NOT NULL,
  `description` text NOT NULL,
  `productAddBy` text NOT NULL,
  `addAtDay` text NOT NULL,
  `addAtTime` text NOT NULL,
  `nbrRemove` int(11) NOT NULL,
  PRIMARY KEY  (`productId`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=31 ;

-- 
-- Contenu de la table `product`
-- 

INSERT INTO `product` VALUES (1, '11/9/2020 10:57', 'la souris n01', 196, 'la souris n01', 'walid bouatouche', '09/03/2020', '22:16', -33);
INSERT INTO `product` VALUES (27, '8/9/2020 23:21', 'la souris n02', 110, 'la souris n01', '0', '8/9/2020', '23:21', 4);
INSERT INTO `product` VALUES (28, '11/9/2020 10:58', 'sdgzefzaefdf', 130, 'azeazeaze', '0', '9/9/2020', '8:59', 0);
INSERT INTO `product` VALUES (29, '11/9/2020 10:58', 'hhh', 10, 'hhhhh', '0', '11/9/2020', '10:58', -6);
INSERT INTO `product` VALUES (30, '11/9/2020 10:58', 'klkklkl', 4, 'hhhhh', '0', '11/9/2020', '10:58', 0);

-- --------------------------------------------------------

-- 
-- Structure de la table `users`
-- 

CREATE TABLE `users` (
  `userId` int(11) NOT NULL auto_increment,
  `name` varchar(200) NOT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY  (`userId`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

-- 
-- Contenu de la table `users`
-- 

INSERT INTO `users` VALUES (1, 'walid', 'user');
INSERT INTO `users` VALUES (2, 'amine', 'user');