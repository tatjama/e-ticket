var errorSignUp = document.getElementsByClassName('error_signUp');
var nameSignUp = document.getElementById('signUp_name');
var surnameSignUp = document.getElementById('signUp_surname');
var emailSignUp = document.getElementById('signUp_email');
var passwordSignUp = document.getElementById('signUp_password');
var statusValue = document.getElementById('signUp_status').value;
var errorSignUpValidation = document.getElementsByClassName('error_signUp');
//funkciju poziva dugme Registracija          
//funkcija prikuplja podatke iz forme u HTML-u i smesta u objekat sa nazivom noviKorisnik.
//potom ubacuje metodom push objekat noviKorisnik u niz nizKorisnika gde ga pamti
//Istovremeno sakriva dugme Pokupi  da ne bismo mogli greskom da prepisemo jednog korisnika drugim 
// Inicijalizujemo promenljivu nizKorisnika kao niz u koji smestamo dobijene objekte
let users = [];
let newUser = {};
let newUsersArray = [];

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
    nameSignUp.value = '';
    surnameSignUp.value = '';
    emailSignUp.value = '';
    passwordSignUp.value = '';
    statusValue = '1';
}

function checkDoesUserExist(newUsersArray){ 
    let nameValue = nameSignUp.value.toUpperCase();
    let surnameValue = surnameSignUp.value.toUpperCase();
    let emailValue = emailSignUp.value;
    let passwordValue = passwordSignUp.value;
   // let statusValue = document.getElementById('signUp_status').value;
 
    class NewUser{
        constructor(name, surname, email, password, status){
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.password = password;
            this.status = status;
        }
    } 

    const newUser = new NewUser(nameValue, surnameValue, emailValue, passwordValue, statusValue);
    console.log(newUser)
newUsersArray.forEach(element => {
    console.log(newUsersArray)
    if (element.email === newUser.email) {
        alert(errorAlertHaveUser);
        document.getElementById('signUp_email').value = '';
        newUser.email = '';
    }
});
if (newUser.email !== '') {
    //ubacuje novi dogadjaj objekat u nizKorisnika        
    users.push(newUser);
    //smesta nizKorisnika u localStoride
    localStorage.setItem('userStorage', JSON.stringify(users));
    clearInputSignUp();
    document.getElementById('pickUp_signUp').style.display = 'none';
    document.getElementById('signUp').style.display = 'none';
}

}

class UsersArray{
    async getUserArray(){
         try{
             let result = await fetch('users.json');
             let data = await result.json();
             let userArray = data.users;
             return userArray
         }catch(error){
            console.log(error)
         }
     }
}
const user = new UsersArray();


function signUp() {
    let lang = language();
    if(lang === 'sr'){
        errorAlert = 'Neispravan unos ili prazno polje';
        errorAlertHaveUser = "Postoji korisnik sa tim e-mailom u bazi";
    }else{
        errorAlert = 'Not valid or empty field';
        errorAlertHaveUser = "Error. User with this e-mail already registered.";
    }
    if (nameSignUp.value == '' ||
        surnameSignUp.value == '' ||
        emailSignUp.value == '' ||
        passwordSignUp.value == '' ||
        errorSignUp[0].innerHTML != '' ||
        errorSignUp[1].innerHTML != '' ||
        errorSignUp[2].innerHTML != '' ||
        errorSignUp[3].innerHTML != '') {
        alert(errorAlert);
    } else {
        user.getUserArray().then((userArray)=>{
            //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu users
            users = JSON.parse(localStorage.getItem('userStorage')) || [];
            newUsersArray = userArray.concat(users);
            return newUsersArray
        }).then((newUsersArray)=>{
            checkDoesUserExist(newUsersArray)
        })

        
    }

} //kraj funkcije registracija