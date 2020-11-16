<?php

$account = htmlspecialchars($_POST['account']);

require 'C:\Users\Acer\Downloads\OpenServer\domains\vodopoj.loc\back\form\db_info\lucifer.php';
$mysql = new mysqli($db_host, $db_user, $db_pass, $db_db);

$set = $mysql->query("SELECT `people_name` FROM `vpj_people` WHERE $account = {$_COOKIE['account']} ");
$ph = $mysql->query("SELECT `people_phone` FROM `vpj_people` WHERE $account = {$_COOKIE['account']} ");
$em = $mysql->query("SELECT `people_email` FROM `vpj_people` WHERE $account = {$_COOKIE['account']} ");
$log = $mysql->query("SELECT `people_login` FROM `vpj_people` WHERE $account = {$_COOKIE['account']} ");
$mysql->close();
header('Location: ./');
?>