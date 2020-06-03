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
    if (document.getElementById('signUp_name').value == '' ||
        document.getElementById('signUp_surname').value == '' ||
        document.getElementById('signUp_email').value == '' ||
        document.getElementById('signUp_password').value == '' ||
        document.getElementsByClassName('error_signUp')[0].innerHTML != '' ||
        document.getElementsByClassName('error_signUp')[1].innerHTML != '' ||
        document.getElementsByClassName('error_signUp')[2].innerHTML != '' ||
        document.getElementsByClassName('error_signUp')[3].innerHTML != '') {
        alert('Neispravan unos ili prazno polje');
    } else {


        var newUser = {};
        //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizKorisnika
        var userArray = JSON.parse(localStorage.getItem('userStorage')) || [];
        console.log(userArray);

        newUser.name = document.getElementById('signUp_name').value.toUpperCase();
        newUser.surname = document.getElementById('signUp_surname').value.toUpperCase();
        newUser.email = document.getElementById('signUp_email').value;
        newUser.password = document.getElementById('signUp_password').value;
        newUser.status = document.getElementById('signUp_status').value;
        userArray.forEach(element => {
            if (element.email === newUser.email) {
                alert("Postoji korisnik sa tim e-mailom u bazi");
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
        }





    }

} //kraj funkcije registracija