/*function user(){
    if(typeof(Storage) !== "undefined"){
        if(sessionStorage.getItem('user') === null){
            console.log('Nema usera');
        }else{
        var currentlyLoggedIn = JSON.parse(sessionStorage.getItem('user'));
        console.log('ima usera');
        console.log(currentlyLoggedIn.status);
        console.log('ulogovani korisnik je '+ currentlyLoggedIn.name +" " + currentlyLoggedIn.surname + ' sa E-mailom ' 
        + currentlyLoggedIn.email + ' i passwordom ' + currentlyLoggedIn.password + ". Status korisnika je " + currentlyLoggedIn.status)
       
        }
    console.log('kraj');
    }else{
        alert('Your browser does not support web storage. Sorry...' );
    }    
}*/


var eShopMessage = document.getElementById('eshop-message');
var navBg = document.querySelector('.nav-bg');
let userMessage;
let userMessageSerbian =   ' Dobro došli u naš e-shop.<br> Da biste počeli proces kupovine ulaznice, molimo Vas da odaberete kategoriju.' ;
let userMessageEnglish = ' Welcome to our e-shop. <br> To start the ticket purchase process, please select a category.' ;
let guestMessage;
let guestMessageSerbian = "<h1 class='h1-message' id='guest-user' onclick='hideMessage()'>Da biste koristili E-shop morate biti registrovani korisnik. Molimo Vas da se registrujete.</h1>" ;
let guestMessageEnglish = "<h1 class = 'h1-message' id = 'guest-user' onclick = 'hideMessage ()'> You must be a registered user to use the E-shop. Please register. </h1>";
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
//create shop with choosen language - deault english
createEShop(currentlyLanguage);


