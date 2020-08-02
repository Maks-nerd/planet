<?php



$reminders = isset($_POST["reminders"]) 	? '<br><b>Напоминания:</b> '.$_POST["reminders"] : null;
$phone = isset($_POST["phone"]) ? '<br><b>Телефон:</b> '.$_POST["phone"] : null;
$email = isset($_POST["email"]) ? '<br><b>Почта:</b> '.$_POST["email"] : null;

if ($phone) $adminemail = "artur@planetatalantov.ru";
else $adminemail = "kristina@planetatalantov.ru";

$subject_mail = "Интернет-конкурс";


if ($phone or $email) {
	
	if ($reminders)
		$content .= $reminders;
	if ($phone)
		$content .= $phone;
		if ($email)
		$content .= $email;
	
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	if (mail($adminemail, $subject_mail, $content, $headers))
		echo 'Спасибо за заявку!';
	else
		echo 'Ошибка';
} else echo 'Form not require';

?>