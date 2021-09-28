<?php

require('../php/models/user.php');

$nombre = $_POST ['nombre'];
$apellidos = $_POST ['apellidos'];
$email = $_POST ['email'];
$contrasenia = $_POST ['contraseña'];
$telefono = $_POST ['telefono'];
$sexo = $_POST ['sexo'];

$usuario = new User($nombre, $apellidos, $email, $contrasenia, $telefono, $sexo);
$cadenas = $usuario->itojson();
echo $cadenas;

$file = fopen('objetos.txt', 'a');

fwrite($file, $cadenas . PHP_EOL);

fclose($file);




