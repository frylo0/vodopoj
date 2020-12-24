<?php
include_once __DIR__ . '/../../ORM.php';

$orm = new ORM('localhost', 'phpmyadmin', 'Jyie-ha0r-kgie', 'vodopoi');
$orm->table_prefix = 'vpj_';
$orm->is_log = true;

$orm_people = $orm
   ->from('people');

   