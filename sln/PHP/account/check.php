<?php
require_once './orm.php';

$login = $_POST['login'];
$password = $_POST['password'];
$errors = [];

if (mb_strlen($login) > 50) {
   array_push($errors, [
      'type' => 'login',
      'message' => 'too long login',
   ]);
}
if (mb_strlen($password) > 50) {
   array_push($errors, [
      'type' => 'password',
      'message' => 'too long password',
   ]);
}

if (count($errors) > 0) {
   echo json_encode(['errors' => $errors]);
   die;
}

$orm->is_log = false;
$password = md5($password);
$has_id_and_password = "people_login = '$login' AND people_password = '$password'";
$id = $orm_people
   ->select('id_people')
   ->where($has_id_and_password)();

if ($id) {
   $id = $id[0]['id_people'];
   //header('Location: ./../../?page=map');
   header('Location: ./../../?page=list');
   setcookie('vpj_id', $id, strtotime('+30 days'), '/');
} else {
   array_push($errors, [
      'type' => 'account not exist',
      'message' => 'account doesn\'t registered',
   ]);
   echo json_encode(['errors' => $errors]);
   die;
}