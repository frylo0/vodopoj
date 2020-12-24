<?php
setcookie('vpj_id', 0, time() - 1, '/');
header('Location: ./../../?page=login');