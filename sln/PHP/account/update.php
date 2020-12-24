<?php
require_once './orm.php';

$update_data = [];

if (isset($_POST['name']) && $_POST['name']) {
   $update_data['people_name'] = $_POST['name'];
}
if (isset($_POST['login']) && $_POST['login']) {
   $update_data['people_login'] = $_POST['login'];
}
if (isset($_POST['password']) && $_POST['password']) {
   $update_data['people_password'] = md5($_POST['password']);
}
if (isset($_POST['phone']) && $_POST['phone']) {
   $update_data['people_phone'] = $_POST['phone'];
}
if (isset($_POST['email']) && $_POST['email']) {
   $update_data['people_email'] = $_POST['email'];
}

$orm_people
   ->update($update_data)
   ->where("id_people = {$_COOKIE['vpj_id']}")();

header('Location: ./../../?page=settings');