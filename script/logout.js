document.querySelector('#logout').onclick = function (){
    let x = document.cookie;
    console.log(x);
    let d = new Date();
    d.setTime(d.getTime() - (10*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = `${x}; ${expires}; path=/ `;
    location.reload();
}