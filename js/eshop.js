var eShopMessage = document.getElementById('eshop-message');
var navBg = document.querySelector('.nav-bg');

createEShop();

function createEShop() {
    //session storage 
    var currentlyLoggedIn =JSON.parse(sessionStorage.getItem('user')) ;    
    function animate(){                
        $('h1').show().animate({
            right: '10px',
            top: "60px",
            fontSize: "14px"
        }, (500)).queue(function() {
            $(this).css({
                "color": "white",
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
            '<h1 id="welcome-user">Dobro došli ' + currentlyLoggedIn.name + 
            ' ' + currentlyLoggedIn.surname +
            ' u naš e-shop.<br> Da biste počeli proces kupovine ulaznice, molimo Vas da odaberete kategoriju.' + '</h1>';
            var shops = '<div id="shops"><div class="shops"><img class="shops-img" id="balet" alt="balet" src="../images/my-icons-collection (1)/svg/ballerina-white.svg"><h4>Balet</h4></div><div class="shops"><img class="shops-img" id="drama" alt="drama" src="../images/my-icons-collection (1)/svg/drama-white.svg"><h4>Predstava</h4></div><div class="shops"><img class="shops-img" id="opera" alt="opera" src="../images/my-icons-collection (1)/svg/opera-white.svg"><h4>Opera</h4></div><div class="shops" ><img class="shops-img" id="filharmonija" alt="filharmonija" src="../images/my-icons-collection (1)/svg/conductor-white.svg"><h4>Filharmonija</h4></div></div>';
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
            "<h1>Da biste koristili E-shop morate biti registrovani korisnik. Molimo Vas da se registrujete.</h1>"
            animate();
        }
        
    }else{ 
         console.log('neregistrovani korisnik');
         navBg.style.display = "none";            
         eShopMessage.innerHTML = 
        "<h1>Da biste koristili E-shop morate biti registrovani korisnik. Molimo Vas da se registrujete.</h1>";
        animate();
     }
    
    }


    function openStore(x, y) {
        let store = document.getElementById('open-store');
        removePreSelection();

        document.getElementById('balet').src = "../images/my-icons-collection (1)/svg/ballerina-white.svg";
        document.getElementById('drama').src = "../images/my-icons-collection (1)/svg/drama-white.svg";
        document.getElementById('opera').src = "../images/my-icons-collection (1)/svg/opera-white.svg";
        document.getElementById('filharmonija').src = "../images/my-icons-collection (1)/svg/conductor-white.svg";
        
        
        //nizDogadjaja izvlacimo iz localS
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
                                    ' "src="../images/' + filterPerformance[i].image + 
                                    '"><div class = "items-text"><p class = "items-name">' + 
                                    filterPerformance[i].naziv + 
                                    '</p><p class="items-author">AUTOR: ' + filterPerformance[i].autor + 
                                    '</p><p class = "items-scene">SCENA: ' + filterPerformance[i].scena + 
                                    '</p><p class = "items-price">  CENA: <span >' + filterPerformance[i].cena + 
                                    ' RSD </span> </p> <p>Količina: </p><button class="items-quantity-button" onclick="quantityDown('+ 
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
            console.log();
            //nizDogadjaja izvlacimo iz localS
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
                    //nizFiltriranihDogadjaja[j].kolicina = parseInt(nizFiltriranihDogadjaja[j].kolicina);
                    if (newReservation > parseInt(filterPerformance[j].kolicina)) {
                        //treba da izbaci gresku za kolicinu 
                        alert(
                            "lager ne moze da ide u minus. Rezervisete vise ulaznica nego sto ima na lageru.Mozete da kupite maksimalno " +
                            filterPerformance[j].kolicina + " ulaznica");
                        console.log(filterPerformance[j].kolicina);
                        console.log(newReservation);
                        newReservation = 0;
                    }
                    filterPerformance[j].rezervacija = newReservation;
                    reservationsArray.push(filterPerformance[j]);
        
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


  
  