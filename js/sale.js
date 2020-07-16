let eShopMessage = document.getElementById('sale-message');
let navBg = document.querySelector('.nav-bg');
let store = document.getElementById('open-store');
let h2 = document.getElementById('sale-header');
let activeSearch = document.getElementById('active-search');
let activeScene = document.getElementById('active-scene');
let activeStore = document.getElementById('active-store');

let arrayOfDictionarySerbian = [' dobro došli  u prodavnicu.<br>Koristite filtere da biste lakše pronašli ulaznice. </h1>' ,
                                "<h1 class='h1-message' id='guest-user' onclick='hideMessage()'>Da biste koristili E-shop morate biti registrovani korisnik. Molimo Vas da se registrujete.</h1>" , 
                                "Balet", "Predstava", "Opera", "Filharmonija", "Velika scena", "Mala scena",
                                "Dogadjaji čije ime sadrži karaktere: ", "Količina veća od 0: ", "Prebroj filtrirane događaje: ",
                               "AUTOR: ", "SCENA: ", "CENA: ", "DATUM:",  "LAGER:",  "Količina:", 
                                "Pokušavate da rezervišete više ulaznica nego što ima na lageru. Možete da kupite maksimalno ",
                                " ulaznica."]
 let arrayOfDictionaryEnglish = [' wellcome to the shop.<br> You can use filters to make easy to find tickets for performances. </h1>' , 
                                "<h1 class = 'h1-message' id = 'guest-user' onclick = 'hideMessage ()'> You must be a registered user to use the E-shop. Please register. </h1>",
                                "Ballet", "Drama", "Opera", "Philharmonic", "Main scene", "Alternative scene",
                                " Performances with characters in title: ", " Quantity more then 0",
                                "Count filtered performances: ", "AUTHOR: ", "SCENE: ", "PRICE:", "DATE:", "STOCK: ", "Quantity:", 
                                "You are trying to purchase more tickets that we have on stock. You can buy max ",
                                " tickets."]

const currentlyLoggedIn =JSON.parse(sessionStorage.getItem('user')) ;
const sessionLanguage = JSON.parse(sessionStorage.getItem('lang'));

