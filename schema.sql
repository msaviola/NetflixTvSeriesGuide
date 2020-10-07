### Schema

CREATE DATABASE netflix;
USE netflix;

CREATE TABLE shows
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	genre varchar(255) NOT NULL,
    duration INT NOT NULL,
    mood varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

