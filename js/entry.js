var eShopMessage = document.getElementById('entry-message');
var navBg = document.querySelector('.nav-bg');
var entryContainer = document.getElementById('entry-container');

var name =  document.getElementById('name');
var author =  document.getElementById('author');
var price =  document.getElementById('price');
var date =  document.getElementById('date');
var quantity =  document.getElementById('quantity');
var type =  document.getElementById('type');
var image = document.getElementById('img');
let currentlyLanguage = cLanguage();
//Language is defined 
function cLanguage(){
    let currentlyLanguage;
    if(JSON.parse(sessionStorage.getItem('lang')) === null){
         currentlyLanguage = 'en';
    }else{
        currentlyLanguage = JSON.parse(sessionStorage.getItem('lang')).language;
        console.log(currentlyLanguage);        
    }
    console.log(currentlyLanguage)
    return currentlyLanguage;
}
console.log(currentlyLanguage)

checkUser(currentlyLanguage);

function checkUser(x){
     //session storage 
     var currentlyLoggedIn =JSON.parse(sessionStorage.getItem('user')) ;    
     //variables  are defined  - en - sr
    if (x === 'sr'){
        userMessage = ' Dobro došli .<br>Na ovoj strani pravite ulaz za nove ulaznice.</h1>';
        guestMessage = 'Da biste koristili prodavnicu morate biti administrator.<br> Molimo Vas da se ulogujete.';
        
        errorAlert = 'Neispravan unos ili prazno polje';
       
    }else{
        userMessage = ' Welcome .<br>On this page you make an entry for tickets.</h1>';
        guestMessage = 'You have to be admin if you wanna use shop. Please, make a registration.';
        errorAlert = "Unvalid entry or empty field";
        
    }
          
     
     if(sessionStorage.getItem('user')!== null){ 

        if(currentlyLoggedIn.status ===  "0"){
            console.log(currentlyLoggedIn);
            navBg.style.display = "flex";
            eShopMessage.innerHTML = 
            '<h1 class="h1-message" id="welcome-user" onclick="hideMessage()">' + currentlyLoggedIn.name + 
            ' ' + currentlyLoggedIn.surname +
            userMessage;
            animate();
        }else{
            console.log('gost');
           navBg.style.display = 'none';  
           entryContainer.style.display = 'none';        
            eShopMessage.innerHTML = 
            "<h1 class='h1-message'>Nemate administratorska ovlašćenja za unos ulaznica!</h1>"
            animate();
        }    
    }else{ 
        console.log('neregistrovani korisnik');
        navBg.style.display = "none";  
        entryContainer.style.display = 'none';          
        eShopMessage.innerHTML = 
       "<h1 id='guest-user' class='h1-message' onclick='hideMessage()'>" + guestMessage + "</h1>";
       animate();
    }
}

// function with message in the opening sale store
function animate(){                
    $('h1').show().animate({
        right: '30px',
        top: "50px",
        fontSize: "12px"
    }, (500)).queue(function() {
        $(this).css({
            //"color": "white",
           // "text-shadow": "3px 3px 11px white",
          //  "background-color": "white"
        }).dequeue();
    });
} 

function hideMessage(){
    document.getElementsByTagName('h1')[0].style.display = "none"
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
    document.getElementById('name').value = '';
    author.value = '';
    price.value = '';
    date.value = '';
    quantity.value = '';
    type.value = '';
    image.value = '';

}



/*obrisiLokalStoridz();

function obrisiLokalStoridz() {
    localStorage.clear();
}*/
//funkciju poziva dugme Novi formular
//dugme Pokupi se pojavljuje. Prilikom ucitavanja programa dugme Pokupi je aktivno. Kada ga pritisnemo
// pokrecemo funkciju događajt() i sakrivamo dugme Pokupi


function newForm() {
    clearFields();
    document.getElementById('entryForm').style.display = 'initial';
    
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
        alert(errorAlert);
    } else {
        //let newPerformance = {};
        let scene;
        let x = Math.floor(Math.random() * 6) + 1;

        if (document.getElementById('pozitivna').checked) {
             scene = 'Mala scena';
        } else {
             scene = 'Velika scena';
        }       
              
        var newPerformance = {
            naziv: document.getElementById('name').value.toUpperCase(),
            autor: author.value,
            cena: price.value,
            datum: date.value,
            kolicina: quantity.value,
            vrsta: type.value,
            scena: scene,
            image: pickImage()  + x + ".webp"
        }    
        
        /*newPerformance.naziv = document.getElementById('name').value.toUpperCase();
        newPerformance.autor = author.value;
        newPerformance.cena = price.value;
        newPerformance.datum = date.value;
        newPerformance.kolicina = quantity.value;
        newPerformance.vrsta = type.value;
        newPerformance.scena = scene;
        newPerformance.image = pickImage()  + x + ".webp";      */  
        
       // newPerformance.image = document.getElementById('img').value.slice(12);
      
       function pickImage(){
        switch(type.value){
            case "Predstava":
                return "drama" ;                
                case "Opera":
                     return "opera"
                    break;
                    case "Filharmonija":
                        return "filharmonija" 
                        break;
                        case "Balet":
                            return "balerina"
        }
       }     
       clearFields();

        //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu storageOfPerformances
        var storageOfPerformances = JSON.parse(localStorage.getItem('bazadogadjaja')) || [];
        //ubacuje novi dogadjaj objekat u storageOfPerformances
        storageOfPerformances.push(newPerformance);
        //smesta storageOfPerformances u localStoride
        localStorage.setItem('bazadogadjaja', JSON.stringify(storageOfPerformances));

        console.log(storageOfPerformances);
        console.log(newPerformance);

        
        document.getElementById('entryForm').style.display = 'none';
    }

} //kraj funkcije dogadjaj


//show chosen image 
function previewImg(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('outputImg');
      output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }