<?php
require_once 'AccesoPDO.php';
$alumno = new AccesoPDO();
$id = $_GET['id'] ?? null;

if ($id) {
    $alumno->eliminarPor_id($id);
}
