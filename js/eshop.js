  
var eShopMessage = document.getElementById('eshop-message');
var navBg = document.querySelector('.nav-bg');
let store = document.getElementById('open-store');
let h2 = document.getElementById('eshop-header');
let arrayOfDictionarySerbian = [' Dobro došli u naš e-shop.<br> Da biste počeli proces kupovine ulaznice, molimo Vas da odaberete kategoriju.' ,
                                "<h1 class='h1-message' id='guest-user'>Da biste koristili E-shop morate biti registrovani korisnik. Molimo Vas da se registrujete. <br><a class='guest-user-link' href='../index.html'>Vratite se na prijavljivanje</a> </h1>" , 
                                "Balet", "Predstava", "Opera", "Filharmonija", "AUTOR: ", "SCENA: ", "CENA: ", "Količina", 
                                "Pokušavate da rezervišete više ulaznica nego što ima na lageru. Možete da kupite maksimalno ",
                                " ulaznica."]
let arrayOfDictionaryEnglish = [' Welcome to our e-shop. <br> To start the ticket purchase process, please select a category.' , 
                                "<h1 class = 'h1-message' id = 'guest-user'> You must be a registered user to use the E-shop. Please register.<br><a class='guest-user-link' href='../index.html'>Go to Sign In</a> </h1>",
                                "Ballet", "Drama", "Opera", "Philharmonic", "AUTHOR: ", "SCENE: ", "PRICE: ", "Quantity", 
                                "You are trying to purchase more tickets that we have on stock. You can buy max ",
                                " tickets."]

let currentlyLoggedIn =JSON.parse(sessionStorage.getItem('user')) ;   
let sessionLanguage = JSON.parse(sessionStorage.getItem('lang'));

function hideMessage(){
    document.getElementsByTagName("h1")[0].style.display = "none";
    document.getElementById("eshop-navigation").style.display = "inherit";
    
}

function animate(){                
    $('h1').show().animate({
        right: '30px',
        top: "60px",
        fontSize: "14px"
    }
    , (500));
}

