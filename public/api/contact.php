<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    // --- CONFIGURATION ---
    $recipient = "sart.william@gmail.com";
    // ---------------------

    $email_subject = "Nouveau contact : $subject";
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>\r\n";
    $email_headers .= "Reply-To: $email";

    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        header("Location: /merci");
        exit;
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
} else {
    header("Location: /contact");
    exit;
}
?>