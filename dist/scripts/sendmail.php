<?php
require('class.mailer.php');

try {
  $mail = new MyPHPMailer(true);
  $mail->addAttachment(__FILE__, 'myPHPMailer.php');
  $mail->send();
} catch (Exception $e) {
  echo $e->getMessage();
}
?>
