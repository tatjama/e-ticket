function openMenu(){    
    document.querySelector('.nav-hamburger').style.display = 'none';
    document.querySelector('.nav-close').style.visibility = 'show';
   // document.querySelector('.nav-menu').style.display = 'initial';
  // document.querySelector('.nav-bg').style.display = 'initial';
    document.querySelector('.nav-bg-menu').style.display = 'initial';   
    document.getElementById('start_mobile').style.display = "block";   
}
function closeMenu(){
    document.querySelector('.nav-hamburger').style.display = "initial";
    document.querySelector('.nav-close').style.visibility = 'hide';
    document.querySelector('.nav-bg-menu').style.display = 'none';
    document.getElementById('signIn_mobile').style.display = "none";
    document.getElementById('signUp_mobile').style.display = "none";
   // document.querySelector('.nav-menu').style.display = 'none';
    //document.querySelector('.section-one-svg').style.visibility = 'visible';
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