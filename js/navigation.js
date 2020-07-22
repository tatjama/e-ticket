let hamburgerElement = document.querySelector('.nav-hamburger');
let closeElement = document.querySelector('.nav-close');
let navBgMenuElement = document.querySelector('.nav-bg-menu');
let signInMobileElement = document.getElementById('signIn_mobile');
let signUpMobileElement = document.getElementById('signUp_mobile');
let signingMobileElement =  document.getElementById('signing_mobile');

function openMenu(){    
    hamburgerElement.style.display = 'none';
    closeElement.style.visibility = 'show';
    navBgMenuElement.style.display = 'initial';   
   // document.getElementById("start_mobile").style.display = "none";
    signingMobileElement.style.display= "inherit";
    signInMobileElement.style.display = "block";
    signUpMobileElement.style.display = "block";
}
function closeMenu(){
    hamburgerElement.style.display = "initial";
    closeElement.style.visibility = 'hide';
    navBgMenuElement.style.display = 'none';
    signInMobileElement.style.display = "none";
    signUpMobileElement.style.display = "none";
}
/*function currentSlide(n){         
    document.querySelector('.slider').style.left =185-n*375 +'px';          
    var x = document.querySelector('.slider-dots').querySelectorAll('.dot');
    for(i = 0; i<x.length; i++){
      x[i].setAttribute("class", 'dot');
    }          
    x[1+n].setAttribute("class", " dot active");
}*/
function checkEMail(){       

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
     {    
       document.getElementById('form-message').innerHTML= "ok";
       return (true)    
     }
        document.getElementById('form-message').innerHTML = "Please insert a valid email";
       return (false)  
     }