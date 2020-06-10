 createSale();

function createSale() {
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

        if(currentlyLoggedIn.status ===  "0"){
            console.log(currentlyLoggedIn);
            navBg.style.display = "flex";
            eShopMessage.innerHTML = 
            '<h1 id="welcome-user">Dobro došli ' + currentlyLoggedIn.name + 
            ' ' + currentlyLoggedIn.surname +
            ' u naš e-shop.<br> Da biste počeli proces prodajee ulaznica, molimo Vas da odaberete filtere.' + '</h1>';
            var shops = '<div id="shops"><div class="shops"><img class="shops-img" id="balet" alt="balet" src="../images/my-icons-collection (1)/svg/ballerina-white.svg"><h4>Balet</h4></div><div class="shops"><img class="shops-img" id="drama" alt="drama" src="../images/my-icons-collection (1)/svg/drama-white.svg"><h4>Predstava</h4></div><div class="shops"><img class="shops-img" id="opera" alt="opera" src="../images/my-icons-collection (1)/svg/opera-white.svg"><h4>Opera</h4></div><div class="shops" ><img class="shops-img" id="filharmonija" alt="filharmonija" src="../images/my-icons-collection (1)/svg/conductor-white.svg"><h4>Filharmonija</h4></div></div>';
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