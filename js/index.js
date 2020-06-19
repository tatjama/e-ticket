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