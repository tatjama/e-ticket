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