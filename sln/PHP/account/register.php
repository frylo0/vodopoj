<?php
require_once './orm.php';

$res = $orm_people->insert([
   'id_people' => null,
   'people_name' => $_POST['name'],
   'people_login' => $_POST['login'],
   'people_password' => md5($_POST['password']),
   'people_phone' => $_POST['phone'],
   'people_email' => $_POST['email']
])();

$errors = [];

if (!$res) {
   $error = $orm_people->db->error;
   if (substr($error, 0, 15) == 'Duplicate entry') {
      array_push($errors, [
         'type' => 'duplicate',
         'message' => 'such account already exist',
      ]);
   }

   echo json_encode([ 'errors' => $errors ]);
} else {
   $id = $orm_people->select('MAX(id_people) as max_id')()[0]['max_id'];
   setcookie('vpj_id', $id, strtotime('+30 days'), '/');
   //header('Location: ./../../?page=map');
   header('Location: ./../../?page=list');
}
