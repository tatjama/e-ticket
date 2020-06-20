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
        document.querySelector('.slider').style.left =185-n*375 +'px';          
        var x = document.querySelector('.slider-dots').querySelectorAll('.dot');
        for(i = 0; i<x.length; i++){
          x[i].setAttribute("class", 'dot');
        }          
        x[1+n].setAttribute("class", " dot active");
}
function openCommentForm(){
  document.querySelector('.comment-form').style.display = "block";
  document.getElementById('open-comment-form').style.display = "none";
}
function hideCommentForm(){
  document.querySelector('.comment-form').style.display = "none";
  document.getElementById('open-comment-form').style.display = "block";
}
function hgsubmit(){
if (/\S+/.test(document.myemailform.name.value) == false) alert ("Molim Vas upišite ime.");
else if (/^\S+@[a-z0-9_.-]+\.[a-z]{2,6}$/i.test(document.myemailform.email.value) == false) alert ("Validna  email adresa je obavezna.");
 else if (/\S+/.test(document.myemailform.message.value) == false) alert ("Molim Vas upišite poruku.");
  else {
    //submit is not allowed - 
     //  document.myemailform.submit();
       alert (' Hvala Vam! \n Vaš email je poslat.');
       document.myemailform.name.value = "";       
       document.myemailform.lastname.value = "";       
       document.myemailform.email.value = "";       
       document.myemailform.message.value = "";
      
       hideCommentForm();
       }
}