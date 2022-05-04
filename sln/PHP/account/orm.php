<?php

require_once __DIR__ . '/../../orm.php';
$orm->table_prefix = 'vpj_';
$orm->is_log = true;

$orm_people = $orm
   ->from('people');

   