var eShopMessage = document.getElementById('sale-message');
var navBg = document.querySelector('.nav-bg');
var store = document.getElementById('open-store');

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
            ' u prodavnicu.<br>Koristite filtere da biste lakše pronašli ulaznice.' + '</h1>';
            var shops = `
            <div id="shops">
                <div class="shops">
                    <img class="shops-img" id="balet" alt="balet" src="../images/my-icons-collection (1)/svg/ballerina-white.svg">
                    <h4>Balet</h4>
                </div>
                <div class="shops">
                    <img class="shops-img" id="drama" alt="drama" src="../images/my-icons-collection (1)/svg/drama-white.svg">
                    <h4>Predstava</h4>
                </div>
                <div class="shops">
                    <img class="shops-img" id="opera" alt="opera" src="../images/my-icons-collection (1)/svg/opera-white.svg">
                    <h4>Opera</h4>
                </div>
                <div class="shops" >
                    <img class="shops-img" id="filharmonija" alt="filharmonija" src="../images/my-icons-collection (1)/svg/conductor-white.svg">
                    <h4>Filharmonija</h4>
                </div>
            </div>`;
            //var scene = '<div id="filter-scene"><hr style="color:aquamarine"/><h3>Izaberite scenu - opcija</h3><div id="scenes"><div class = "scene">Velika scena</div><div class="scene">Mala scena</div></div></div>'            
            var scene = `<div id="filter-scene"><hr/>
            <div id="scenes">
                <div class = "scene">
                    <img class="scene-img" id="velika-scena" alt="velika scena" src="../images/velika-scena-white.svg">
                    <h4>Velika scena</h4>
                </div>
                <div class="scene">
                    <img class="scene-img" id="mala-scena" alt="mala scena" src="../images/mala-scena-white.svg">
                    <h4>Mala scena</h4>
                </div>
                <div class="scene">
                    <div id="search-filter">
                        <div class="filter-box">
                            <input type="text" onchange = "filterSearch()" id="karakter">
                            <img class="filter-img" src="../images/search-white.svg">
                            <label for="karakter"> <h3>Dogadjaji čije ime sadrži karaktere:</h3></label>
                        </div>
                        <div class="filter-box">                            
                            <input type="checkbox" id="kolicinaKarata">
                            <label for="kolicinaKarata"> <h3>Količina veća od 0:</h3></label>
                        </div>
                        <div class="filter-box">                            
                            <input type="checkbox" id="prebroj">
                            <label for="prebroj"> <h3>Prebroj filtrirane događaje:</h3></label>
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

// poruka koja izlazi prilikom otvaranja prodavnice
    function animate(){                
        $('h1').show().animate({
            right: '10px',
            top: "25px",
            fontSize: "12px"
        }, (500)).queue(function() {
            $(this).css({
                "color": "white",
               // "text-shadow": "3px 3px 11px white",
              //  "background-color": "white"
            }).dequeue();
        });
    } 
// filter po karakterima

function filterSearch(){
    var karakter = document.getElementById('karakter').value.toUpperCase();
    console.log(karakter)
    document.getElementById('active-search').innerHTML = karakter;
    document.querySelector('.filter-img').setAttribute('src', '../images/search.svg');
}
// filter po vrsti scene
    function filterScene(x, y){
        removePreSelection();

        document.getElementById('velika-scena').src = "../images/velika-scena-white.svg";
        document.getElementById('mala-scena').src = "../images/mala-scena-white.svg";

        document.getElementById(x).setAttribute('src', '../images/' + x + '.svg');
        document.getElementById('active-scene').innerHTML = y;
        console.log('filtriraj po sceni ' + y);
    }

//filter po vrsti dogadjaja
    function openStore(x, y) {        
        removePreSelection();
        
        document.getElementById('balet').src = "../images/my-icons-collection (1)/svg/ballerina-white.svg";
        document.getElementById('drama').src = "../images/my-icons-collection (1)/svg/drama-white.svg";
        document.getElementById('opera').src = "../images/my-icons-collection (1)/svg/opera-white.svg";
        document.getElementById('filharmonija').src = "../images/my-icons-collection (1)/svg/conductor-white.svg";
        
        document.getElementById('active-store').innerHTML = x;  
        
        //nizDogadjaja izvlacimo iz localS
       // let performances = JSON.parse(localStorage.getItem('bazadogadjaja'));
    
        //Filtriramo po vrsti dogadjaja -balet  
       // var filterPerformance = performances;
        console.log(x)
        console.log( y);
        document.getElementById(y).setAttribute('src', '../images/my-icons-collection (1)/svg/' + y + '.svg')
       
       } 
// brisanje predstava koje su prethodno selektovanje
    function removePreSelection(){
        let h2 = document.getElementById('sale-header');
        document.getElementById('reservation').removeAttribute('click');
        if(h2.style.display !== "none"){
            h2.style.display = "none";
        }
        if(eShopMessage.firstElementChild !== null){
            eShopMessage.removeChild(eShopMessage.firstElementChild)
        }
        
        //let store = document.getElementById('open-store');
        //store.innerHTML = '';
        let k = store.childNodes.length;
        if(store.firstElementChild !== null){          
            for(let i = 0; i < k ; i++){
                store.removeChild(store.childNodes[0]);
            }       
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
     $(document).ready(function() {
         $('.scene').click(function() {
             $('.scene-img').animate({
                 height: '50px',
                 width: '50px'
             });
             $('.scene').animate({
                 margin: '10px 0px'
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
     
  function doFilter(){
     let dogadjanja = JSON.parse(localStorage.getItem('bazadogadjaja'));
     let typeOfPerformance = document.getElementById('active-store').innerHTML;
     let typeOfScene = document.getElementById('active-scene').innerHTML;
     let ticketStock = document.getElementById('kolicinaKarata').checked;
     let characters = document.getElementById('active-search').innerHTML;
     let count = document.getElementById('prebroj').checked;
       
    //filter by type of performance
      let filterTypeOfPerformance = dogadjanja;
      if(typeOfPerformance !==''){
          filterTypeOfPerformance = dogadjanja.filter(
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
                if(quantityStock > 10) {
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
        document.getElementById('quantity').innerHTML = "Izlistan je " + arrayCount.length + " događaj."
      
    }
  }  
// end of function doFilter()

//function render filtered items

function showFilteredItems(x){
    for (let i = 0; i < x.length; i++) {
        //refaktorizacija  
        let performanceType;
        let imageName;
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
        storeArticle.innerHTML = '<img id="' + performanceType + (i + 1) + 
                                '" class="items-img" alt="' + performanceType + (i + 1) + 
                                ' "src="../images/' + x[i].image + 
                                '"><div class = "items-text"><p class = "items-name">' + 
                                x[i].naziv + 
                                '</p><p class="items-author">AUTOR: ' + x[i].autor + 
                                '</p><p class = "items-scene">SCENA: ' + x[i].scena + 
                                '</p><p class = "items-price">  CENA: <span >' + x[i].cena + 
                                ' RSD </span> </p> <p>Količina: </p><button class="items-quantity-button" onclick="quantityDown('+ 
                                "'rezervacija" + i + "'" + 
                                ')"><img alt="arrow down" class="arrow-img" src="../images/arrow-down-white.svg" ></button> <input type="number" value = "0" min="0" max="20" placeholder="0" id="rezervacija' 
                                + i + '"><button class="items-quantity-button" onclick="quantityUp('+ 
                                "'rezervacija" + i + "'" + 
                                ')"><img alt="arrow up" class="arrow-img" src="../images/arrow-up-white.svg" ></button></div>';
        store.appendChild(storeArticle);                  
    }
}

//Funkcija koja pravi tabelu sa filtriranim dogadjajima
/*function tabelaFiltriranihDogadjaja(x) {
    let tableOfFilteredPerformances = document.getElementById('tabelaFiltriranihDogadjaja1');
    tableOfFilteredPerformances.style.display = 'initial';

    x.forEach(
        function(y) {
            let red = document.createElement('tr');

            for (i in y) {
                let celija = document.createElement('td');
                celija.innerHTML = y[i];
                red.appendChild(celija);
            }
            tableOfFilteredPerformances.appendChild(red);
        });
    return x;
}*/
//kraj funkcije tabela filtriranih dogadjaja