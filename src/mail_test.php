<?php
$to = "test@example.com";
$subject = "Mail Test";
$message = "This is a test email sent from PHP.";
$headers = "From: sender@example.com\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo "Mail sent successfully!";
} else {
    echo "Failed to send mail.";
}
