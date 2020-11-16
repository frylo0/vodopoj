<DOCTYPE html>
    <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial scale=1.0">
            <title>В работе</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
        <h3>В работе</h3>
            <?php
            //require './db_info/lucifer.php';
            require 'C:\Users\Acer\Downloads\OpenServer\domains\vodopoj.loc\back\form\db_info\lucifer.php';
            $account = htmlspecialchars($_POST['account']);
            $mysql = new mysqli($db_host, $db_user, $db_pass, $db_db);

            $adress = $mysql->query("SELECT * FROM `vpj_people_address` WHERE  $account = {$_COOKIE['account']} AND '$account' = `people_adress_id_people`");
            $ph = $mysql->query("SELECT `people_phone` FROM `vpj_people` WHERE $account = {$_COOKIE['account']} ");
            $name = $mysql->query("SELECT `people_name` FROM `vpj_people` WHERE $account = {$_COOKIE['account']} ");
            $order = $mysql->query("SELECT `order_comment` FROM 'vpj_order' WHERE $account = {$_COOKIE['account']}  AND '$account' = 'order_id_people' ");

            $mysql->close();

            echo $adress; echo"\n";
            echo $ph; echo"\t"; echo $name; echo"\n";
            echo $order; echo"\n";
            ?>
            <form action="return.php" method="post">
                <button class="btn btn-success" type="submit">Отказаться</button>
            </form>
            <form action="done.php" method="post">
                <button class="btn btn-success" type="submit">Выполнено</button>
            </form>
        </body>
    </html>