function hideMessage(){
    document.getElementsByTagName("h1")[0].style.display = "none"
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

$(document).ready(function() {
    $('.shops').click(function() {
        $('.shops-img').animate({
            height: '40px',
            width: '40px'
        });
        $('.shops').animate({
            margin: '0px'
        })
    });
});
$(document).ready(function() {
    $('.scene').click(function() {
        $('.scene-img').animate({
            height: '40px',
            width: '40px'
        });
        $('.scene').animate({
            margin: '10px 0px'
        })
    });
});


function quantityUp(x){
   let quantity = document.getElementById(x).value;   
   document.getElementById(x).value =++quantity;
}
function quantityDown(x){
    let quantity = document.getElementById(x).value;
    if(quantity >= 1){
        document.getElementById(x).value = --quantity;
    }    
} 



class Remove{
    // brisanje predstava koje su prethodno selektovanje
    static removePreSelection(){    
        quantityField.innerHTML = '';
        document.getElementById('reservation').removeAttribute('click');
        if(h2.style.display !== "none"){
            h2.style.display = "none";
        }
        if(eShopMessage.firstElementChild !== null){
            eShopMessage.removeChild(eShopMessage.firstElementChild)
        }
        let k = store.childNodes.length;
        if(store.firstElementChild !== null){          
            for(let i = 0; i < k ; i++){
                store.removeChild(store.childNodes[0]);
            }       
    }
    }

    static removeAllFilters(){
        Remove.removePreSelection();
        activeStore.innerHTML = '';
        activeScene.innerHTML = '';
        activeSearch.innerHTML = '';
    
        ballet.src = "../images/my-icons-collection (1)/svg/ballerina-white.svg";
        drama.src = "../images/my-icons-collection (1)/svg/drama-white.svg";
        opera.src = "../images/my-icons-collection (1)/svg/opera-white.svg";
        concert.src = "../images/my-icons-collection (1)/svg/conductor-white.svg";
        
        bigScene.src = "../images/velika-scena-white.svg";
        smallScene.src = "../images/mala-scena-white.svg";
    
        character.value = "";
        filterImage.src =  "../images/search-white.svg";
        quantityOfItems.checked = false;
        countItems.checked = false;
    }
}
 
document.getElementById('clear-button').addEventListener('click', Remove.removeAllFilters);




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



class Dictionary{
    constructor(adminMessage, guestMessage, ballet, drama, opera, philharmonic, main, alternative, filterCha, 
        filterQua, filterCou, author, sceneType, price, date, quantity, reserve, errorAlertQuantity, tickets){
        this.adminMessage = adminMessage;
        this.guestMessage = guestMessage;
        this.ballet = ballet;
        this.drama = drama;
        this.opera = opera;
        this.philharmonic = philharmonic;
        this.main = main;
        this.alternative = alternative;
        this.filterCha = filterCha;
        this.filterQua = filterQua;
        this.filterCou = filterCou;
        this.author = author;
        this.sceneType = sceneType;
        this.price = price;
        this.date = date;
        this.quantity = quantity;
        this.reserve = reserve;
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

const languageFromSession = new CLanguage(sessionLanguage);
const  currentlyLanguage = CLanguage.getCLanguage(languageFromSession);
const dictionaryEnglish = new Dictionary(...arrayOfDictionaryEnglish);
const dictionarySerbian = new Dictionary(...arrayOfDictionarySerbian);
const languageShop = Dictionary.getLanguage(currentlyLanguage);


createSale(currentlyLanguage);
// function create filter-options
function createSale(x) {   
    console.log(x);   
     
     if(sessionStorage.getItem('user')!== null){ 

        if(currentlyLoggedIn.status == "0"){
            console.log(currentlyLoggedIn);
            navBg.style.display = "flex";
            eShopMessage.innerHTML = 
            '<h1 class="h1-message" id="welcome-user" onclick="hideMessage()">' 
            + currentlyLoggedIn.name 
            + ' ' + currentlyLoggedIn.surname 
            + languageShop.adminMessage;
            var shops = `
            <div id="shops">
                <div class="shops">
                    <img class="shops-img" id="balet" alt="balet" src="../images/my-icons-collection (1)/svg/ballerina-white.svg">
                    <h4>${languageShop.ballet}</h4>
                </div>
                <div class="shops">
                    <img class="shops-img" id="drama" alt="drama" src="../images/my-icons-collection (1)/svg/drama-white.svg">
                    <h4>${languageShop.drama}</h4>
                </div>
                <div class="shops">
                    <img class="shops-img" id="opera" alt="opera" src="../images/my-icons-collection (1)/svg/opera-white.svg">
                    <h4>${languageShop.opera}</h4>
                </div>
                <div class="shops" >
                    <img class="shops-img" id="filharmonija" alt="filharmonija" src="../images/my-icons-collection (1)/svg/conductor-white.svg">
                    <h4>${languageShop.philharmonic}</h4>
                </div>
            </div>`;
           
            var scene = `<div id="filter-scene"><hr/>
            <div id="scenes">
                <div class = "scene">
                    <img class="scene-img" id="velika-scena" alt="velika scena" src="../images/velika-scena-white.svg">
                    <h4>${languageShop.main}</h4>
                </div>
                <div class="scene">
                    <img class="scene-img" id="mala-scena" alt="mala scena" src="../images/mala-scena-white.svg">
                    <h4>${languageShop.alternative}</h4>
                </div>
                <div class="scene">
                    <div id="search-filter">
                        <div class="filter-box">
                            <input type="text" onchange = "filterSearch()" id="karakter">
                            <img class="filter-img" src="../images/search-white.svg">
                            <label for="karakter"> <h3>${languageShop.filterCha}</h3></label>
                        </div>
                        <div class="filter-box">                            
                            <input type="checkbox" id="kolicinaKarata">
                            <label for="kolicinaKarata"> <h3>${languageShop.filterQua}</h3></label>
                        </div>
                        <div class="filter-box">                            
                            <input type="checkbox" id="prebroj">
                            <label for="prebroj"> <h3>${languageShop.filterCou}</h3></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>`            
            
            $("#sale-container").append(shops);
            $('#sale-container').append(scene);
            var shopArray = document.getElementsByClassName('shops-img');
            
                shopArray[0].addEventListener("click", function(){openStore("Balet", "balet")} );
                shopArray[1].addEventListener("click", function(){openStore("Predstava", "drama")} );
                shopArray[2].addEventListener("click", function(){openStore("Opera", "opera")} );
                shopArray[3].addEventListener("click", function(){openStore("Filharmonija", "filharmonija")} );
           
            var sceneArray = document.getElementsByClassName('scene-img');

                sceneArray[0].addEventListener("click",function(){filterScene("velika-scena", "Velika scena")});
                sceneArray[1].addEventListener("click", function(){filterScene("mala-scena", "Mala scena")});

            //upisiBalet("Balet")
            animate();
            }else{
            console.log('gost');
            navBg.style.display = 'none';          
            eShopMessage.innerHTML = 
            "<h1 class='h1-message' >Nemate administratorska ovlašćenja za prodaju ulaznica!</h1>"
            animate();
        }        
    }else{ 
         console.log('neregistrovani korisnik');
         navBg.style.display = "none";            
         eShopMessage.innerHTML = 
        `<h1 id='guest-user' class='h1-message' onclick='hideMessage()'>${guestMessage}</h1>`;
        animate();
     }    
    }  

    //variable

    let bigScene = document.getElementById('velika-scena');
    let smallScene = document.getElementById('mala-scena');
    let ballet = document.getElementById('balet');
    let opera = document.getElementById('opera');
    let drama = document.getElementById('drama');
    let concert = document.getElementById('filharmonija');
    let character = document.getElementById('karakter');
    let quantityField = document.getElementById('quantity');
    let countItems = document.getElementById('prebroj');
    let quantityOfItems = document.getElementById('kolicinaKarata');
    let filterImage = document.querySelector('.filter-img');

// filter po karakterima
    function filterSearch(){
        Remove.removePreSelection();
        let karakter = character.value.toUpperCase();
        console.log(karakter)
        activeSearch.innerHTML = karakter;
        filterImage.setAttribute('src', '../images/search.svg');
    }

// filter po vrsti scene
    function filterScene(x, y){
        Remove.removePreSelection();
        bigScene.src = "../images/velika-scena-white.svg";
        smallScene.src = "../images/mala-scena-white.svg";
        document.getElementById(x).setAttribute('src', '../images/' + x + '.svg');
        activeScene.innerHTML = y;        
    }

//filter po vrsti dogadjaja
    function openStore(x, y) {        
        Remove.removePreSelection();        
        ballet.src = "../images/my-icons-collection (1)/svg/ballerina-white.svg";
        drama.src = "../images/my-icons-collection (1)/svg/drama-white.svg";
        opera.src = "../images/my-icons-collection (1)/svg/opera-white.svg";
        concert.src = "../images/my-icons-collection (1)/svg/conductor-white.svg";        
        activeStore.innerHTML = x;  
        document.getElementById(y).setAttribute('src', `../images/my-icons-collection (1)/svg/${y}.svg`);       
       }      
  
// main function filter      
  function doFilter(){
      Remove.removePreSelection();
     let arrayOfPerformances = JSON.parse(localStorage.getItem('tickets'));
     let typeOfPerformance = activeStore.innerHTML;
     let typeOfScene = activeScene.innerHTML;
     let ticketStock = quantityOfItems.checked;
     let characters = activeSearch.innerHTML;
     let count = document.getElementById('prebroj').checked;
       
    //filter by type of performance
      let filterTypeOfPerformance = arrayOfPerformances;
      if(typeOfPerformance !==''){
          filterTypeOfPerformance = arrayOfPerformances.filter(
              function(newPerformance){
                  if(newPerformance.vrsta ==typeOfPerformance){
                      return true;
                  } else {
                      return false;
                  }
              });
      }
      // filter by type of scene
      let filterTypeOfScene = filterTypeOfPerformance;
      if (typeOfScene !== ''){
          filterTypeOfScene = filterTypeOfPerformance.filter(
              function(newPerformance){
                  if (newPerformance.scena == typeOfScene){
                      return true
                  } else {
                      return false
                  }
              });
      }
// filter if quantity is more than 0. We check is it checked option more than 0
// From array of dogadjanja with metod filter remove performance with quontity <= 0
      let ticketExist = filterTypeOfScene;
      if(ticketStock) {
          ticketExist = filterTypeOfScene.filter(function(stock){
                let quantityStock = parseInt(stock.kolicina);
                console.log(quantityStock);
                if(quantityStock > 0) {
                    return true;
                } else {
                    return false;
                }
          });
      }
      
      // filter by characters. On Input field write some characters
      filterByCharacters = ticketExist;
      if(characters == ''){} else {
          // variabla have to be var to catch console.log down
          var filterByCharacters = [];
          for (let i = 0; i < ticketExist.length; i++) {
            var cha = (ticketExist[i].naziv).indexOf(characters);
            if (cha >= 0) {
                filterByCharacters.push(ticketExist[i]);
            }
        }       
      }
      
      console.log(filterByCharacters);
      // Put filtered array in localStorage
    localStorage.removeItem('filter');
    localStorage.setItem('filter', JSON.stringify(filterByCharacters));

    //Call function for rendering table for filtered performances
    //tabelaFiltriranihDogadjaja(filterByCharacters);//- table version
    showFilteredItems(filterByCharacters);

    //Counting filtered performances 
    if (count) {
       var  arrayCount = filterByCharacters.map(
            function(elemenat){
                let sum = 1;
                for (let i = 0; i < filterByCharacters.length; i++){
                    sum = sum + i;
                    return sum;
                }
            });
        // render sum of qouted performances         
        quantityField.innerHTML = `Izlistan je ${arrayCount.length} događaj.`;      
    }
  }  
// end of function doFilter()

//function render filtered items
function showFilteredItems(x){
    for (let i = 0; i < x.length; i++) {
        //refaktorizacija  
        let performanceType;
        let showTypeOfPerformance = x[i].vrsta;
       // console.log(showTypeOfPerformance)
        switch(showTypeOfPerformance){
            case "Balet": 
                performanceType = "balet";
                break;
            case "Predstava":
                performanceType = "drama";
                break;
            case "Opera":
                performanceType = "opera";
                break;
            case "Filharmonija":
                performanceType = "filharmonija" ;
                break;
        }   
        
        let storeArticle = document.createElement('div');    
        storeArticle.setAttribute('class' , 'item-card') ;              
        storeArticle.innerHTML = `
        <img    id="${performanceType+(i+1)}" 
                class="items-img"   
                alt="${performanceType+(i+1)}" 
                src="../images/webp/${x[i].image}">
        <div    class = "items-text">
            <p  class = "items-name" id = "${i}">
                 ${x[i].naziv}
            </p>
            <p class="items-author">
                ${languageShop.author+x[i].autor}
            </p>
            <p class = "items-scene"> 
                ${languageShop.sceneType + x[i].scena}
            </p>
            <p class = "items-stock">
                ${languageShop.quantity}
                <span id="stock${i}">
                ${x[i].kolicina}
                </span>
            </p>
            <p class = "items-date">  
                ${languageShop.date + x[i].datum}
            </p>
            <p class = "items-price"> 
                ${languageShop.price} 
                <span >
                    ${x[i].cena} RSD 
                </span> 
            </p> 
            <p>
                ${languageShop.reserve}
            </p>
            <button class="items-quantity-button" 
                    onclick="quantityDown('rezervacija${i}')">
                <img alt="arrow down" 
                     class="arrow-img" 
                     src="../images/arrow-down-white.svg" >
            </button> 
            <input type="number" 
                   class="items-input" 
                   value = "0" 
                   min="0" 
                   max="20" 
                   placeholder="0" 
                   id="rezervacija${i}">
            <button class="items-quantity-button" 
                    onclick="quantityUp('rezervacija${i}')">
                <img alt="arrow up" 
                     class="arrow-img" 
                     src="../images/arrow-up-white.svg" >
            </button>
        </div>`;
        store.appendChild(storeArticle);                  
    }
}
//this function added new reservation in the shopping card
function makeNewReservation(){
    let filterArray = JSON.parse(localStorage.getItem('filter'));
    //console.log(filterArray);
    let newReservations = [];
    let reservation = {};
    let input = document.getElementsByClassName('items-input');    
    
    for( let i = 0; i < input.length; i++){
        
            if(input[i].value > 0){
             reservation = filterArray[i];
             reservation.rezervacija = input[i].value;
             console.log(reservation);
             console.log('stock' + i);
             if(parseInt(reservation.rezervacija)  <= parseInt(reservation.kolicina) ){
               newReservations.push(reservation);
             } else{
                
                 alert(
                    `Lager ne može da ide u minus. 
                    Rezervišete više ulaznica nego što ima na lageru.
                     Možete da rezervišete maksimalno ${reservation.kolicina} ulaznica`);
             }                       
        }        
    }
    console.log(newReservations);

    //vadi niz iz local S 'korpa' i parsira u JavaScript, smesta u promenljivu korpaIzStoridza
    var shopingCardFromStorage = JSON.parse(localStorage.getItem('korpa')) || [];
    //merdzujemo niz korpaIzStoridza i nizRezervacija i smestamo u niz novaKorpa
    var newShopingCard = shopingCardFromStorage.concat(newReservations);
    console.log(newShopingCard);
    //smesta niz novaKorpa u localStoride
    localStorage.setItem('korpa', JSON.stringify(newShopingCard));
    //brisanje input polja i vracanje na 0
    newReservations = [];
    for (let j = 0; j < input.length; j++) {
        document.getElementById('rezervacija' + j).value = 0;
    }
}

