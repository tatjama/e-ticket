createBackgroundImage();

function createBackgroundImage() {
    //session storage 
    var currentlyLoggedIn =JSON.parse(sessionStorage.getItem('user')) ;    
    function animate(){
                
        $('h1').show().animate({
            left: '550px',
            top: "100px",
            fontSize: "56px"

        }, (500)).queue(function() {
            $(this).css({
                "color": "goldenrod",
                "text-shadow": "3px 3px 11px white"
            }).dequeue();
        });
        }
        
     
     if(sessionStorage.getItem('user')!== null){ 

        if(currentlyLoggedIn.status === "1" || currentlyLoggedIn.status === "0"){
            console.log(currentlyLoggedIn);
            var eshopContainer = document.getElementById('eshop-container');
            var backgroundImage = document.createElement('img');
            backgroundImage.setAttribute('src', "../images/drama6.jpg");    
            eshopContainer.appendChild(backgroundImage);
            document.getElementById('omotac1').innerHTML = 
            "<h1>Dobro dosli korisnice!</h1>"
            animate();
            }else{
            console.log('neregistrovani korisnik')
            document.getElementById('omotac1').innerHTML = 
            "<h1>Da biste koristili E-shop morate biti registrovani korisnik. Molimo Vas da se registrujete.</h1>"
            animate();
        }
        
    }else{ 
         console.log('neregistrovani korisnik');
     document.getElementById('omotac1').innerHTML = 
     "<h1>Da biste koristili E-shop morate biti registrovani korisnik. Molimo Vas da se registrujete.</h1>";
        animate();
     }
    
    }

$(document).ready(function() {
    $('img').click(function() {
        $(this).animate({
            height: '-=70%',
            width: '-=70%',
        });
        var shops = '<div id="shops"><a href="../view/baletshop.html"><img class="shops" alt="balet" src="../images/balerina1.jpg">BALET</a><a href="../view/dramashop.html"><img class="shops" alt="drama" src="../images/drama1.jpg">DRAMA</a><a href="../view/operashop.html"><img class="shops" alt="opera" src="../images/opera3.jpg">OPERA</a><a href="../view/filharmonijashop.html" target="_blank"><img class="shops" alt="filharmonija" src="../images/filharmonija5.jpg">FILHARMONIJA</a></div>';
        $("body").append(shops);
    });
});
$('a :hover').click(function() {
    alert("Kliknuto");
});