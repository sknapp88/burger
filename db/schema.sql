CREATE DATABASE `burgers_db`;

USE `burgers_db`;

CREATE TABLE 'burgers' (
	`id` INT AUTO_INCREMENTING,
	`burger_name` VARCHAR(50) NOT NULL,
	`devoured` BOOLEAN default false,
	`date` TIMESTAMP,
	PRIMARY KEY (`id`)
);
