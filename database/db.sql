CREATE DATEBASE database_links;

USE database_links;

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
);

CREATE TABLE materiales(
    Id INT(11) IDENTITY(1,1) PRIMARY KEY,
    nombre_producto VARCHAR(16) NOT NULL,
    color VARCHAR(60) NOT NULL,
    costo (100) NOT NULL,
    inventario INT(4)
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

DESCRIBE users;
