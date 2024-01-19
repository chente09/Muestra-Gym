<?php
    include 'conexion.php';

    $nombres = $_POST['nombres'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $tipoPlan = $_POST['tipo_plan'];

    $consulta = "INSERT into registro(nombres, correo, telefono, tipo_plan) values ('$nombres', '$correo', '$telefono', '$tipoPlan')";

    $resultado = mysqli_query($conexion, $consulta);

    if ($resultado) {
    echo "Registro exitoso";
    } else {
    echo "Error de registro: " . mysqli_error($conexion);
    }



?>