<?php

$conexion = new mysqli(
"localhost",
"root",
"",
"animeworld"
);

if($conexion->connect_error){

die("Error de conexión");

}

$nombre=$_POST["nombre"];
$anime=$_POST["anime"];
$personaje=$_POST["personaje"];
$comentario=$_POST["comentario"];

$sql="INSERT INTO comentarios
(nombre,anime,personaje,comentario)

VALUES
(?,?,?,?)";

$stmt=$conexion->prepare($sql);

$stmt->bind_param(
"ssss",
$nombre,
$anime,
$personaje,
$comentario
);

if($stmt->execute()){

echo "✅ Comentario guardado correctamente";

}else{

echo "❌ Error al guardar";

}

$stmt->close();

$conexion->close();

?>