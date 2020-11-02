<?php
$login = $_POST['login'];
$pass = $_POST['pass'];

$pass = md5($pass."anenght2ei4");

require './db_info/lucifer.php';
//require './db_info/frity.php';
$mysql = new mysqli($db_host, $db_user, $db_pass, $db_db);

$res = $mysql->query("SELECT * FROM `vpj_people` WHERE `people_login` = '$login' AND  `people_password` = '$pass'");
$user = $res->fetch_assoc();
if(count($user) == 0)
{
    echo "Неверный логин или пароль";
    exit();
}

setcookie('user', $user['name'], time() + 3600 * 24 * 30, "/");
$mysql->close();
?>