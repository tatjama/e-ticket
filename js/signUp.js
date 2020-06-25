var errorSignUp = document.getElementsByClassName('error_signUp');
var nameSignUp = document.getElementById('signUp_name');
var surnameSignUp = document.getElementById('signUp_surname');
var emailSignUp = document.getElementById('signUp_email');
var passwordSignUp = document.getElementById('signUp_email');

/*obrisiLokalStoridz();

function obrisiLokalStoridz() {
    localStorage.clear();
}*/
//funkciju poziva dugme Registracija          
//funkcija prikuplja podatke iz forme u HTML-u i smesta u objekat sa nazivom noviKorisnik.
//potom ubacuje metodom push objekat noviKorisnik u niz nizKorisnika gde ga pamti
//Istovremeno sakriva dugme Pokupi  da ne bismo mogli greskom da prepisemo jednog korisnika drugim 
// Inicijalizujemo promenljivu nizKorisnika kao niz u koji smestamo dobijene objekte
var userArray = [];

function signUp() {
    let lang = language();
    console.log(lang)
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


        var newUser = {};
        //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizKorisnika
        var userArray = JSON.parse(localStorage.getItem('userStorage')) || [];
        console.log(userArray);

        newUser.name = nameSignUp.value.toUpperCase();
        newUser.surname = surnameSignUp.value.toUpperCase();
        newUser.email = emailSignUp.value;
        newUser.password = passwordSignUp.value;
        newUser.status = document.getElementById('signUp_status').value;
        userArray.forEach(element => {
            if (element.email === newUser.email) {
                alert(errorAlertHaveUser);
                document.getElementById('signUp_email').value = '';
                newUser.email = '';

            }

        });
        if (newUser.email !== '') {
            //ubacuje novi dogadjaj objekat u nizKorisnika        
            userArray.push(newUser);
            //smesta nizKorisnika u localStoride
            localStorage.setItem('userStorage', JSON.stringify(userArray));

            console.log(userArray);
            console.log(newUser);
            clearInputSignUp();
            document.getElementById('pickUp_signUp').style.display = 'none';
            document.getElementById('signUp').style.display = 'none';
        }
    }

} //kraj funkcije registracija