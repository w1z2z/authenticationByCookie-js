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
    <title>Document</title>
</head>
<body>
    <h1>User Page</h1>
    <button id="logout">exit</button>
    <form>
        <div>name: <input type="text" name="name" id="singup-name"></div>
        <div>password: <input type="text" name="pass" id="singup-pass"></div>
        <div>birthday: <input type="text" name="birthday" id="singup-birthday"></div>
        <div>sex: <input type="text" name="birthday" id="singup-sex"></div>
        <input type="submit" value="edit" id="red-submit">
        <input type="submit" value="update" id="singup-submit">
    </form>

    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/logout.js"></script>
</body>
</html>