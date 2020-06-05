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
            var shops = '<div id="shops"><div><img class="shops" alt="balet" src="../images/balerina1.jpg">Balet</div><div><img class="shops" alt="drama" src="../images/drama1.jpg">Drama</div><div ><img class="shops" alt="opera" src="../images/opera3.jpg">Opera</div><div ><img class="shops" alt="filharmonija" src="../images/filharmonija5.jpg">Filharmonija</div></div>';
            $("#eshop-container").append(shops);
            var shopArray = document.getElementsByClassName('shops');
            for(let i = 0; i < shopArray.length; i++){
                shopArray[i].addEventListener("click", function(){openStore("Balet")} );
            }
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


    function openStore(x) {
        //nizDogadjaja izvlacimo iz localS
        let performances = JSON.parse(localStorage.getItem('bazadogadjaja'));
    
        //Filtriramo po vrsti dogadjaja -balet  
        var filterBalet = performances;
    
        filterBalet = performances.filter(
            function(newPerformance) {
                if (newPerformance.vrsta == x) {
                    return true;
                } else {
                    return false;
                }
            });            
        console.log(filterBalet);
    
        for (let i = 0; i < filterBalet.length; i++) {
            //refaktorizacija
            let store = document.getElementById('open-store');
            var storeArticle = document.createElement('div');                   
            storeArticle.innerHTML = '<img id="balet"' + (i + 1) + 
                                    ' class="linkovi" alt="balet"' + (i + 1) + 
                                    ' src="../images/balerina' + (i + 1) + '.jpg"><br><span>' + 
                                    filterBalet[i].naziv + 
                                    '</span> <br> Cena: <span>' + filterBalet[i].cena + 
                                    '</span>   <br>Količina <input type="number" min="0" max="20" placeholder="0" id="rezervacija' + i + '"><br>';
            
            store.appendChild(storeArticle);           
        }              
    }     

/*$(document).ready(function() {
    $('img').click(function() {
        $(this).animate({
            height: '-=70%',
            width: '-=70%',
        });
        var shops = '<div id="shops"><a href="../view/baletshop.html"><img class="shops" alt="balet" src="../images/balerina1.jpg">Balet</a><a href="../view/dramashop.html"><img class="shops" alt="drama" src="../images/drama1.jpg">Drama</a><a href="../view/operashop.html"><img class="shops" alt="opera" src="../images/opera3.jpg">Opera</a><a href="../view/filharmonijashop.html" target="_blank"><img class="shops" alt="filharmonija" src="../images/filharmonija5.jpg">Filharmonija</a></div>';
        $("body").append(shops);
    });
});
$('a :hover').click(function() {
    alert("Kliknuto");
});*/