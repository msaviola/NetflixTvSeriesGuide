### Schema

CREATE DATABASE netflix;
USE netflix;

CREATE TABLE shows
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	genre varchar(255) NOT NULL,
    seasons INT NOT NULL,
    mood varchar(255) NOT NULL,
    completed BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);