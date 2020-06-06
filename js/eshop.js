createEShop();

function createEShop() {
    //session storage 
    var currentlyLoggedIn =JSON.parse(sessionStorage.getItem('user')) ;    
    function animate(){                
        $('h1').show().animate({
            right: '20px',
            top: "100px",
            fontSize: "14px"

        }, (500)).queue(function() {
            $(this).css({
                "color": "white",
                "text-shadow": "3px 3px 11px white",
              //  "background-color": "white"
            }).dequeue();
        });
    }        
     
     if(sessionStorage.getItem('user')!== null){ 

        if(currentlyLoggedIn.status === "1" || currentlyLoggedIn.status === "0"){
            console.log(currentlyLoggedIn);
            document.querySelector('.nav-bg').style.display = "flex";
            document.getElementById('omotac1').innerHTML = 
            '<h1 id="welcome-user">Dobro dosli ' + currentlyLoggedIn.name + ' ' + currentlyLoggedIn.surname +' u nas e-shop.' + '</h1>';
            var shops = '<div id="shops"><div class="shops"><img class="shops-img" alt="balet" src="../images/balerina1.jpg"><h4>Balet</h4></div><div class="shops"><img class="shops-img" alt="drama" src="../images/drama1.jpg"><h4>Drama</h4></div><div class="shops"><img class="shops-img" alt="opera" src="../images/opera3.jpg"><h4>Opera</h4></div><div class="shops" ><img class="shops-img" alt="filharmonija" src="../images/filharmonija5.jpg"><h4>Filharmonija</h4></div></div>';
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
            width: '50px',
        });
    });
});
/*$('a :hover').click(function() {
    alert("Kliknuto");
});*/