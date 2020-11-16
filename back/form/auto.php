<?php
$login = $_POST['login'];
$pass = $_POST['pass'];

$pass = md5($pass."anenght2ei4");

require './db_info/lucifer.php';
//require './db_info/frity.php';
$mysql = new mysqli($db_host, $db_user, $db_pass, $db_db);

$account_result = $mysql->query("SELECT * FROM `vpj_people` WHERE `people_login` = '$login' AND  `people_password` = '$pass'");
$account = $account_result->fetch_assoc();
$account_exist = count($account) > 0;

if (!$account_exist)
{
    echo "Неверный логин или пароль";
    exit();
}

setcookie('account', $account['people_id'], time() + 3600 * 24 * 30, "/");
$mysql->close();
?>