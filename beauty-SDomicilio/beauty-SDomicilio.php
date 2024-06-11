<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "g.a.gramirez007@gmail.com"; // Replace with the email address you want to send to
    $subject = "New Service Request";
    $email = $_POST['email'];
    $name = $_POST['name'];
    $whatsapp = $_POST['whatsapp'];
    $date = $_POST['date'];
    $address = $_POST['address'];
    $services = $_POST['services'];
    $time = $_POST['time'];
    $notes = $_POST['notes'];

    $message = "
    Email: $email\n
    NOMBRE Y APELLIDO: $name\n
    NUMERO DE WHATSAPP: $whatsapp\n
    FECHA DEL EVENTO: $date\n
    DIRECCIÓN: $address\n
    CANTIDAD DE SERVICOS: $services\n
    HORA: $time\n
    ALGO MÁS: $notes
    ";

    $headers = "From: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
