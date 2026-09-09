<?php

session_start();

header("Content-Type: application/json; charset=UTF-8");

require_once("conexion.php");

/*==========================================
    VALIDAR MÉTODO
==========================================*/

if ($_SERVER["REQUEST_METHOD"] != "POST") {

    echo json_encode([
        "status" => false,
        "mensaje" => "Método no permitido."
    ]);

    exit;
}

/*==========================================
    OBTENER DATOS
==========================================*/

$nombre = trim($_POST["nombre"] ?? "");
$apellido = trim($_POST["apellido"] ?? "");
$correo = trim($_POST["correo"] ?? "");
$telefono = trim($_POST["telefono"] ?? "");
$password = trim($_POST["password"] ?? "");

/*==========================================
    VALIDACIONES
==========================================*/

if (
    empty($nombre) ||
    empty($apellido) ||
    empty($correo) ||
    empty($telefono) ||
    empty($password)
) {

    echo json_encode([
        "status" => false,
        "mensaje" => "Todos los campos son obligatorios."
    ]);

    exit;
}

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {

    echo json_encode([
        "status" => false,
        "mensaje" => "El correo electrónico no es válido."
    ]);

    exit;
}

if (strlen($password) < 8) {

    echo json_encode([
        "status" => false,
        "mensaje" => "La contraseña debe contener al menos 8 caracteres."
    ]);

    exit;
}

/*==========================================
    VERIFICAR CORREO
==========================================*/

$sql = "SELECT id FROM usuarios WHERE correo = ? LIMIT 1";

$stmt = $conexion->prepare($sql);

$stmt->bind_param("s", $correo);

$stmt->execute();

$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {

    echo json_encode([
        "status" => false,
        "mensaje" => "El correo electrónico ya se encuentra registrado."
    ]);

    exit;
}

$stmt->close();

/*==========================================
    CIFRAR CONTRASEÑA
==========================================*/

$passwordHash = password_hash($password, PASSWORD_DEFAULT);

/*==========================================
    DATOS POR DEFECTO
==========================================*/

$rol = "CLIENTE";

$estado = "ACTIVO";

/*==========================================
    INSERTAR USUARIO
==========================================*/

$sql = "INSERT INTO usuarios
(
    nombre,
    apellido,
    correo,
    telefono,
    password,
    rol,
    estado,
    fecha_registro
)
VALUES
(
    ?,?,?,?,?,?,?,NOW()
)";

$stmt = $conexion->prepare($sql);

$stmt->bind_param(
    "sssssss",
    $nombre,
    $apellido,
    $correo,
    $telefono,
    $passwordHash,
    $rol,
    $estado
);

if ($stmt->execute()) {

    echo json_encode([
        "status" => true,
        "mensaje" => "Cuenta creada correctamente."
    ]);

} else {

    echo json_encode([
        "status" => false,
        "mensaje" => "Ocurrió un error al registrar el usuario."
    ]);

}

$stmt->close();

$conexion->close();

?>