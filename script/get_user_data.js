disabledInput();
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

let userEmail = getCookie('email');
// console.log(userEmail);
ajax('../core/get_user_data.php', 'post', getUserData, {'email' : userEmail});

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUserData(result){
    result = JSON.parse(result);
    // console.log(result);
    document.querySelector('#singup-name').value = result.name;
    document.querySelector('#singup-pass').value = result.password;
    document.querySelector('#singup-birthday').value = result.birthday;
    document.querySelector('#singup-sex').value = result.sex;
    M.updateTextFields();
}

document.querySelector('#singup-submit').onclick = function (event) {
    event.preventDefault();
    let updateData = {
        "email" : userEmail,
        "name" : document.querySelector('#singup-name').value,
        "pass" : document.querySelector('#singup-pass').value,
        "birthday" : document.querySelector('#singup-birthday').value,
        "sex" :  document.querySelector('#singup-sex').value
    };
    ajax('core/update_user_data.php', 'POST', updateUserData, updateData);
}

function updateUserData(result){
    if (document.querySelector('#singup-name').hasAttribute('disabled', 'disabled')){
        M.toast({html: 'Нажмити кнопку "Изменить" и внесите изменения!'});
    } else {
        console.log(result);
        if(result == 1){
            M.toast({html: 'Данные успешно обновлены!'});
            disabledInput();
        } else {
            M.toast({html: 'Ошибка обновления!'});
        } 
    }
}

//Блокировка полей ввода
function disabledInput() {
    document.querySelector('#singup-name').setAttribute('disabled', 'disabled');
    document.querySelector('#singup-pass').setAttribute('disabled', 'disabled');
    document.querySelector('#singup-birthday').setAttribute('disabled', 'disabled');
    document.querySelector('#singup-sex').setAttribute('disabled', 'disabled');
    //Всплывающая подсказка

        let mouse = document.querySelector('#inputArea').onclick = function () {
            M.toast({html: 'Нажмити кнопку "Изменить" и внесите изменения!'});
        }
}

//Активация полей ввода
document.querySelector('#red-submit').onclick = function dis(event) {
    event.preventDefault();
    document.querySelector('#singup-name').removeAttribute('disabled', 'disabled');
    document.querySelector('#singup-pass').removeAttribute('disabled', 'disabled');
    document.querySelector('#singup-birthday').removeAttribute('disabled', 'disabled');
    document.querySelector('#singup-sex').removeAttribute('disabled', 'disabled');
    let mouse = document.querySelector('#inputArea').onclick = function () {
        M.toast({html: none});
    }
}


