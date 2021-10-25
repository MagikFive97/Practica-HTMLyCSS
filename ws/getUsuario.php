<?php
require_once 'accesoPDO.php';
$alumno = new AccesoPDO();
$id = $_GET['id'] ?? null;

if ($id) {
    $array_alumno = $alumno->get_id($id);
    var_dump($array_alumno);
} else {
    $array_alumnos = $alumno->get_all();
    var_dump($array_alumnos);
    return;
}




