<?php
$name = htmlspecialchars($_POST['name']);
$tel = htmlspecialchars($_POST['tel']);
$email = htmlspecialchars($_POST['email']);
$login = htmlspecialchars($_POST['login']);
$pass = $_POST['pass'];

function strlen_between($str, $min, $max)
{
    $len = mb_strlen($str);
    return $min <= $len && $len <= $max;
}

function echo_array_json($array)
{
    echo '["' . implode('","', $array) . '"]';
}

$errors = [];

if (!strlen_between($login, 2, 50))
    array_push($errors, "Недопустимая длина логина. От 2 до 50 символов");
if (!strlen_between($name, 2, 100))
    array_push($errors, "Недопустимая длина имени. От 2 до 100 символов");
if (!strlen_between($email, 2, 60))
    array_push($errors, "Недопустимая длина номера e-mail. От 2 до 60 символов");
if (!strlen_between($pass, 2, 50))
    array_push($errors, "Недопустимая длина пароля. От 2 до 50 символов");

if (count($errors) > 0) {
    echo_array_json($errors);
    exit();
}

$pass = md5($pass."anenght2ei4");

//require './db_info/lucifer.php';
require './db_info/frity.php';
$mysql = new mysqli($db_host, $db_user, $db_pass, $db_db);

$login_result = $mysql->query("SELECT * FROM `vpj_people` WHERE `people_login` = '$login'");
$phone_result = $mysql->query("SELECT * FROM `vpj_people` WHERE  `people_phone` = '$tel'");
$email_result = $mysql->query("SELECT * FROM `vpj_people` WHERE `people_email` = '$email'");

$login_exist = $login_result && $login_result->num_rows > 0;
$phone_exist = $phone_result && $phone_result->num_rows > 0;
$email_exist = $email_result && $email_result->num_rows > 0;

$errors = [];
if ($login_exist)
    array_push($errors, "Такой логин уже есть");
if ($phone_exist)
    array_push($errors, "Такой номер телефона уже используется");
if ($email_exist)
    array_push($errors, "Такой email уже используется");

if (count($errors) > 0) {
    echo_array_json($errors);
    exit();
}

$mysql->query(
    "INSERT INTO `vpj_people` (
        `people_name`, 
        `people_login`, 
        `people_password`, 
        `people_phone`, 
        `people_email`
    ) VALUES (
        '$name',
        '$login',
        '$pass',
        '$tel',
        '$email'
    )"
);

$mysql->close();
header('Location: ./');
?>
