<?php
header('Content-Type: application/json');
require('class.mailer.php');

$name = trim($_POST['name']);
$email = trim($_POST['email']);
$subject = trim($_POST['subject']);
$message = trim($_POST['message']);

try {

    if(empty($name)) {
        throw new Exception('invalid-name');
    }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('invalid-email');
    }

    if(empty($subject)) {
        throw new Exception('invalid-subject');
    }

    if(empty($message)) {
        throw new Exception('invalid-message');
    }

    $mail = new MyPHPMailer(true);
    $mail->addAddress('info@b-soul.cz');
    $mail->addReplyTo($email, $name);
    $mail->addCC($email, $name);
    $mail->setSubject($subject);
    $htmlmsg = nl2br($message);
    $body =
<<<HTML
    Byla vytvořena zpráva z webu b-soul.cz<br/>
    od <b>$name</b> (email: $email)<br/><br/>
    Text zprávy:<br/><b>$htmlmsg</b>
HTML;

    $mail->setBody($body);
    $mail->send();
    $data = array('success' => true);

} catch (Exception $e) {
    $data = array('error' => $e->getMessage());
}

echo json_encode($data);
?>