function createEShop(x) {
    //session storage 
   /* var localUser = JSON.parse(localStorage.getItem('currentlyLoggedInUser'));            
     console.log(localUser)  */        
    var currentlyLoggedIn =JSON.parse(sessionStorage.getItem('user')) ;   
    console.log(x);
    //variables  are defined  - en - sr
    if (x === 'sr'){
        userMessage = userMessageSerbian;
        guestMessage = guestMessageSerbian;
        ballet = "Balet";
        drama = "Predstava";
        philharmonic = "Filharmonija";
        author = "AUTOR: ";
        scene = "SCENA: ";
        price = "CENA: ";
        quantity = "Količina";
        errorAlertQuantity = "Lager ne može da ide u minus. Rezervišete više ulaznica nego što ima na lageru. Možete da kupite maksimalno ";
        tickets = " ulaznica.";
    }else{
        userMessage = userMessageEnglish;
        guestMessage = guestMessageEnglish;
        ballet = "Ballet";
        drama = "Drama";
        philharmonic = "Philharmonic";
        author = "AUTHOR: ";
        scene = "SCENE: ";
        price = "PRICE: ";
        quantity = "Quantity";
        errorAlertQuantity = "You are trying to purchase more tickets that we have on stock. You can buy max ";
        tickets = " tickets.";
    }
    
    console.log(currentlyLoggedIn) 
    function animate(){                
        $('h1').show().animate({
            right: '30px',
            top: "60px",
            fontSize: "14px"
        }, (500)).queue(function() {
            $(this).css({
                //"color": "white",
               // "text-shadow": "3px 3px 11px white",
              //  "background-color": "white"
            }).dequeue();
        });
    }    
     
     if(sessionStorage.getItem('user')!== null){ 

        if(currentlyLoggedIn.status === "1" || currentlyLoggedIn.status === "0"){
            console.log(currentlyLoggedIn);
            navBg.style.display = "flex";
            eShopMessage.innerHTML = 
            '<h1 class="h1-message" id="welcome-user" onclick="hideMessage()"> ' + currentlyLoggedIn.name + 
            ' ' + currentlyLoggedIn.surname + userMessage
           + '</h1>';
            var shops = '<div id="shops"><div class="shops"><img class="shops-img" id="balet" alt="balet" src="../images/my-icons-collection (1)/svg/ballerina-white.svg"><h4>'
            + ballet 
            + '</h4></div><div class="shops"><img class="shops-img" id="drama" alt="drama" src="../images/my-icons-collection (1)/svg/drama-white.svg"><h4>' 
            + drama 
            + '</h4></div><div class="shops"><img class="shops-img" id="opera" alt="opera" src="../images/my-icons-collection (1)/svg/opera-white.svg"><h4>Opera</h4></div><div class="shops" ><img class="shops-img" id="filharmonija" alt="filharmonija" src="../images/my-icons-collection (1)/svg/conductor-white.svg"><h4>'
            + philharmonic + '</h4></div></div>';
            $("#eshop-container").append(shops);
            var shopArray = document.getElementsByClassName('shops-img');
            
                shopArray[0].addEventListener("click", function(){openStore("Balet", "balet")} );
                shopArray[1].addEventListener("click", function(){openStore("Predstava", "drama")} );
                shopArray[2].addEventListener("click", function(){openStore("Opera", "opera")} );
                shopArray[3].addEventListener("click", function(){openStore("Filharmonija", "filharmonija")} );
            
            //upisiBalet("Balet")
            animate();
            }else{
            console.log('gost');
            navBg.style.display = 'none';          
            eShopMessage.innerHTML = 
            "<h1 class='h1-message'>Da biste koristili E-shop morate biti registrovani korisnik. Molimo Vas da se registrujete.</h1>"
            animate();
        }
        
    }else{ 
         console.log('neregistrovani korisnik');
         navBg.style.display = "none";            
         eShopMessage.innerHTML = guestMessage;
        
        animate();
     }
    
    }

    function hideMessage(){
        document.getElementsByTagName("h1")[0].style.display = "none"
    }

    function openStore(x, y) {
        let store = document.getElementById('open-store');
        removePreSelection();

        document.getElementById('balet').src = "../images/my-icons-collection (1)/svg/ballerina-white.svg";
        document.getElementById('drama').src = "../images/my-icons-collection (1)/svg/drama-white.svg";
        document.getElementById('opera').src = "../images/my-icons-collection (1)/svg/opera-white.svg";
        document.getElementById('filharmonija').src = "../images/my-icons-collection (1)/svg/conductor-white.svg";
        
        
        //storageOfPerformances izvlacimo iz localS
        let performances = JSON.parse(localStorage.getItem('bazadogadjaja'));
    
        //Filtriramo po vrsti dogadjaja -balet  
        var filterPerformance = performances;
        console.log(y);
        document.getElementById(y).setAttribute('src', '../images/my-icons-collection (1)/svg/' + y + '.svg')
        //console.log(document.getElementById(y).innerHTML);
        filterPerformance = performances.filter(
            function(newPerformance) {
                if (newPerformance.vrsta == x) {
                    console.log(newPerformance.vrsta);
                    document.getElementById('active-store').innerHTML = newPerformance.vrsta;
                    return true;

                } else {
                    return false;
                }
            });            
        console.log(filterPerformance);
    
        for (let i = 0; i < filterPerformance.length; i++) {
            //refaktorizacija           
            let storeArticle = document.createElement('div');    
            storeArticle.setAttribute('class' , 'item-card') ;              
            storeArticle.innerHTML = '<img id="' + y + (i + 1) + 
                                    '" class="items-img" alt="' + y + (i + 1) + 
                                    ' "src="../images/webp/' + filterPerformance[i].image + 
                                    '"><div class = "items-text"><p class = "items-name">' + 
                                    filterPerformance[i].naziv + 
                                    '</p><p class="items-author">'+ author + filterPerformance[i].autor + 
                                    '</p><p class = "items-scene">'+ scene + filterPerformance[i].scena + 
                                    '</p><p class = "items-price">' + price + ' <span >' + filterPerformance[i].cena + 
                                    ' RSD </span> </p> <p>' + quantity + ' </p><button class="items-quantity-button" onclick="quantityDown('+ 
                                    "'rezervacija" + i + "'" + 
                                    ')"><img alt="arrow down" class="arrow-img" src="../images/arrow-down-white.svg" ></button> <input type="number" value = "0" min="0" max="20" placeholder="0" id="rezervacija' 
                                    + i + '"><button class="items-quantity-button" onclick="quantityUp('+ 
                                    "'rezervacija" + i + "'" + 
                                    ')"><img alt="arrow up" class="arrow-img" src="../images/arrow-up-white.svg" ></button></div>';
            store.appendChild(storeArticle);                  
        }  
    } 
    function removePreSelection(){
        let h2 = document.getElementById('eshop-header');
        document.getElementById('reservation').removeAttribute('click');
        if(h2.style.display !== "none"){
            h2.style.display = "none";
        }
        if(eShopMessage.firstElementChild !== null){
            eShopMessage.removeChild(eShopMessage.firstElementChild)
        }
                
        let store = document.getElementById('open-store');
        //store.innerHTML = '';
        let k = store.childNodes.length;
        if(store.firstElementChild !== null){          
            for(let i = 0; i < k ; i++){
                store.removeChild(store.childNodes[0]);
            }       
    }
    } 

    let reservation = document.getElementById('reservation');
        reservation.addEventListener('click', createNewReservation); 
        
        function createNewReservation() {           
            //storageOfPerformances izvlacimo iz localS
            let performances = JSON.parse(localStorage.getItem('bazadogadjaja'));
            
            //Filtriramo po vrsti dogadjaja  
            var filterPerformance = performances;
            var activePerformance = document.getElementById('active-store').innerHTML;
            
            filterPerformance = performances.filter(
                function(newPerformance) {
                    if (newPerformance.vrsta == activePerformance) {
                        console.log(newPerformance)
                        console.log(activePerformance)
                        return true;
                    } else {
                        return false;
                    }
                });
        
        
            console.log(filterPerformance);
        
            let reservationsArray = [];
            for (let j = 0; j < filterPerformance.length; j++) {
                let newReservation = document.getElementById('rezervacija' + j).value;
        
                //DODALA USLOV DA NE MOZE DA ODE U MINUS
                if (newReservation > 0) {
                    if (newReservation <= parseInt(filterPerformance[j].kolicina)) {
                        filterPerformance[j].rezervacija = newReservation;
                    reservationsArray.push(filterPerformance[j]);
                        } else {
                            //treba da izbaci gresku za kolicinu 
                        alert( errorAlertQuantity + filterPerformance[j].kolicina + tickets);
                        console.log(filterPerformance[j].kolicina);
                        console.log(newReservation);
                        newReservation = 0;
                        }       
                }
            }
            console.log(reservationsArray);
        
            //vadi niz iz local S 'korpa' i parsira u JavaScript, smesta u promenljivu korpaIzStoridza
            var shopingCardFromStorage = JSON.parse(localStorage.getItem('korpa')) || [];
            //merdzujemo niz korpaIzStoridza i nizRezervacija i smestamo u niz novaKorpa
            var newShopingCard = shopingCardFromStorage.concat(reservationsArray);
            console.log(newShopingCard);
            //smesta niz novaKorpa u localStoride
            localStorage.setItem('korpa', JSON.stringify(newShopingCard));
            reservationsArray = [];
            for (let j = 0; j < filterPerformance.length; j++) {
                document.getElementById('rezervacija' + j).value = 0;
            }
        
        }    
    
      
function quantityUp(x){
   let quantity = document.getElementById(x).value;   
   document.getElementById(x).value =++quantity;
   console.log(quantity);
}
function quantityDown(x){
    let quantity = document.getElementById(x).value;
    if(quantity >= 1){
        document.getElementById(x).value = --quantity;
    }    
    console.log(quantity);
}   

$(document).ready(function() {
    $('.shops').click(function() {
        $('.shops-img').animate({
            height: '50px',
            width: '50px'
        });
        $('.shops').animate({
            margin: '0px'
        })
    });
});


  
  