<?php
$beauty_tel = function ($tel) {
   preg_match('/(\+?)(\d+)(\d\d\d)(\d\d\d)(\d\d)(\d\d)/', $tel, $m);
   return "{$m[1]}{$m[2]} ({$m[3]}) {$m[4]}-{$m[5]}-{$m[6]}";
};