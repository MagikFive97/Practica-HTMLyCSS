<?php
require_once 'accesoPDO.php';
$alumno = new AccesoPDO();
$nombre = $_POST ['nombre'] ?? '';
$apellidos = $_POST ['apellidos'] ?? '';
$email = $_POST ['email'] ?? '';
$contrasenia = $_POST ['contrasenia'] ?? '';
$telefono = $_POST ['telefono'] ?? '';
$sexo = $_POST ['sexo'] ?? '';

$alumno->crear_usuario($nombre, $apellidos, $contrasenia, $telefono, $email, $sexo, 12 / 10 / 2021);
