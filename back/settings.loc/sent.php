<?php
$set = htmlspecialchars($_POST['name']);
$ph = htmlspecialchars($_POST['tel']);
$em = htmlspecialchars($_POST['email']);
$log = htmlspecialchars($_POST['login']);
$pass = $_POST['pass'];
$mysql = new mysqli($db_host, $db_user, $db_pass, $db_db);
$mysql->query(
    "INSERT INTO `vpj_people` (
        `people_name`, 
        `people_login`, 
        `people_password`, 
        `people_phone`, 
        `people_email`
    ) VALUES (
        '$set',
        '$log',
        '$passw',
        '$ph',
        '$em'
    )"
);
$mysql->close();
header('Location: ./');
?>