<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$login = $_POST['login'];
$pass = $_POST['pass'];
if(mb_strlen($login) < 2 || mb_strlen($login) > 50)
{
    echo "Недопустимая длина логина";
    exit();
} else if(mb_strlen($name) < 2 || mb_strlen($name) > 100)
{
    echo "Недопустимая длина имени";
    exit();
} else if(mb_strlen($email) < 2 || mb_strlen($email) > 60)
{
    echo "Недопустимая длина номера e-mail";
    exit();
} else if(mb_strlen($pass) < 2 || mb_strlen($pass) > 50)
{
    echo "Недопустимая длина пароля. От 2 до 6 символов";
    exit();
}

$pass = md5($pass."anenght2ei4");

require './db_info/lucifer.php';
//require './db_info/frity.php';
$mysql = new mysqli($db_host, $db_user, $db_pass, $db_db);
$mysql->query("INSERT INTO `vpj_people` (`people_name`, `people_login`, `people_password`, `people_phone`, `people_email`) VALUES('$name','$login','$pass', '$tel', '$email')");

$mysql->close();
header('Location: ./');
?>
