<?php

$VER = '1.0';

use JsPhpize\JsPhpizePhug;

include_once __DIR__ . '/vendor/autoload.php';
include_once __DIR__ . '/ORM.php';

include_once './PHP/order/get_address_data.php';
include_once './PHP/tools/beauty_tel.php';

if (!isset($_COOKIE['vpj_id']) && !(
   $_GET['page'] == 'login' ||
   $_GET['page'] == 'register'
)) {
   header('Location: ./?page=login');
   die;
}

require_once './orm.php';
$orm->table_prefix = 'vpj_';
$orm->is_log = true;

Phug::addExtension(JsPhpizePhug::class);
$page_name = isset($_GET['page']) ? $_GET['page'] : 'login';
Phug::displayFile("./src/Pages/{$page_name}/{$page_name}.pug", [
   'link' => "./src/Pages/{$page_name}/dist/{$page_name}",
   'ver' => "$VER",
   'orm' => $orm,
   '$_POST' => $_POST,
   '$_GET' => $_GET,
   '$_COOKIE' => $_COOKIE,
   'get_address_data' => $get_address_data,
   'beauty_tel' => $beauty_tel,
]);

$orm->close();
