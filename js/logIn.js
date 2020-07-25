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
let nameSignIn =  document.getElementById('logIn_email');
let passwordSignIn = document.getElementById('logIn_password');
var userArray = [];
var errorValidation = document.getElementsByClassName('error');

//brisemo upisane vrednosti za logovanje
 function clearInput() {
    nameSignIn.value = '';
    passwordSignIn.value = '';

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
    
    function checkDoesUserAndPassExist(element){
        return ((element.email === checkUser.email)&&(element.password === checkUser.password))
    }
    const currentlyUser = newUsersArray.filter(checkDoesUserAndPassExist);
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