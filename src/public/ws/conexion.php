<?php
require_once 'config.php';

class Conexion
{
    protected $conexion_db;

    public function __construct()
    {
        try {
            $this->conexion_db = new PDO('mysql:host=localhost; dbname=colegio', 'root', '');
            $this->conexion_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conexion_db->exec('SET CHARACTER SET utf8');
            echo 'CONECTADO';
        } catch (Exception $e) {
            echo "La linea de error es: " . $e->getLine();
        }
    }
}