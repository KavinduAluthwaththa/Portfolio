<?php
$receiving_email_address = 'kavindu18602@gmail.com';
$from_name = 'Kavindu Aluthwaththa Portfolio';

// Function to clean input data
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Initialize error array
    $errors = array();
    
    // Get and clean form data
    $name = isset($_POST["name"]) ? clean_input($_POST["name"]) : '';
    $email = isset($_POST["email"]) ? clean_input($_POST["email"]) : '';
    $subject = isset($_POST["subject"]) ? clean_input($_POST["subject"]) : '';
    $message = isset($_POST["message"]) ? clean_input($_POST["message"]) : '';
    
    // Validate form data
    if (empty($name)) {
        $errors[] = "Name is required.";
    }
    
    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }
    
    if (empty($subject)) {
        $errors[] = "Subject is required.";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required.";
    }
    
    // If there are errors, return them
    if (!empty($errors)) {
        http_response_code(400);
        echo implode("<br>", $errors);
        exit;
    }
    
    // Prepare email content
    $email_subject = "Portfolio Contact: $subject";
    
    // HTML email body
    $email_body = "
    <html>
    <head>
        <title>New Contact Form Message</title>
    </head>
    <body>
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Subject:</strong> $subject</p>
        <h3>Message:</h3>
        <p>" . nl2br($message) . "</p>
        <hr>
        <p><small>This message was sent from your portfolio contact form.</small></p>
    </body>
    </html>
    ";
    
    // Email headers for HTML
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $from_name <$from_email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($receiving_email_address, $email_subject, $email_body, $headers)) {
        http_response_code(200);
        echo "Thank you, $name! Your message has been sent successfully.";
    } else {
        http_response_code(500);
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
    
} else {
    http_response_code(405);
    echo "Method not allowed.";
}
?>