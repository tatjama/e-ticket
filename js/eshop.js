napraviSliku();

function napraviSliku() {
    /*var currentlyLoggedIn = JSON.parse(localStorage.getItem('currentlyLoggedInUser'));
    console.log(currentlyLoggedIn);*/
    var currentlyLoggedIn =JSON.parse(sessionStorage.getItem('user')) ;
     //session storage 
     
     if(sessionStorage.getItem('user')!== null){ 

        if(currentlyLoggedIn.status === "1" || currentlyLoggedIn.status === "0"){
            console.log(currentlyLoggedIn);
            var omotac = document.getElementById('omotac');
        var slika = document.createElement('img');
        slika.setAttribute('src', "../images/drama6.jpg");
    
        omotac.appendChild(slika);
            }else{
            console.log('neregistrovani korisnik')
            document.getElementById('omotac').innerHTML = "Da biste koristili E-shop morate biti registrovani korisnik. Molimo Vas da se registrujete."
            }
        
    }else{ 
         console.log('neregistrovani korisnik');
     document.getElementById('omotac').innerHTML = 
     "Da biste koristili E-shop morate biti registrovani korisnik. Molimo Vas da se registrujete.";

     }
    
    }

$(document).ready(function() {
    $('img').click(function() {
        $(this).animate({
            height: '-=50%',
            width: '-=50%',
        });
        var linkovi = '<div id="linkovi"><a href="../view/baletshop.html"><img class="linkovi" border="0" alt="balet" src="../slikezavrsni/balerina1.jpg" width="20" height="20">BALET</a><a href="../view/dramashop.html"><img border="0" class="linkovi" alt="drama" src="../slikezavrsni/drama1.jpg" width="100" height="100">DRAMA</a><a href="../view/operashop.html"><img border="0" class="linkovi" alt="opera" src="../slikezavrsni/opera3.jpg" width="100" height="100">OPERA</a><a href="../view/filharmonijashop.html" target="_blank"><img border="0" class="linkovi" alt="filharmonija" src="../slikezavrsni/filharmonija5.jpg" width="100"  height="100">FILHARMONIJA</a></div>';
        $("body").append(linkovi);
    });
});
$('a :hover').click(function() {
    alert("Kliknuto");
});