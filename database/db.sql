CREATE DATABASE `nodeAPI`;

USE `nodeAPI`;

CREATE TABLE `tbl_users`
(
    id int primary key auto_increment,
    username varchar(255) not null,
    email varchar(255) not null,
    password varchar(500) not null
);