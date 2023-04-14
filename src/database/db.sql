CREATE DATABASE usuariosfotodb;

USE usuariosfotodb;

CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    telefono INT,
    correo VARCHAR(255),
    lugar_compra VARCHAR(500),
    foto LONGBLOB,
    creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE TABLE usuarios;
