<?php
require_once './orm.php';

$id_order = $_POST['id_order'];

$orm->update([
   'order_id_state' => '3',
])->where("id_order = '$id_order'")();
