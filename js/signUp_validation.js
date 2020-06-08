var errorSignUpValidation = document.getElementsByClassName('error_signUp');

//validacija 
function validR(a, b) {
    let val = document.getElementById(a).value;
    if ((/[^A-Za-zČčĆćŠšĐđ]+$/.test(val)) || (val == '')) {
        errorSignUpValidation[b].innerHTML = '*';
    }
}

function validMailR(a, b) {
    let val = document.getElementById(a).value;
    if (!(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(val)) || (val == '')) {
        errorSignUpValidation[b].innerHTML = '*';
    }

}

function valid1R(a, b) {
    let val = document.getElementById(a).value;
    if ((/[\W_]/.test(val)) || (val == '')) {
        errorSignUpValidation[b].innerHTML = '*';
    }
}



//brise * kada je onfocus polje u koje treba da unesemo ispravku
function fillingInputSignUp(b) {
    errorSignUpValidation[b].innerHTML = '';
}

//brisemo upisane vrednosti za korisnika
function clearInputSignUp() {

    document.getElementById('signUp_name').value = '';
    document.getElementById('signUp_surname').value = '';
    document.getElementById('signUp_email').value = '';
    document.getElementById('signUp_password').value = '';
    document.getElementById('signUp_status').value = '1';


}