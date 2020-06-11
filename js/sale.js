var eShopMessage = document.getElementById('sale-message');
var navBg = document.querySelector('.nav-bg');

createSale();

function createSale() {
    //session storage 
    var currentlyLoggedIn =JSON.parse(sessionStorage.getItem('user')) ;          
     
     if(sessionStorage.getItem('user')!== null){ 

        if(currentlyLoggedIn.status ===  "0"){
            console.log(currentlyLoggedIn);
            navBg.style.display = "flex";
            eShopMessage.innerHTML = 
            '<h1 id="welcome-user">Dobro došli ' + currentlyLoggedIn.name + 
            ' ' + currentlyLoggedIn.surname +
            ' u prodavnicu za administratore.<br>Koristite filtere da biste lakše pronašli ulaznice.' + '</h1>';
            var shops = '<div id="shops"><div class="shops"><img class="shops-img" id="balet" alt="balet" src="../images/my-icons-collection (1)/svg/ballerina-white.svg"><h4>Balet</h4></div><div class="shops"><img class="shops-img" id="drama" alt="drama" src="../images/my-icons-collection (1)/svg/drama-white.svg"><h4>Predstava</h4></div><div class="shops"><img class="shops-img" id="opera" alt="opera" src="../images/my-icons-collection (1)/svg/opera-white.svg"><h4>Opera</h4></div><div class="shops" ><img class="shops-img" id="filharmonija" alt="filharmonija" src="../images/my-icons-collection (1)/svg/conductor-white.svg"><h4>Filharmonija</h4></div></div>';
            $("#sale-container").append(shops);
            var shopArray = document.getElementsByClassName('shops-img');
            
                shopArray[0].addEventListener("click", function(){openStore("Balet", "balet", "balerina")} );
                shopArray[1].addEventListener("click", function(){openStore("Predstava", "drama", "drama")} );
                shopArray[2].addEventListener("click", function(){openStore("Opera", "opera", "opera")} );
                shopArray[3].addEventListener("click", function(){openStore("Filharmonija", "filharmonija", "filharmonija")} );
            
            //upisiBalet("Balet")
            animate();
            }else{
            console.log('gost');
            navBg.style.display = 'none';          
            eShopMessage.innerHTML = 
            "<h1>Nemate administratorska ovlašćenja za prodaju ulaznica!</h1>"
            animate();
        }
        
    }else{ 
         console.log('neregistrovani korisnik');
         navBg.style.display = "none";            
         eShopMessage.innerHTML = 
        "<h1>Da biste koristili prodavnicu morate biti administrator. Molimo Vas da se ulogujete.</h1>";
        animate();
     }    
    }

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

    function openStore(x, y, z) {
        let h2 = document.getElementById('sale-header');
        document.getElementById('reservation').removeAttribute('click');
        if(h2.style.display !== "none"){
            h2.style.display = "none";
        }
        if(eShopMessage.firstElementChild !== null){
            eShopMessage.removeChild(eShopMessage.firstElementChild)
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
                                    ' "src="../images/' + z + (i + 1) + 
                                    '.jpg"><div class = "items-text"><p class = "items-name">' + 
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
    
     
     
       
     
    



//otvara prozor za selektovanje filtera i ponistava prethodno zadat filter
function filter() {
    let sFilter = document.getElementById('selektujFilter');
    sFilter.style.display = 'initial';
    sFilter.value = '';

}



//funkcija primenjuje filtere
/*Filtrira tebele dogadjaja po 4 osnova.
- 1. Vrsta dogadjaja
 - 2. Mesto dogadjaja(scena)
 - 3. Kolicina veca od nula
 - 4. po nazivu dogadjaja*/
function filtriraj() {
    //nizDogadjaja izvlacimo iz localS
    let dogadjanja = JSON.parse(localStorage.getItem('bazadogadjaja'));
    let filterVrsta = document.getElementById('filterVrsta').value;
    let filterScena = document.getElementById('filterScena').value;
    let kolicinaKarata = document.getElementById('kolicinaKarata');
    kolicinaKarata = parseInt(kolicinaKarata);
    var karakter = document.getElementById('karakter').value.toUpperCase();

    //Filtriramo po vrsti dogadjaja. Pocetnom nizu menjamo ime u novi niz da bismo rezultat uvek
    // trazili po imenu novog niza, cak i kada ne primenimo filter jer nije pozvan 
    var filterVrstaDogadjaja = dogadjanja;
    if (filterVrsta != '') {
        filterVrstaDogadjaja = dogadjanja.filter(
            function(noviDogadjaj) {
                if (noviDogadjaj.vrsta == filterVrsta) {
                    return true;
                } else {
                    return false;
                }
            });
    }

    //filter za Scenu. Funkcija filter
    var filterVrstaScene = filterVrstaDogadjaja;
    if (filterScena != '') {
        filterVrstaScene = filterVrstaDogadjaja.filter(
            function(noviDogajaj) {
                if (noviDogajaj.scena == filterScena) {
                    return true;
                } else {
                    return false;
                }
            });
    }

    //filter kolicina veca od 0. Proveravamo da li je cekirana opcija kolicina veca od nule
    //iz niza dogadjaja ugradjenom metodom filter uklanjamo dogadjaje sa kolicinom manjom od 0
    var imaKarata = filterVrstaScene;
    if (kolicinaKarata.checked) {
        imaKarata = filterVrstaScene.filter(function(lager) {
            let stanjeLagera = parseInt(lager.kolicina);
            if (stanjeLagera > 0) {
                return true;
            } else {
                return false;
            }
        });
    }

    //filter po ukljucenim slovima. U input polje ubacimo proizvoljan broj karaktera
    filterPoImenu = imaKarata;

    if (karakter == '') {} else {
        var filterPoImenu = [];
        for (let i = 0; i < imaKarata.length; i++) {

            var cha = (imaKarata[i].naziv).indexOf(karakter);

            if (cha >= 0) {
                filterPoImenu.push(imaKarata[i]);
            }
        }
    }

    console.log(filterPoImenu);

    //smesta filtrirani niz u localStoridge
    localStorage.removeItem('filter');
    localStorage.setItem('filter', JSON.stringify(filterPoImenu));

    //pozvamo funkciju za iscrtavanje tabele sa filtriranim dogadjajima
    tabelaFiltriranihDogadjaja(filterPoImenu);

    //Prebrojavanje dogadjaja koji su filtrirani
    if (document.getElementById('prebroj').checked) {
        var nizPrebroj = filterPoImenu.map(
            function(elemenat) {
                let suma = 1;
                for (let i = 0; i < filterPoImenu.length; i++) {
                    suma = suma + i;
                    return suma;
                }
            }
        );

        //ispis broja prebrojanih dogadjaja        
        let tabela = document.getElementById('tabelaFiltriranihDogadjaja1');
        let ispisBrojaDogadjaja = document.createElement('p');
        ispisBrojaDogadjaja.innerHTML = 'Ukupan broj dogadjaja po  filterima je ' + nizPrebroj.length;
        tabela.appendChild(ispisBrojaDogadjaja);
    }

    //Funkcija koja pravi tabelu sa filtriranim dogadjajima
    function tabelaFiltriranihDogadjaja(x) {
        let tabela = document.getElementById('tabelaFiltriranihDogadjaja1');
        tabela.style.display = 'initial';

        x.forEach(
            function(y) {
                let red = document.createElement('tr');

                for (i in y) {
                    let celija = document.createElement('td');
                    celija.innerHTML = y[i];
                    red.appendChild(celija);
                }
                tabela.appendChild(red);
            });
        return x;
    }
    //kraj funkcije tabela filtriranih dogadjaja    
}
//kraj funkcije filtriraj