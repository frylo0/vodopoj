<DOCTYPE html>
    <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial scale=1.0">
            <title>Настройки аккаунта</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <link rel="stylesheet" href="css\style.css">
        </head>
        <body>
            <div class="container">
           
               <div class="col">
                <form action="" method="post">
                    <input type="text" class="form-control" name="name" id="name" placeholder="Введите новое имя" value="<?=$set?>"><br>
                    <input type="tel" class="form-control" name="tel" id="tel" placeholder="Введите новый номер телефона" value="<?=$ph?>"><br>
                    <input type="email" class="form-control" name="email" id="email" placeholder="Введите новую электронную почту" value="<?=$em?>"><br>
                    <input type="text" class="form-control" name="login" id="login" placeholder="Введите новый логин" value="<?=$log?>"><br>
                    <input type="text" class="form-control" name="pass" id="pass" placeholder="Введите новый пароль"><br>
                    <input type="text" class="form-control" name="pass" id="pass" placeholder="Введите новый пароль" value="<?=$passw?>"><br>
                    <button class="btn btn-success" type="submit">Сохранить</button>
                </form>
               </div>
               <div class="col">
                <form action="exit.php" method="post">
                
                    <button class="btn btn-success" type="submit">Выйти из аккаунта</button>
                </form>
               </div>
           </div>
        </body>
    </html>