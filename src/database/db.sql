CREATE DATABASE usuariosfotodb;

USE usuariosfotodb;

CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    telefono VARCHAR(100),
    correo VARCHAR(255),
    lugar_compra VARCHAR(500),
    foto VARCHAR(500),
    creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE TABLE usuarios;
