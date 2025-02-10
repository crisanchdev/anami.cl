<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Depuración: Verificar que los datos lleguen correctamente
if (!isset($_POST['name'], $_POST['email'], $_POST['message'])) {
    echo "Error: Todos los campos son obligatorios.";
    exit;
}
$name    = trim($_POST['name']);
$email   = trim($_POST['email']);
$message = trim($_POST['message']);

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'mailhog';
    $mail->SMTPAuth = false;
    $mail->Port = 1025;

    $mail->setFrom('no-reply@anami.cl', 'Anami SpA');
    $mail->addAddress('anami.empresa@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'Nuevo mensaje de tu sitio web Anami SpA';
    $mail->Body = "
        <h3>Datos del formulario:</h3>
        <strong>Nombre:</strong> {$name}<br>
        <strong>Email:</strong> {$email}<br>
        <strong>Mensaje:</strong> {$message}
    ";
    $mail->send();
    echo '¡Correo enviado exitosamente!';
} catch (Exception $e) {
    echo "No se pudo enviar el correo. Error: {$mail->ErrorInfo}";
}
