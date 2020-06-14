var eShopMessage = document.getElementById('entry-message');
var navBg = document.querySelector('.nav-bg');
var entryContainer = document.querySelector('.entry-container');
checkUser();

function checkUser(){
     //session storage 
     var currentlyLoggedIn =JSON.parse(sessionStorage.getItem('user')) ;          
     
     if(sessionStorage.getItem('user')!== null){ 

        if(currentlyLoggedIn.status ===  "0"){
            console.log(currentlyLoggedIn);
            navBg.style.display = "flex";
            eShopMessage.innerHTML = 
            '<h1 id="welcome-user">Dobro došli ' + currentlyLoggedIn.name + 
            ' ' + currentlyLoggedIn.surname +
            ' .<br>Na ovoj strani pravite ulaz za nove ulaznice.</h1>';
            animate();
        }else{
            console.log('gost');
           navBg.style.display = 'none';  
           entryContainer.style.display = 'none';        
            eShopMessage.innerHTML = 
            "<h1>Nemate administratorska ovlašćenja za unos ulaznica!</h1>"
            animate();
        }    
    }else{ 
        console.log('neregistrovani korisnik');
        navBg.style.display = "none";  
        entryContainer.style.display = 'none';          
        eShopMessage.innerHTML = 
       "<h1>Da biste koristili prodavnicu morate biti administrator.<br> Molimo Vas da se ulogujete.</h1>";
       animate();
    }
}

// function with message in the opening sale store
function animate(){                
    $('h1').show().animate({
        right: '10px',
        top: "80px",
        fontSize: "12px"
    }, (500)).queue(function() {
        $(this).css({
            "color": "white",
           // "text-shadow": "3px 3px 11px white",
          //  "background-color": "white"
        }).dequeue();
    });
} 

/*obrisiLokalStoridz();

function obrisiLokalStoridz() {
    localStorage.clear();
}*/
//funkciju poziva dugme Novi formular
//dugme Pokupi se pojavljuje. Prilikom ucitavanja programa dugme Pokupi je aktivno. Kada ga pritisnemo
// pokrecemo funkciju događajt() i sakrivamo dugme Pokupi


function noviFormular() {
    document.getElementById('pokupi').style.display = 'initial';
    obrisi();
}
//Izracunava broj ulaynica slucajnim metodom, Brojevi su od 10 do 100   
function brojUlaznica() {
    var kolicina = Math.floor(Math.random() * (300 - 1)) + 1;
    document.getElementById('kolicina').value = kolicina;
}
//validacija Naziva i autora prilikom unosa. Proverava da li su uneti karakteri samo velika i mala slova srpske latinice
function valid(a, b) {
    let val = document.getElementById(a).value;
    if ((/[^A-Za-zČčĆćŠšĐđ]+$/.test(val)) || (val == '')) {
        document.getElementsByClassName('greska')[b].innerHTML = '*';
    }
}
//validacija cene
function validBroj() {
    let val = document.getElementById('cena').value;
    if (/[^0-9]/.test(val) || (val == '') || val < 00100 || val > 10000) {
        document.getElementsByClassName('greska')[2].innerHTML = '*';
    }


}
//brise * kada je onfocus polje u koje treba da unesemo ispravku
function unos(b) {
    document.getElementsByClassName('greska')[b].innerHTML = '';
}
//brisemo upisane vrednosti za dogadjaj
function obrisi() {

    document.getElementById('naziv').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('cena').value = '';
    document.getElementById('datum').value = '';
    document.getElementById('kolicina').value = '';
    document.getElementById('vrstaDogadjaja').value = '';

}

//funkciju poziva dugme Pokupi          
//funkcija prikuplja podatke iz forme u HTML-u i smesta u objekat sa nazivom noviDogađaj.
//potom ubacuje metodom push objekat noviDogađaj u niz nizDogađaja gde ga pamti
//Istovremeno sakriva dugme Pokupi  da ne bismo mogli greskom da prepisemo jedan događaj drugim 
// Inicijalizujemo promenljivu nizDogađaja kao niz u koji smestamo dobijene objekte
var storageOfPerformances = [];

function dogadjaj() {
    if (document.getElementById('naziv').value == '' || document.getElementById('autor').value == '' ||
        document.getElementById('cena').value == '' ||
        document.getElementById('datum').value == '' ||
        document.getElementById('kolicina').value == '' ||
        document.getElementById('vrstaDogadjaja').value == '' ||
        document.getElementsByClassName('greska')[0].innerHTML != '' ||
        document.getElementsByClassName('greska')[1].innerHTML != '' ||
        document.getElementsByClassName('greska')[2].innerHTML != '') {
        alert('Neispravan unos ili prazno polje');
    } else {
        document.getElementById('pokupi').style.display = 'none';



        var noviDogadjaj = {};

        noviDogadjaj.naziv = document.getElementById('naziv').value.toUpperCase();
        noviDogadjaj.autor = document.getElementById('autor').value.toUpperCase();
        noviDogadjaj.cena = document.getElementById('cena').value;
        noviDogadjaj.datum = document.getElementById('datum').value;
        noviDogadjaj.kolicina = document.getElementById('kolicina').value;
        noviDogadjaj.vrsta = document.getElementById('vrstaDogadjaja').value;
        if (document.getElementById('pozitivna').checked) {
            noviDogadjaj.scena = 'Mala scena';
        } else {
            noviDogadjaj.scena = 'Velika scena';
        }

        //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu storageOfPerformances
        var storageOfPerformances = JSON.parse(localStorage.getItem('bazadogadjaja')) || [];
        //ubacuje novi dogadjaj objekat u storageOfPerformances
        storageOfPerformances.push(noviDogadjaj);
        //smesta storageOfPerformances u localStoride
        localStorage.setItem('bazadogadjaja', JSON.stringify(storageOfPerformances));

        console.log(storageOfPerformances);
        console.log(noviDogadjaj);

        obrisi();


    }

} //kraj funkcije dogadjaj