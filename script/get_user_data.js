disabledInput();

let userEmail = getCookie('email');
// console.log(userEmail);
ajax('../core/get_user_data.php', 'post', getUserData, {'email' : userEmail});

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
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
        alert('Нажмити кнопку edit и внесите изменения!');
    } else {
        console.log(result);
        if(result == 1){
            alert('Данные успешно обновлены!');
            disabledInput();
        } else {
            alert('Ошибка обновления!');
        }
    }
}



function disabledInput() {
    document.querySelector('#singup-name').setAttribute('disabled', 'disabled');
    document.querySelector('#singup-pass').setAttribute('disabled', 'disabled');
    document.querySelector('#singup-birthday').setAttribute('disabled', 'disabled');
    document.querySelector('#singup-sex').setAttribute('disabled', 'disabled');
}

document.querySelector('#red-submit').onclick = function dis(event) {
    event.preventDefault();
    document.querySelector('#singup-name').removeAttribute('disabled', 'disabled');
    document.querySelector('#singup-pass').removeAttribute('disabled', 'disabled');
    document.querySelector('#singup-birthday').removeAttribute('disabled', 'disabled');
    document.querySelector('#singup-sex').removeAttribute('disabled', 'disabled');
}