function quantityUp(x){
    let quantity = document.getElementById(x).value;   
    document.getElementById(x).value =++quantity;   
 }
 function quantityDown(x){
     let quantity = document.getElementById(x).value;
     if(quantity >= 1){document.getElementById(x).value = --quantity;}      
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

 class Remove{
     static removePreSelection(){
        
        document.getElementById('reservation').removeAttribute('click');
        if(h2.style.display !== "none"){h2.style.display = "none";}
        if(eShopMessage.firstElementChild !== null){eShopMessage.removeChild(eShopMessage.firstElementChild)}
        
        let k = store.childNodes.length;
        if(store.firstElementChild !== null){          
            for(let i = 0; i < k ; i++){store.removeChild(store.childNodes[0]);}       
        }
    }
 }

//Language is defined 
class CLanguage{
    constructor(currentlyLanguage){
        this.currentlyLanguage = currentlyLanguage;
    }
    static getCLanguage(){        
        if(languageFromSession.currentlyLanguage === null){
            return 'en';
        }else{
            return languageFromSession.currentlyLanguage.language;
        }
    }

}

//variables are depending of language
class Dictionary{
    constructor(userMessage, guestMessage, ballet, drama, opera, philharmonic, author, scene, price, quantity, errorAlertQuantity, tickets ){
        this.userMessage = userMessage;
        this.guestMessage = guestMessage;
        this.ballet = ballet;
        this.drama = drama;
        this.opera = opera;
        this.philharmonic = philharmonic;
        this.author = author;
        this.scene = scene;
        this.price = price;
        this.quantity = quantity;
        this.errorAlertQuantity = errorAlertQuantity;
        this.tickets = tickets;
    }

    static getLanguage(language){
        if(language === 'sr'){
            console.log(dictionarySerbian)
         return dictionarySerbian    
        }else{
            console.log(dictionaryEnglish)
            return dictionaryEnglish
        }
    }

}

class UIFilter {
    displayFilterByType(){
        document.getElementById('eshop-buttons').style.display = "flex";
    document.getElementById('signOut').style.display = "block";
    document.getElementById('eshop-header').style.display = "block";
         eShopMessage.innerHTML = `<h1 class="h1-message" id="welcome-user" onclick="hideMessage()">
                 ${currentlyLoggedIn.name + ' ' + currentlyLoggedIn.surname + languageShop.userMessage}</h1>`;
            
    var shops = `
    <div id="shops">
        <div class="shops">
            <img class="shops-img" 
                 id="balet" 
                 alt="balet" 
                 src="../images/my-icons-collection (1)/svg/ballerina-white.svg">
            <h4>
                ${languageShop.ballet}
            </h4>
        </div>
        <div class="shops">
            <img class="shops-img" 
                 id="drama" 
                 alt="drama" 
                 src="../images/my-icons-collection (1)/svg/drama-white.svg">
            <h4>
                ${languageShop.drama}
            </h4>
        </div>
        <div class="shops">
            <img class="shops-img" 
                 id="opera" 
                 alt="opera" 
                 src="../images/my-icons-collection (1)/svg/opera-white.svg">
            <h4>
                ${languageShop.opera}
            </h4>
        </div>
        <div class="shops" >
            <img class="shops-img" 
                 id="filharmonija" 
                 alt="filharmonija" 
                 src="../images/my-icons-collection (1)/svg/conductor-white.svg">
                 <h4>
                    ${languageShop.philharmonic}
                 </h4>
        </div>
    </div>`;
    
    $("#eshop-container").append(shops);
    var shopArray = document.getElementsByClassName('shops-img');
    
        shopArray[0].addEventListener("click", ()=>{openStore("Balet", "balet", languageShop)} );
        shopArray[1].addEventListener("click", ()=>{openStore("Predstava", "drama", languageShop)} );
        shopArray[2].addEventListener("click", ()=>{openStore("Opera", "opera", languageShop)} );
        shopArray[3].addEventListener("click", ()=>{openStore("Filharmonija", "filharmonija", languageShop)} );

        
    }
}
 
//display filter performances by type
class UIItems{
    displayPerformances(filterPerformance, performanceType){
         let i = 0;
       filterPerformance.forEach(element => {            
        let storeArticle = document.createElement('div');    
        storeArticle.setAttribute('class' , 'item-card') ;              
        storeArticle.innerHTML = `
        <img id="${performanceType + (i + 1)}" 
             class="items-img" 
             alt="${performanceType + (i + 1)} "
             src="../images/webp/${element.image}">
            <div class = "items-text">
                <p class = "items-name">
                    ${element.naziv}
                </p>
                <p class="items-author">
                    ${languageShop.author + element.autor}
                </p>
                <p class = "items-scene">
                    ${languageShop.scene + element.scena}
                </p>
                <p class = "items-price">
                    ${languageShop.price}
                    <span >
                     ${element.cena}RSD 
                    </span> 
                </p> 
                <p>
                    ${languageShop.quantity} 
                </p>
                <button class="items-quantity-button" 
                        onclick="quantityDown('rezervacija${i}')">
                    <img alt="arrow down" 
                         class="arrow-img" 
                         src="../images/arrow-down-white.svg" >
                </button> 
                <input type="number" value = "0" min="0" max="20" placeholder="0" id="rezervacija${i}">
                <button class="items-quantity-button" 
                        onclick="quantityUp('rezervacija${i}')">
                    <img alt="arrow up" class="arrow-img" src="../images/arrow-up-white.svg" >
                </button>
            </div>`;
        store.appendChild(storeArticle);
        i++;
       });
    }
}



//Initialisation of objects
const languageFromSession = new CLanguage(sessionLanguage);
const dictionarySerbian = new Dictionary(...arrayOfDictionarySerbian);
const dictionaryEnglish = new Dictionary(...arrayOfDictionaryEnglish);


const  currentlyLanguage = CLanguage.getCLanguage(languageFromSession);
const languageShop = Dictionary.getLanguage(currentlyLanguage);
const uiFilter = new UIFilter();
const uiItems = new UIItems();


class ShowEShopByUser{
    showEShop(currentlyLoggedIn){
        navBg.style.display = "flex";
        (currentlyLoggedIn!== null)?
            ((currentlyLoggedIn.status === "1" || currentlyLoggedIn.status === "0")?
            uiFilter.displayFilterByType() : eShopMessage.innerHTML = languageShop.guestMessage)
        : 
        eShopMessage.innerHTML = languageShop.guestMessage; 
                 
         
         animate();
    }
}

const showEShopByUser = new ShowEShopByUser();
showEShopByUser.showEShop(currentlyLoggedIn);


    
    function openStore(performanceTypeTitle, performanceType, languageShop) {
       
        Remove.removePreSelection();

        document.getElementById('balet').src = "../images/my-icons-collection (1)/svg/ballerina-white.svg";
        document.getElementById('drama').src = "../images/my-icons-collection (1)/svg/drama-white.svg";
        document.getElementById('opera').src = "../images/my-icons-collection (1)/svg/opera-white.svg";
        document.getElementById('filharmonija').src = "../images/my-icons-collection (1)/svg/conductor-white.svg";
               
        //storageOfPerformances izvlacimo iz localS
        let performances = JSON.parse(localStorage.getItem('tickets'));
            
        //Filtriramo po vrsti dogadjaja -balet  
        var filterPerformance = performances;
        document.getElementById(performanceType).setAttribute('src', `../images/my-icons-collection (1)/svg/${performanceType}.svg`)
        filterPerformance = performances.filter(
            function(newPerformance) {                
                if (newPerformance.vrsta == performanceTypeTitle) {                    
                    document.getElementById('active-store').innerHTML = newPerformance.vrsta;
                    return true;
                } else {
                    return false;
                }
            });       
         uiItems.displayPerformances(filterPerformance, performanceType);
    }      

    let reservation = document.getElementById('reservation');
        reservation.addEventListener('click', ()=>{createNewReservation(languageShop)}); 

        
    function createNewReservation(languageShop) {         
            let performances = JSON.parse(localStorage.getItem('tickets'));  
            console.log(performances)          
            //Filtriramo po vrsti dogadjaja  
            var filterPerformance = performances;
            var activePerformance = document.getElementById('active-store').innerHTML;            
            filterPerformance = performances.filter((newPerformance) => {
                if(newPerformance.vrsta == activePerformance){
                    return true
                }else{
                    return false
                }  
            });           
            console.log(filterPerformance)
            let reservationsArray = [];
            let j = 0;
            filterPerformance.forEach(element => {
                let newReservation = document.getElementById('rezervacija' + j).value;
                j++
                //DODALA USLOV DA NE MOZE DA ODE U MINUS
                if (newReservation > 0) {
                    if (newReservation <= parseInt(element.kolicina)) {
                        element.rezervacija = newReservation;
                        reservationsArray.push(element);
                        } else {                             
                        alert(languageShop.errorAlertQuantity + element.kolicina + languageShop.tickets);
                        newReservation = 0;
                        }       
                }
            });

            
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
    