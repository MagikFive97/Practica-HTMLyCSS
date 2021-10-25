<?php
require_once 'conexion.php';

class AccesoPDO extends Conexion
{
    public function __construct2()
    {
        parent::__construct();
    }

    public function get_id($datos)
    {
        $sql = "select * from alumno where id=$datos";
        $sentencia = $this->conexion_db->prepare($sql);
        $sentencia->execute();
        $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        $sentencia->closeCursor();
        $this->conexion_db = null;
        return $resultado;
    }

    public function get_all()
    {
        $sql = "select * from alumno";
        $sentencia = $this->conexion_db->prepare($sql);
        $sentencia->execute();
        $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        $sentencia->closeCursor();
        $this->conexion_db = null;
        return $resultado;
    }

    public function eliminarPor_id($datos)
    {
        $sql = "delete from alumno where id=$datos";
        $sentencia = $this->conexion_db->prepare($sql);
        $sentencia->execute();
        $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        $sentencia->closeCursor();
        $this->conexion_db = null;
        return $resultado;
    }

    public function crear_usuario($nombre, $apellidos, $contrasenia, $telefono, $email, $sexo, $fecha)
    {
        $sql = "insert into alumno (nombre, apellidos, password, telefono, email, sexo , fecha_nacimiento)
        VALUES (? ,? ,? ,? ,? ,? ,?)";
        $sentencia = $this->conexion_db->prepare($sql);
        $sentencia->execute([$nombre, $apellidos, $contrasenia, $telefono, $email, $sexo, $fecha]);
        $resultado = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        $sentencia->closeCursor();
        $this->conexion_db = null;
        return $resultado;
    }

}