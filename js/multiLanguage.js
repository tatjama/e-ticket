$(function(){
    $('.translate').click(function(){
        let lang = $(this).attr('id');
        let languageStorage = JSON.parse(localStorage.getItem('languages'));
        let arrLang1 = {};
        arrLang1.en = languageStorage['en'];
        arrLang1.sr = languageStorage['sr'];

// inner text - change
        $('.lang').each(function(index, element){
            $(this).text(arrLang1[lang][$(this).attr('key')])
        });
        // value attribute placeholder - change
        $('.langAt').each(function(index, element){
            $(this).attr('placeholder', arrLang1[lang][$(this).attr('key')]);
            
        });
    // value attribute value - change
        $('.langVal').each(function(index, element){
            $(this).attr('value', arrLang1[lang][$(this).attr('key')])
        });
    // value attribute title - change
        $('.langTitle').each(function(index, element){
            $(this).attr('title', arrLang1[lang][$(this).attr('key')])
        });
    })
})
function language(){    
    let lang = JSON.parse(sessionStorage.getItem('lang'));
    console.log(lang)
    let languageStorage = JSON.parse(localStorage.getItem('languages'));
    console.log(languageStorage)
    let arrLang1 = {};
    arrLang1.en = languageStorage['en'];
    arrLang1.sr = languageStorage['sr'];
    if(lang === null){
        lang = "en";
    }else{
        lang =lang.language ;
    }
    var elementsWithText = document.querySelectorAll('.lang');
    var elementsWithPlaceholder = document.querySelectorAll('.langAt');
    var elementsWithValue = document.querySelectorAll('.langVal');
    var elementsWithTitle = document.querySelectorAll('.langTitle');
   
    for(i = 0; i < elementsWithText.length; i++){
        elementsWithText[i].textContent = arrLang1[lang][elementsWithText[i].getAttribute('key')];      
    }
    for(i = 0 ; i < elementsWithPlaceholder.length; i++){
        let key = arrLang1[lang][elementsWithPlaceholder[i].getAttribute('key')];
        elementsWithPlaceholder[i].placeholder = key;
    }
    for(i = 0; i < elementsWithTitle.length; i++){
        let key = arrLang1[lang][elementsWithTitle[i].getAttribute('key')];       
        elementsWithTitle[i].title = key;
    }
    return lang;
}