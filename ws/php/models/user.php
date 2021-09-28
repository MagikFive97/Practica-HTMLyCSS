<?php
interface iToJson
{

    public function itojson();

}
class User implements iToJson
{

    public $apellido;
    public $email;
    public $contrasenia;
    public $telefono;
    public $sexo;
    public $nombre;

    public function __construct($nombres, $apellidos, $emails, $contrasenias, $telefonos, $sexos)
    {

        $this->nombre = $nombres;
        $this->apellido = $apellidos;
        $this->email = $emails;
        $this->contrasenia = $contrasenias;
        $this->telefono = $telefonos;
        $this->sexo = $sexos;

    }

    /**
     * @return mixed
     */
    public function getApellido()
    {
        return $this->apellido;
    }

    /**
     * @param mixed $apellido
     */
    public function setApellido($apellido)
    {
        $this->apellido = $apellido;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getContrasenia()
    {
        return $this->contrasenia;
    }

    /**
     * @param mixed $contrasenia
     */
    public function setContrasenia($contrasenia)
    {
        $this->contrasenia = $contrasenia;
    }


    /**
     * @return mixed
     */
    public function getTelefono()
    {
        return $this->telefono;
    }

    /**
     * @param mixed $telefono
     */
    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;
    }

    /**
     * @return mixed
     */
    public function getSexo()
    {
        return $this->sexo;
    }

    /**
     * @param mixed $sexo
     */
    public function setSexo($sexo)
    {
        $this->sexo = $sexo;
    }

    /**
     * @return mixed
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * @param mixed $nombre
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function itojson()
    {

        $cadena = '{ ' . PHP_EOL .'" nombre ":"' . $this->getNombre() .  '" ,' . PHP_EOL . '" apellido ":"' . $this->getApellido() . '" ,' . PHP_EOL . '" email ":"' . $this->getEmail() . '" ,' . PHP_EOL . '" sexo ":"' . $this->getSexo() . '" ,' . PHP_EOL . '" telefono ":"' . $this->getTelefono() . '" ,' . PHP_EOL . '" contrasenia ":"' . $this->getContrasenia() . '"' . PHP_EOL . ' } , ';
        return $cadena;
    }

}