<?php
require_once './orm.php';

$id_order = $_POST['id_order'];
$id = $_POST['id'];

$orm->update([
   'order_id_state' => '1',
   'order_id_volonter' => $id,
])->where("id_order = '$id_order'")();

