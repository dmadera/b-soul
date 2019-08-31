<?php

header('Content-Type: application/json');

try {

    require('class.mailer.php');

    $firstname = trim($_POST['firstname']);
    $lastname = trim($_POST['lastname']);
    $birthdate = trim($_POST['birthdate']);
    $birthnum = trim($_POST['birthnum']);
    $street = trim($_POST['street']);
    $city = trim($_POST['city']);
    $zip = trim($_POST['zip']);
    $phone = trim($_POST['phone']);
    $email = trim($_POST['email']);
    $payment = trim($_POST['payment']);
    $note = trim($_POST['note']);
    $namerep = trim($_POST['namerep']);
    $phonerep = trim($_POST['phonerep']);
    $emailrep = trim($_POST['emailrep']);

    if(empty($firstname)) throw new Exception('invalid-firstname');
    if(empty($lastname)) throw new Exception('invalid-lastname');
    if(empty($birthdate)) throw new Exception('invalid-birthdate');
    if(empty($birthnum)) throw new Exception('invalid-birthnum');
    if(empty($street)) throw new Exception('invalid-street');
    if(empty($city)) throw new Exception('invalid-city');
    if(empty($zip)) throw new Exception('invalid-zip');
    if(empty($phone)) throw new Exception('invalid-phone');

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) throw new Exception('invalid-email');

    $mail = new MyPHPMailer(true);
    $mail->addAddress('info@b-soul.cz');
    $mail->addCC($email, $firstname+' '+$lastname);
    $mail->addReplyTo($email, $firstname+' '+$lastname);
    $mail->setSubject("Přihláška B-SOUL");
    $htmlmsg = nl2br($message);
    $body =
<<<HTML
    Byla vytvořena přihláška na webu b-soul.cz:<br/>
    Jméno: <b>$firstname</b><br/>
    Přijmení: <b>$lastname</b><br/>
    Datum narození: $birthdate<br/>
    Rodné číslo: $birthnum<br/>
    Adresa: $street, $zip $city<br/>
    Telefon: $phone<br/>
    Email: $email<br/>
    Způsob platby: $payment<br/>
    Poznámka: $note<br/>
    ----------------------<br/>
    Zákonný zástupce: $namerep<br/>
    Telefon na zástupce: $phonerep<br/>
    Email na zástupce: $emailrep<br/>
HTML;

    $mail->setBody($body);
    $mail->send();
    $data = array('success' => true);

} catch (Exception $e) {
    $data = array('error' => $e->getMessage());
}

echo json_encode($data);
?>
