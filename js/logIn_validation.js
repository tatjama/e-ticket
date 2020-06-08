var errorValidation = document.getElementsByClassName('error');

//brisemo upisane vrednosti za logovanje
 function clearInput() {
    document.getElementById('logIn_email').value = '';
    document.getElementById('logIn_password').value = '';

}
//validacija
function validMail(a, b) {
    let val = document.getElementById(a).value;
    if (!(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(val)) || (val == '')) {
        errorValidation[b].innerHTML = '*';
    }

}

function valid(a, b) {
    let val = document.getElementById(a).value;
    if ((/[^A-Za-zČčĆćŠšĐđ]+$/.test(val)) || (val == '')) {
        errorValidation[b].innerHTML = '*';
    }
}

function valid1(a, b) {
    let val = document.getElementById(a).value;
    if ((/[\W_]/.test(val)) || (val == '')) {
        errorValidation[b].innerHTML = '*';
    }
}
//brise * kada je onfocus polje u koje treba da unesemo ispravku
function fillingInput(b) {
    errorValidation[b].innerHTML = '';
}