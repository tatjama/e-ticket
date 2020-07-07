
var arrLang = {};
    let languagesStorage = JSON.parse(localStorage.getItem('languages'));
    
arrLang = {
        "en":languagesStorage[0].en,
        "sr":languagesStorage[1].sr       
  }
    

$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');
// inner text - change
        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')])
        });
        // value attribute placeholder - change
        $('.langAt').each(function(index, element){
            $(this).attr('placeholder', arrLang[lang][$(this).attr('key')]);            
        });
    // value attribute value - change
        $('.langVal').each(function(index, element){
            $(this).attr('value', arrLang[lang][$(this).attr('key')])
        });
    // value attribute title - change
        $('.langTitle').each(function(index, element){
            $(this).attr('title', arrLang[lang][$(this).attr('key')])
        });
    })
})
function language(){     
    var lang = JSON.parse(sessionStorage.getItem('lang'));

    if(lang === null){
        lang = "en";
    }else{
        lang =lang.language ;
    }
    
    console.log(lang);
    var elementsWithText = document.querySelectorAll('.lang');
    var elementsWithPlaceholder = document.querySelectorAll('.langAt');
    var elementsWithValue = document.querySelectorAll('.langVal');
    var elementsWithTitle = document.querySelectorAll('.langTitle');
   
    for(i = 0; i < elementsWithText.length; i++){
        elementsWithText[i].textContent = arrLang[lang][elementsWithText[i].getAttribute('key')];      
    }
    for(i = 0 ; i < elementsWithPlaceholder.length; i++){
        let key = arrLang[lang][elementsWithPlaceholder[i].getAttribute('key')];
        elementsWithPlaceholder[i].placeholder = key;
    }
    for(i = 0; i < elementsWithTitle.length; i++){
        let key = arrLang[lang][elementsWithTitle[i].getAttribute('key')];       
        elementsWithTitle[i].title = key;
    }
    return lang;
}