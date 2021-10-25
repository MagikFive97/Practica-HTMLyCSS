<?php
require_once 'accesoPDO.php';
$alumno = new AccesoPDO();
$id = $_GET['id'] ?? null;

if ($id) {
    $alumno->eliminarPor_id($id);
}
