<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <title>User Page</title>
    <link type="text/css" rel="stylesheet" href="/css/style.css"  media="screen,projection"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 center-align">
                <h1 class="user-cab-header">Кабинет пользователя</h1>
            </div>
            <div class="col-lg-12 center-align">
                <button id="logout" class="material-icons-outlined btn deep-orange darken-4">Выйти</button>
               
            </div>
        </div>

        <div class="row" id="row-form">
            <div class="col s2"></div>
            <div class="col s8" center-align>
                <form>
                    <div class="row">
                        <div id="inputArea">
                            <div class="input-field col s6">
                                <input id="singup-name" type="text" class="validate">
                                <label class="active" for="singup-name">Имя</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="singup-pass" type="text" class="validate">
                                <label class="active" for="singup-pass">Пароль</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="singup-birthday" type="text" class="datepicker">
                                <label class="active" for="singup-birthday">Дата рождения</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="singup-sex" type="text" class="validate">
                                <label class="active" for="singup-sex">Пол</label>
                            </div>
                        </div>                        
                        
                        <div class="col s6 left-align">
                            <input class="material-icons-outlined btn deep-orange darken-4" type="submit" value="Изменить данные" id="red-submit">
                        </div>
                        <div class="col s6 right-align">
                            <input class="material-icons-outlined btn deep-orange darken-4" type="submit" value="Сохранить изменения" id="singup-submit">
                        </div>
                    </div>
                    <!-- <input type="submit" value="edit" id="red-submit"> -->
 
                </form>
            </div>
            <div class="col s2"></div>
        </div>
    </div>


    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="js/materialize.min.js"></script>
    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/logout.js"></script>
</body>
</html>