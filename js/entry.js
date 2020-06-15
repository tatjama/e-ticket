var eShopMessage = document.getElementById('entry-message');
var navBg = document.querySelector('.nav-bg');
var entryContainer = document.querySelector('.entry-container');

var name =  document.getElementById('name');
var author =  document.getElementById('author');
var price =  document.getElementById('price');
var date =  document.getElementById('date');
var quantity =  document.getElementById('quantity');
var type =  document.getElementById('type');
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

//Count quantity of tickets random methodes from 10 to 100.   
function quantityOfTickets() {
    var q = Math.floor(Math.random() * (300 - 1)) + 1;
    quantity.value = q;
}


//Name of author and performance validation. Allowed only small and large letters of serbian latin
function isValidName(a, b) {    
    let val = document.getElementById(a).value;
    console.log(val)
    if ((/[^A-Za-zČčĆćŠšĐđ]+$/.test(val)) || (val == '')) {
        document.getElementsByClassName('greska')[b].innerHTML = '*';
        '/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/';
    }
}
//validation of price
function isValidNumber() {
    let val = price.value;
    if (/[^0-9]/.test(val) || (val == '') || val < 00100 || val > 10000) {
        document.getElementsByClassName('greska')[2].innerHTML = '*';
    }
}

//remove * when is onfocus field whitch we have to change
function unos(b) {
    document.getElementsByClassName('greska')[b].innerHTML = '';
}

// Remove all written values inside of form fields
function clearFields() {
    name.value = '';
    author.value = '';
    price.value = '';
    date.value = '';
    quantity.value = '';
    type.value = '';
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
    clearFields();
}

//funkciju poziva dugme Pokupi          
//funkcija prikuplja podatke iz forme u HTML-u i smesta u objekat sa nazivom noviDogađaj.
//potom ubacuje metodom push objekat noviDogađaj u niz nizDogađaja gde ga pamti
//Istovremeno sakriva dugme Pokupi  da ne bismo mogli greskom da prepisemo jedan događaj drugim 
// Inicijalizujemo promenljivu nizDogađaja kao niz u koji smestamo dobijene objekte
var storageOfPerformances = [];

function entry() {
    if (name.value == '' || 
        author.value == '' ||
        price.value == '' ||
        date.value == '' ||
        quantity.value == '' ||
        type.value == '' ||
        document.getElementsByClassName('greska')[0].innerHTML != '' ||
        document.getElementsByClassName('greska')[1].innerHTML != '' ||
        document.getElementsByClassName('greska')[2].innerHTML != '') {
        alert('Neispravan unos ili prazno polje');
    } else {
        document.getElementById('pokupi').style.display = 'none';
        var newPerformance = {};           

        newPerformance.naziv = document.getElementById('name').value.toUpperCase();
        newPerformance.autor = author.value;
        newPerformance.cena = price.value;
        newPerformance.datum = date.value;
        newPerformance.kolicina = quantity.value;
        newPerformance.vrsta = type.value;
        if (document.getElementById('pozitivna').checked) {
            newPerformance.scena = 'Mala scena';
        } else {
            newPerformance.scena = 'Velika scena';
        }
        newPerformance.image = document.getElementById('img').value;

        //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu storageOfPerformances
        var storageOfPerformances = JSON.parse(localStorage.getItem('bazadogadjaja')) || [];
        //ubacuje novi dogadjaj objekat u storageOfPerformances
        storageOfPerformances.push(newPerformance);
        //smesta storageOfPerformances u localStoride
        localStorage.setItem('bazadogadjaja', JSON.stringify(storageOfPerformances));

        console.log(storageOfPerformances);
        console.log(newPerformance);

        clearFields();


    }

} //kraj funkcije dogadjaj
/*function capitalize(){
    let authorArrey = [];
    authorValue = document.getElementById('author').value;
    console.log(authorValue)
    authorArrey = authorValue.split(' ');
    console.log(authorArrey)
    for( let i = 0; i < authorArrey.length; i++){
        console.log(authorArrey[i][0].toUpperCase())
    }

    console.log(authorValue)

}*/