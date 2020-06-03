//funkciju poziva dugme Uloguj         
//funkcija prikuplja podatke iz forme u HTML-u i smesta u objekat sa nazivom noviKorisnik.
//potom ubacuje metodom push objekat noviKorisnik u niz nizKorisnika gde ga pamti
//Istovremeno sakriva dugme Pokupi  da ne bismo mogli greskom da prepisemo jednog korisnika drugim 
// Inicijalizujemo promenljivu nizKorisnika kao niz u koji smestamo dobijene objekte
var userArray = [];

function signIn() {
    if (document.getElementById('error1').innerHTML == '*') {
        alert('E-mail mora biti u formatu nesto@nesto.xyz')
    } else if (document.getElementById('error2').innerHTML == '*') {
        alert('Lozinka prima samo slova ili brojeve');
    } else {
        document.getElementById('pickUp_signIn').style.display = 'none';

        var checkUser = {};

        checkUser.email = document.getElementById('logIn_email').value;
        checkUser.password = document.getElementById('logIn_password').value;

        //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizKorisnika
        var userArray = JSON.parse(localStorage.getItem('userStorage')) || [];
        console.log(userArray);
        let currentlyLoggedIn = {
            status: 9,
            email: "guest"
        };

        for (let i = 0; i < userArray.length; i++) {

            if (checkUser.email === userArray[i].email && checkUser.password === userArray[i].password) {
                if(userArray[i].status == 1){
                    alert("Dobro došli "+userArray[i].name + " "+userArray[i].surname + " ! Vaš status je registrovani korisnik.")
                }else{

                
                alert(("Dobro došli "+userArray[i].name + " "+userArray[i].surname + " ! Vaš status je administratorski."));
                }
                currentlyLoggedIn.status = userArray[i].status;
                currentlyLoggedIn.email = userArray[i].email;
                currentlyLoggedIn.name = userArray[i].name;
                currentlyLoggedIn.surname = userArray[i].surname;
            }
        }

        if (currentlyLoggedIn.status == 9) {
            alert("Niste ulogovani. Registrujte se");
            let currentlyLoggedIn = {
                status: 9,
                email: "guest"
            };
            //praznimo localStoridze
            localStorage.removeItem('currentlyLoggedIn');
            //smesta trenutno ulogovanog korisnika u localStoride
            localStorage.setItem('currentlyLoggedIn', JSON.stringify(currentlyLoggedIn));
            console.log(currentlyLoggedIn);
            //document.getElementById('eshop').style.display = "block";
            document.getElementById('signUp').style.display = "block";
           // document.getElementById('eshop2').style.display = "none";
            //document.getElementById('unos').style.display = "none";
            //document.getElementById('prodaja').style.display = "none";
            document.getElementById('signOut').style.display = "none";

        } else {
            console.log(currentlyLoggedIn);
            //praznimo localStoridze
            localStorage.removeItem('trenutnoulogovanikorisnik');
            //smesta trenutno ulogovanog korisnika u localStoride
            localStorage.setItem('trenutnoulogovanikorisnik', JSON.stringify(currentlyLoggedIn));
            if (currentlyLoggedIn.status == 1) {
                document.getElementById('unos').style.display = "none";
                document.getElementById('prodaja').style.display = "none";
                document.getElementById('eshop2').style.display = "block";
                document.getElementById('signUp').style.display = "none";
                document.getElementById('signOut').style.display = "block";
            } else {
               // document.getElementById('eshop').style.display = "none";
               // document.getElementById('eshop2').style.display = "none";
                //document.getElementById('unos').style.display = "block";
                //document.getElementById('prodaja').style.display = "block";
                document.getElementById('signIn').style.display = 'none';
                document.getElementById('signUp').style.display = "none";
                document.getElementById('signOut').style.display ="block";
            }

        }
        clearInput();
    }

} //kraj funkcije logovanje