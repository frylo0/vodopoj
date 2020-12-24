<?php
require_once './orm.php';

$id_order = $_POST['id_order'];

$orm->update([
   'order_id_state' => '2',
   'order_id_volonter' => null,
])->where("id_order = '$id_order'")();
