<?php
$get_address_data = function ($order_res) {
   global $orm;
   $res = [];

   $res['id'] = $order_res['id_order'];
   $res['comment'] = $order_res['order_comment'];
   $res['creation_time'] = $order_res['order_creation_time'];

   $id_people = $order_res['order_id_people'];
   $people = $orm->from('people')->select('people_name, people_phone')->where("id_people = '$id_people'")()[0];
   $res['name'] = $people['people_name'];
   $res['phone'] = $people['people_phone'];

   $id_address = $order_res['order_id_address'];
   $address = $orm->from('address')->select('*')->where("id_address = '$id_address'")()[0];
   $res['address'] = '';
   
   if ($address['address_city'])
      $res['address'] .= "г. {$address['address_city']}, ";
   if ($address['address_street'])
      $res['address'] .= "ул. {$address['address_street']}, ";
   if ($address['address_house'])
      $res['address'] .= "д. {$address['address_house']}, ";
   if ($address['address_housing'])
      $res['address'] .= "корп. {$address['address_housing']}, ";
   if ($address['address_flat'])
      $res['address'] .= "кв. {$address['address_flat']}, ";

   $res['address'] = mb_substr($res['address'], 0, mb_strlen($res['address']) - 2);

   return $res;
};