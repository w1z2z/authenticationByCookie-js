//Стилизация календаря

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let arr = [80, 10]
    let instances = M.Datepicker.init(elems, {
        "format" : 'yyyy-mm-dd',
        "minDate" : new Date(1950,1,1),
        "maxDate" : new Date(2021,10,10),
        "yearRange" : arr[0]
    });
    instances.minDate = null;
});

document.querySelector('#singup-submit').onclick = function (event) {
    event.preventDefault();
    let name = document.querySelector('#singup-name').value;
    let pass = document.querySelector('#singup-pass').value;
    let email = document.querySelector('#singup-email').value;
    let birthday = document.querySelector('#singup-birthday').value;
    let sex = document.querySelectorAll('.sex');
    for (let i = 0; i < sex.length; i++){
        if (sex[i].checked){
            sex = sex[i].value;
            break;
        }
    }

    let data = {
        "name" : name,
        "pass" : pass,
        "email" : email,
        "birthday" : birthday,
        "sex" : sex
    }

    ajax('../core/signup.php', 'post', singup, data);

    function singup (result){
        console.log(result);
        if (result == 2){
            M.toast({html: 'Заполните все поля!'});
        } else if (result == 1){
            M.toast({html: 'Вы успешно зарегестрированы!'});
            document.querySelector('#singup-name').value = '';
            document.querySelector('#singup-pass').value = '';
            document.querySelector('#singup-email').value = '';
            document.querySelector('#singup-birthday').value = '';
        } else {
            M.toast({html: 'Ошибка, повторите регистрацию позже!'});
        }
    }
}

document.querySelector('#login-submit').onclick = function (event) {
    event.preventDefault();
    let pass = document.querySelector('#login-pass').value;
    let email = document.querySelector('#login-email').value;

    let data = {
        "pass" : pass,
        "email" : email
    }

    ajax('../core/login.php', 'post', login, data);

    function login (result){
        if (result == 2){
            M.toast({html: 'Заполните все поля!'});;
        } else if (result == 0){
            M.toast({html: 'Данный пользователь не найден!'});;
            ;
        } else {
            console.log(result);
            result = JSON.parse(result);
            let d = new Date();
            d.setTime(d.getTime() + (10*60*1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = `email=${result.email}; ${expires}; path=/ `;
            location.href="cabinet.php";
        }
    }
}
