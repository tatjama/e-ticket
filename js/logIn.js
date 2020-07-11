//funkciju poziva dugme Uloguj         
//funkcija prikuplja podatke iz forme u HTML-u i smesta u objekat sa nazivom noviKorisnik.
//potom ubacuje metodom push objekat noviKorisnik u niz nizKorisnika gde ga pamti
//Istovremeno sakriva dugme Pokupi  da ne bismo mogli greskom da prepisemo jednog korisnika drugim 
// Inicijalizujemo promenljivu nizKorisnika kao niz u koji smestamo dobijene objekte
var userArray = [];
let currentlyLoggedIn = {
    status: 9,
    email: "guest"
};
let lang = language();
console.log(lang)
let arraySerbianVariable = ['E-mail mora biti u formatu nesto@nesto.xyz', 'Lozinka prima samo slova ili brojeve',
 "Dobro došli ", " ! Vaš status je administratorski.", "Niste ulogovani. Registrujte se", 
 " ! Vaš status je registrovani korisnik."];
let arrayEnglishVariable = ['E-mail format has to be something@something.xyz', 'password can contain only letters and numbers.',
 'Welcome ', " ! Your status is admin.", " You are not sign in. Please,  sign up.", 
 " ! Your status is registered user."]
class LanguageVariables{
    constructor(emailAlert, passwordAlert, welcomeAlert, statusAlertAdmin, statusAlertGuest, statusAlertUser){
        this.emailAlert = emailAlert;
        this.passwordAlert = passwordAlert;
        this.welcomeAlert = welcomeAlert;        
        this.statusAlertAdmin = statusAlertAdmin;
        this.statusAlertGuest = statusAlertGuest;
        this.statusAlertUser = statusAlertUser;
    }

    static chooseVariables(lang){
        if(lang == 'sr'){
            return serbianVariables
        }else{
            return englishVariables
        }
    }
}
let serbianVariables = new LanguageVariables(...arraySerbianVariable);
let englishVariables = new LanguageVariables(...arrayEnglishVariable);

function checkingUserStatus(checkUser, languageVar){
    
        //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizKorisnika
        var userArray = JSON.parse(localStorage.getItem('userStorage')) || [];
        console.log(userArray);
        

        for (let i = 0; i < userArray.length; i++) {

            if (checkUser.email === userArray[i].email && checkUser.password === userArray[i].password) {
                if(userArray[i].status == 1){
                    alert( languageVar.welcomeAlert + userArray[i].name + " "+userArray[i].surname + languageVar.statusAlertUser )
                    
                }else{                
                alert(languageVar.welcomeAlert + userArray[i].name + " "+userArray[i].surname + languageVar.statusAlertAdmin);
                }
                currentlyLoggedIn.status = userArray[i].status;
                currentlyLoggedIn.email = userArray[i].email;
                currentlyLoggedIn.name = userArray[i].name;
                currentlyLoggedIn.surname = userArray[i].surname;
                currentlyLoggedIn.password = userArray[i].password;
            }
        }
}

function signIn() {
   // console.log(lang)
   const languageVar =  LanguageVariables.chooseVariables(lang);
   // console.log(languageVar)
   
    if (document.getElementById('error1').innerHTML == '*') {
        alert(languageVar.emailAlert)
    } else if (document.getElementById('error2').innerHTML == '*') {
        alert(languageVar.passwordAlert);
    } else {
        document.getElementById('pickUp_signIn').style.display = 'none';
        var checkUser = {};
        checkUser.email = document.getElementById('logIn_email').value;
        checkUser.password = document.getElementById('logIn_password').value;

        checkingUserStatus(checkUser, languageVar);

        if (currentlyLoggedIn.status == 9) {
            alert(languageVar.statusAlertGuest);
            let currentlyLoggedIn = {
                status: 9,
                email: "guest"
            };
            //praznimo localStoridze
            localStorage.removeItem('currentlyLoggedIn');
            //smesta trenutno ulogovanog korisnika u localStoride
            localStorage.setItem('currentlyLoggedIn', JSON.stringify(currentlyLoggedIn));
            console.log(currentlyLoggedIn);
            document.getElementById('signUp').style.display = "block";
            document.getElementById('signOut').style.display = "none";
            } else {

             //session storage 
            sessionStorage.setItem('user',JSON.stringify(currentlyLoggedIn) );    

            console.log(currentlyLoggedIn);
            //praznimo localStoridze
            localStorage.removeItem('currentlyLoggedInUser');
            //smesta trenutno ulogovanog korisnika u localStoride
            localStorage.setItem('currentlyLoggedInUser', JSON.stringify(currentlyLoggedIn));
            var localUser = JSON.parse(localStorage.getItem('currentlyLoggedInUser'));
            var sessionUser = JSON.parse(sessionStorage.getItem('user'))
            console.log(localUser)
            console.log(sessionUser)
            
            if (currentlyLoggedIn.status == 1) {
                document.getElementById('eshop').style.display = "block";
                document.getElementById('eshop_mobile').style.display = "block";
                document.getElementById('signIn').style.display = 'none';
                document.getElementById('signIn_mobile').style.display = 'none';
                document.getElementById('signUp').style.display = "none";
                document.getElementById('signUp_mobile').style.display = "none";
                document.getElementById('signOut').style.display = "block";
                document.getElementById('signOut_mobile').style.display = "block";
            } else {
                document.getElementById('entry').style.display = "block";
                document.getElementById('entry_mobile').style.display = "block";
                document.getElementById('sale').style.display = "block";
                document.getElementById('sale_mobile').style.display = "block";
                document.getElementById('signIn').style.display = 'none';
                document.getElementById('signIn_mobile').style.display = 'none';
                document.getElementById('signUp').style.display = "none";
                document.getElementById('signUp_mobile').style.display = "none";
                document.getElementById('signOut').style.display ="block";
                document.getElementById('signOut_mobile').style.display ="block";
            }

        }
        clearInput();
    }

} //kraj funkcije logovanje