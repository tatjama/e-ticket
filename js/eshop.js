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
            document.querySelector('.nav-bg').style.display = "flex";
            document.getElementById('omotac1').innerHTML = 
            '<h1 id="welcome-user">Dobro došli ' + currentlyLoggedIn.name + 
            ' ' + currentlyLoggedIn.surname +
            ' u nas e-shop.<br> Da biste počeli proces kupovine ulaznice, molimo Vas da odaberete kategoriju.' + '</h1>';
            var shops = '<div id="shops"><div class="shops"><img class="shops-img" id="balet" alt="balet" src="../images/my-icons-collection (1)/svg/ballerina-white.svg"><h4>Balet</h4></div><div class="shops"><img class="shops-img" id="drama" alt="drama" src="../images/my-icons-collection (1)/svg/drama-white.svg"><h4>Drama</h4></div><div class="shops"><img class="shops-img" id="opera" alt="opera" src="../images/my-icons-collection (1)/svg/opera-white.svg"><h4>Opera</h4></div><div class="shops" ><img class="shops-img" id="filharmonija" alt="filharmonija" src="../images/my-icons-collection (1)/svg/conductor-white.svg"><h4>Filharmonija</h4></div></div>';
            $("#eshop-container").append(shops);
            var shopArray = document.getElementsByClassName('shops-img');
            
                shopArray[0].addEventListener("click", function(){openStore("Balet", "balet", "balerina")} );
                shopArray[1].addEventListener("click", function(){openStore("Predstava", "drama", "drama")} );
                shopArray[2].addEventListener("click", function(){openStore("Opera", "opera", "opera")} );
                shopArray[3].addEventListener("click", function(){openStore("Filharmonija", "filharmonija", "filharmonija")} );
            
            //upisiBalet("Balet")
            animate();
            }else{
            console.log('gost');
            document.querySelector('.nav-bg').style.display = 'none';          
            document.getElementById('omotac1').innerHTML = 
            "<h1>Da biste koristili E-shop morate biti registrovani korisnik. Molimo Vas da se registrujete.</h1>"
            animate();
        }
        
    }else{ 
         console.log('neregistrovani korisnik');
         document.querySelector('.nav-bg').style.display = "none";            
         document.getElementById('omotac1').innerHTML = 
        "<h1>Da biste koristili E-shop morate biti registrovani korisnik. Molimo Vas da se registrujete.</h1>";
        animate();
     }
    
    }


    function openStore(x, y, z) {
        let omotac1 = document.getElementById('omotac1');
        if(omotac1.firstElementChild !== null){
            omotac1.removeChild(omotac1.firstElementChild)
        }
        document.getElementById('balet').src = "../images/my-icons-collection (1)/svg/ballerina-white.svg";
        document.getElementById('drama').src = "../images/my-icons-collection (1)/svg/drama-white.svg";
        document.getElementById('opera').src = "../images/my-icons-collection (1)/svg/opera-white.svg";
        document.getElementById('filharmonija').src = "../images/my-icons-collection (1)/svg/conductor-white.svg";
        
        
        let store = document.getElementById('open-store');
        //store.innerHTML = '';
        let k = store.childNodes.length;
        if(store.firstElementChild !== null){          
            for(let i = 0; i < k ; i++){
                store.removeChild(store.childNodes[0]);
            }       
    }
        
        //nizDogadjaja izvlacimo iz localS
        let performances = JSON.parse(localStorage.getItem('bazadogadjaja'));
    
        //Filtriramo po vrsti dogadjaja -balet  
        var filterPerformance = performances;
        console.log(y);
        document.getElementById(y).setAttribute('src', '../images/my-icons-collection (1)/svg/' + y + '.svg')
        filterPerformance = performances.filter(
            function(newPerformance) {
                if (newPerformance.vrsta == x) {
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
                                    ' "src="../images/' + z + (i + 1) + '.jpg"><div class = "items-text"><p>' + 
                                    filterPerformance[i].naziv + 
                                    '</p><p class="items-author" style="text-transform:capitalize">' + filterPerformance[i].autor + 
                                    '</p><p>  Cena: <span>' + filterPerformance[i].cena + 
                                    ' RSD </span> </p> <p>Količina: </p> <input type="number" min="0" max="20" placeholder="0" id="rezervacija' +
                                     i + '"></div>';
            
            store.appendChild(storeArticle);           
        }        
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

let reservation = document.getElementById('reservation');
reservation.addEventListener('click', makeNewReservation);

function makeNewReservation() {

    //nizDogadjaja izvlacimo iz localS
    let performances = JSON.parse(localStorage.getItem('bazadogadjaja'));

    //Filtriramo po vrsti dogadjaja -balet  
    var filterPerformance = performances;

    filterPerformance = performances.filter(
        function(newPerformance) {
            if (newPerformance.vrsta == "Balet") {
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