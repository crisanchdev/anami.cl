<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recoge los datos enviados por el formulario
    $data = $_POST; // Se esperan campos: name, email, message

    // URL del webhook de Make (reemplaza con tu URL real)
    $webhookUrl = 'https://hook.us2.make.com/xc3ch214gu399yqmjxvypneejrmqkwpf';

    // Inicializa cURL para enviar los datos al webhook de Make
    $ch = curl_init($webhookUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Ejecuta la petición y captura la respuesta (opcional)
    $response = curl_exec($ch);
    curl_close($ch);

    // Envía una respuesta al navegador para confirmar el envío
    echo "¡Mensaje enviado con éxito!";
} else {
    // Si no se recibe un POST, se muestra un mensaje de error
    echo "Método no permitido";
}
