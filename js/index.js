function translateL(x){
 let currentlyLanguage = {};
 currentlyLanguage.language = x;
 console.log(currentlyLanguage)
 sessionStorage.setItem('lang', JSON.stringify(currentlyLanguage));
 return currentlyLanguage
}

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

function checkEMail(){       

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
   {    
     document.getElementById('form-message').innerHTML= "ok";
     return (true)    
   }
      document.getElementById('form-message').innerHTML = "Please insert a valid email";
     return (false)  
   }

let pickUpSignInElement = document.getElementById("pickUp_signIn");
let pickUpSignUpElement = document.getElementById("pickUp_signUp");


//pop-up prozor logovanje
function showLoginForm() {
  pickUpSignInElement.style.display = "block";
}
function hideLoginForm() {
  pickUpSignInElement.style.display = "none";
}

//pop-up prozor registracija
function showSignUpForm() {
  pickUpSignUpElement.style.display = "block";
}
function hideSignUpForm() {
  pickUpSignUpElement.style.display = "none";
}


let showLessSpan = document.querySelector('.show-less');
let showMoreSpan = document.querySelector('.show-more');
let hideTextSpan = document.querySelector('.hide-text');


function showMore(){
    showMoreSpan.style.display = "none";
    showLessSpan.style.display = "initial";
    hideTextSpan.style.display = "initial";
}
function showLess(){
    showMoreSpan.style.display = "initial";
    showLessSpan.style.display = 'none';
    hideTextSpan.style.display = 'none';
}

function currentSlide(n){         
        document.querySelector('.location-slider').style.left =355-n*430 +'px';          
        var x = document.querySelector('.location-dots').querySelectorAll('.location-dot');
        for(i = 0; i<x.length; i++){
          x[i].setAttribute("class", 'location-dot');
        }          
        x[1+n].setAttribute("class", " location-dot active");
}
function openCommentForm(){
  document.querySelector('.comment-form').style.display = "flex";
  document.getElementById('open-comment-form').style.display = "none";
}
function hideCommentForm(){
  document.querySelector('.comment-form').style.display = "none";
  document.getElementById('open-comment-form').style.display = "flex";
}
function hgsubmit(){
  let lang = language();
  if(lang === 'sr'){
      nameAlert = "Molim Vas upišite ime.";
      emailAlert = 'E-mail mora biti u formatu nesto@nesto.xyz';
      messageAlert = "Molimo Vas upišite poruku.";
      thankYouAlert = ' Hvala Vam! \n Vaš email je poslat.';
     
  }else{
      nameAlert = "Please type valid name";
      emailAlert = 'E-mail format has to be something@something.xyz';
      messageAlert = 'Please, type the message.';
      thankYouAlert = ' Thank You! \n Your message is sent';
      
  }
if (/\S+/.test(document.myemailform.name.value) == false) alert (nameAlert);
else if (/^\S+@[a-z0-9_.-]+\.[a-z]{2,6}$/i.test(document.myemailform.email.value) == false) alert (emailAlert);
 else if (/\S+/.test(document.myemailform.message.value) == false) alert (messageAlert);
  else {
    //submit is not allowed - 
     //  document.myemailform.submit();
       alert (thankYouAlert);
       document.myemailform.name.value = "";       
       document.myemailform.lastname.value = "";       
       document.myemailform.email.value = "";       
       document.myemailform.message.value = "";
      
       hideCommentForm();
       }
}