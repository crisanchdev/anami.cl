<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

print_r($_POST);

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'mailhog';
    $mail->SMTPAuth = false;
    $mail->Port = 1025;

    $mail->setFrom('from@example.com', 'Test');
    $mail->addAddress('anami.empresa@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'Test Email ' . rand(1, 1000);;
    $mail->Body    = '<p>Datos recibidos</p> <hr>
    ' . $_POST['name'] . '<br>
    ' . $_POST['email'] . '<br>
    ' . $_POST['message'];
    $mail->send();
    echo 'Mail sent successfully!';
} catch (Exception $e) {
    echo "Failed to send mail. Error: {$mail->ErrorInfo}";
}
