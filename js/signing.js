//funkciju poziva dugme Uloguj         
//funkcija prikuplja podatke iz forme u HTML-u i smesta u objekat sa nazivom noviKorisnik.
//potom ubacuje metodom push objekat noviKorisnik u niz nizKorisnika gde ga pamti
//Istovremeno sakriva dugme Pokupi  da ne bismo mogli greskom da prepisemo jednog korisnika drugim 
// Inicijalizujemo promenljivu nizKorisnika kao niz u koji smestamo dobijene objekte
let elementEntry = document.getElementById('entry') ;
let elementEntryMobile = document.getElementById('entry_mobile') ;
let elementEShop = document.getElementById('eshop');
let elementEShopMobile = document.getElementById('eshop_mobile');
let elementSale = document.getElementById('sale');
let elementSaleMobile = document.getElementById('sale_mobile');
let elementSignIn = document.getElementById('signIn');
let elementSignInMobile = document.getElementById('signIn_mobile');
let elementSignUp = document.getElementById('signUp');
let elementSignUpMobile = document.getElementById('signUp_mobile') ;
let elementSignOut = document.getElementById('signOut');
let elementSignOutMobile = document.getElementById('signOut_mobile');
var userArray = [];
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
class UserArray  {
    async  getUserArray(){
           try {
               let result = await fetch('users.json');
               let data = await result.json();
               let userArray = data.users             
               return(userArray)
           } catch (error) {
              console.log(error) 
           }
       }
   }
function checkUserStatus(userArray, checkUser, currentlyLoggedIn){
    const users = JSON.parse(localStorage.getItem('userStorage')) || [];    
    const newUsersArray = userArray.concat(users);
    
    function checkDoesUserExist(element){
        return ((element.email === checkUser.email)&&(element.password === checkUser.password))
    }
    const currentlyUser = newUsersArray.filter(checkDoesUserExist);
    let activeUser;
    if(currentlyUser.length !==0){    
        activeUser = currentlyUser[0];
        elementSignIn.style.display = 'none';
        elementSignInMobile.style.display = 'none';
        elementSignUp.style.display = "none";
        elementSignUpMobile.style.display = "none";
        elementSignOut.style.display = "block";
        elementSignOutMobile.style.display = "block";

        if(activeUser.status == 0){
            alert(welcomeAlert + activeUser.name + " " + activeUser.surname + statusAlertAdmin)
            elementEntry.style.display = "block";
            elementEntryMobile.style.display = "block";
            elementSale.style.display = "block";
            elementSaleMobile.style.display = "block";
            }else{
            alert(welcomeAlert + activeUser.name + " " + activeUser.surname + statusAlertUser)
            elementEShop.style.display = "block";
            elementEShopMobile.style.display = "block";       
        }
    }else{
        alert(statusAlertGuest)
        activeUser = currentlyLoggedIn
        elementSignUp.style.display = "block";
        elementSignOut.style.display = "none";
        
    }
sessionStorage.setItem('user', JSON.stringify(activeUser))   
}

function signIn() {
    let lang = language();
    if(lang === 'sr'){
        emailAlert = 'E-mail mora biti u formatu nesto@nesto.xyz';
        passwordAlert = 'Lozinka prima samo slova ili brojeve';
        welcomeAlert = "Dobro došli ";
        statusAlertUser = " ! Vaš status je registrovani korisnik.";
        statusAlertAdmin = " ! Vaš status je administratorski.";
        statusAlertGuest = "Niste ulogovani. Registrujte se";
    }else{
        emailAlert = 'E-mail format has to be something@something.xyz';
        passwordAlert = 'password can contain only letters and numbers.';
        welcomeAlert = 'Welcome ';
        statusAlertUser = " ! Your status is registered user.";
        statusAlertAdmin = " ! Your status is admin.";
        statusAlertGuest = " You are not sign in. Please,  sign up."
    }
    if (document.getElementById('error1').innerHTML == '*') {
        alert(emailAlert)
    } else if (document.getElementById('error2').innerHTML == '*') {
        alert(passwordAlert);
    } else {
        document.getElementById('pickUp_signIn').style.display = 'none';

        var checkUser = {};

        checkUser.email = document.getElementById('logIn_email').value;
        checkUser.password = document.getElementById('logIn_password').value;
        let currentlyLoggedIn = {
            status: 9,
            email: "guest"
        };
        
        const user = new UserArray();
       user.getUserArray().then((userArray)=>{
        checkUserStatus(userArray, checkUser, currentlyLoggedIn)
       })        
        clearInput();
    }

} //kraj funkcije logovanje
var errorSignUp = document.getElementsByClassName('error_signUp');
var nameSignUp = document.getElementById('signUp_name');
var surnameSignUp = document.getElementById('signUp_surname');
var emailSignUp = document.getElementById('signUp_email');
var passwordSignUp = document.getElementById('signUp_password');
var statusValue = document.getElementById('signUp_status').value;
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
        errorSignUp[b].innerHTML = '*';
    }
}
function validMailR(a, b) {
    let val = document.getElementById(a).value;
    if (!(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(val)) || (val == '')) {
        errorSignUp[b].innerHTML = '*';
    }

}
function valid1R(a, b) {
    let val = document.getElementById(a).value;
    if ((/[\W_]/.test(val)) || (val == '')) {
        errorSignUp[b].innerHTML = '*';
    }
}
//brise * kada je onfocus polje u koje treba da unesemo ispravku
function fillingInputSignUp(b) {
    errorSignUp[b].innerHTML = '';
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