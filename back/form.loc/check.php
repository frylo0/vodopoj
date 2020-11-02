<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$login = $_POST['login'];
$pass = $_POST['pass'];

$login_len = mb_strlen($login);
$name_len = mb_strlen($name);
$email_len = mb_strlen($email);
$pass_len = mb_strlen($pass);

if($login_len < 2 || $login_len > 50)
{
    echo "Недопустимая длина логина. От 2 до 50 символов";
    exit();
} else if($name_len < 2 || $name_len > 100)
{
    echo "Недопустимая длина имени. От 2 до 100 символов";
    exit();
} else if($email_len < 2 || $email_len > 60)
{
    echo "Недопустимая длина номера e-mail. От 2 до 60 символов";
    exit();
} else if($pass_len < 2 || $pass_len > 50)
{
    echo "Недопустимая длина пароля. От 2 до 50 символов";
    exit();
}

$pass = md5($pass."anenght2ei4");

require './db_info/lucifer.php';
//require './db_info/frity.php';
$mysql = new mysqli($db_host, $db_user, $db_pass, $db_db);

$log = $mysql->query("SELECT * FROM `vpj_people` WHERE `people_login` = '$login'");
$telephone = $mysql->query("SELECT * FROM `vpj_people` WHERE  `people_phone` = '$tel'");
$em = $mysql->query("SELECT * FROM `vpj_people` WHERE `people_email` = '$email'");
$use1 = $log->fetch_assoc();
$use2 = $telephone->fetch_assoc();
$use3 = $em->fetch_assoc();

if(count($use1) > 0)
{
    echo "Такой логин уже есть";
    exit();
}
if(count($use2) > 0)
{
    echo "Такой номер телефона уже используется";
    exit();
}
if(count($use3) > 0)
{
    echo "Такой email уже используется";
    exit();
}

$mysql->query("INSERT INTO `vpj_people` (`people_name`, `people_login`, `people_password`, `people_phone`, `people_email`) VALUES('$name','$login','$pass', '$tel', '$email')");

$mysql->close();
header('Location: ./');
?>
