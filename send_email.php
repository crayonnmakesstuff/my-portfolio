<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  // Set recipient email address
  $to = "ryaankhan1004@outlook.com";
  // Set email subject
  $subject = "pls make me a website :))";
  // Construct email message
  $email_message = "Name: " . $name . "\n";
  $email_message .= "Email: " . $email . "\n";
  $email_message .= "Message: " . $message . "\n";
  // Send email
  mail($to, $subject, $email_message);
}
?>
