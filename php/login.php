<?php

session_start();

header("Content-Type: application/json");

require_once("conexion.php");

if($_SERVER["REQUEST_METHOD"]!="POST"){

    echo json_encode([
        "status"=>false,
        "mensaje"=>"Método no permitido."
    ]);

    exit;

}

$correo=trim($_POST["correo"]);

$password=trim($_POST["password"]);

if(empty($correo) || empty($password)){

    echo json_encode([
        "status"=>false,
        "mensaje"=>"Todos los campos son obligatorios."
    ]);

    exit;

}

$sql="SELECT * FROM usuarios
WHERE correo=? LIMIT 1";

$stmt=$conexion->prepare($sql);

$stmt->bind_param("s",$correo);

$stmt->execute();

$resultado=$stmt->get_result();

if($resultado->num_rows==0){

    echo json_encode([
        "status"=>false,
        "mensaje"=>"Correo o contraseña incorrectos."
    ]);

    exit;

}

$usuario=$resultado->fetch_assoc();

if(!password_verify($password,$usuario["password"])){

    echo json_encode([
        "status"=>false,
        "mensaje"=>"Correo o contraseña incorrectos."
    ]);

    exit;

}

if($usuario["estado"]!="ACTIVO"){

    echo json_encode([
        "status"=>false,
        "mensaje"=>"La cuenta se encuentra deshabilitada."
    ]);

    exit;

}

$_SESSION["id_usuario"]=$usuario["id"];

$_SESSION["nombre"]=$usuario["nombre"];

$_SESSION["correo"]=$usuario["correo"];

$_SESSION["rol"]=$usuario["rol"];

echo json_encode([

    "status"=>true,

    "mensaje"=>"Bienvenido",

    "redirect"=>"index.html"

]);