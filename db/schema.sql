### Schema
-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS netflixdb;
-- Creates the burgers_db database --
CREATE DATABASE netflixdb;
USE netflixdb;

CREATE TABLE shows
(
	id int NOT NULL AUTO_INCREMENT,
	show_name varchar(255) NOT NULL,
	genre varchar(255) NOT NULL,
	duration int NOT NULL,
	mood varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO shows (show_name, genre,duration,mood) VALUES ("Schitt's Creek", "comedy",45, "funny");