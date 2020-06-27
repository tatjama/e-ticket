//define language reload anchors
/*var dataReload = document.querySelectorAll(".language");
console.log(dataReload.length)*/

// JSON variable language, language translation
/*var language = {
    eng: {
        title: "About us"
    },
    sr: {
        title: "O nama"
    }
};*/
//define language via window hash
/*if(window.location.hash){
    if(window.location.hash === "#eng"){
        aboutus.textContent = language.eng.title;
    }
}*/
//define language reload onclick iteration
/*for( i = 0; i < dataReload.length; i++){
    dataReload[i +1].onclick = function(){
        console.log(i);
        location.reload(true);
    }
}*/

//NEW VERSION

var arrLang = {
    'en': {
        'aboutUs': 'About Us',
        'aboutUsContent' : "Our opinion is that satisfied customer is the best marketing ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ,
        'alternative' : 'Alternative scene',
        'amount' : 'AMOUNT: ',
        'add' : "Add to cart",
        'author table': 'AUTHOR: ',
        'cart' : 'Cart',
        'clear' : 'Clear',
        'clear table' : 'CLEAR: ',
        'contact' : 'Contact',
        'customer' : 'Customer service',
        'customerReturn': ' Ticket replacement ',
        'customerReturnContent' : 'We all sometimes find ourselves in an unplanned situation when our only option is to return the purchased ticket. These are the conditions for a refund... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis',
        'date' : 'DATE: ',
        'entry' : 'Entry',
        'error author' : 'Error. Type author name.',
        'error date' : 'Error. Type date',
        'error price' : ' Error. Type price.',        
        'error title' : "Error. Type performance title",
        'eugene' : 'EUGENE ONEGIN',
        'filter': 'Filter',
        'finish' : ' Finish ',
        'formName': 'Name:',
        'formSurname': 'Surname:',
        'formPassword': 'Password:',
        'img pick' : 'Pick image',
        'jelena' : '" I had to cancel tickets for one show. The procedure was very simple, and the money was returned to me in record time. I will for sure re-use the e-ticket."',
        'lady':'THE LADY OF THE CAMELLIAS',  
        'luka' : '"Always friendly and efficient customer service. Possibility of contact by e-mail or telephone, and tickets arrive electronically. "',
        'main' : 'Main scene',        
        'marko' : '"Simple ticket purchase is why I always use this service. High security when paying is another plus."',        
        'pay' : ' Pay ',
        'premiere' : 'Premiere',
        'premiere-h1' : 'PREMIERES',
        'price table' : 'PRICE: ',
        'receipt' : 'RECEIPT DOCUMENT',
        'reserve' : 'Reserve',
        'sale' : 'Sale',
        'scene' : 'SCENE: ',
        'sent' : 'Sent comment',
        'shop': 'E-shop:',
        'shopping card' : 'Shopping card',
        'shopping-card' : 'SHOPPING CARD',
        'show-more': 'show more...',
        'show-less' : '...show less',
        'signUpLegend': 'SIGN UP',
        'signInLegend' : 'SIGN IN',
        'signUp' :  'Sign Up',
        'stefan' : '"I visit this site regularly, because I always get new information related to premieres. Clarity and ease of use are paramount to me. "',
        'stock' : 'STOCK: ',
        'submit': 'Submit',
        'swan': 'SWAN LAKE',
        'terms' : 'Terms',
        'termsContent' : 'Quick, easy and safe purchase of tickets for theater, ballet, opera or philharmonic concerts. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,
        'they said' : "What they’ve said",
        'title': 'TITLE: ',
        'title performance' : 'PERFORMANCE TITLE:',
        'time' : 'TIME: ',
        'total' : 'TOTAL (RSD): ',
        'type comment' : 'Type comment',
        'type table' : 'TYPE: ',        
        'qty' : 'QTY: ', 
        'quantity' : 'Quantity', 
    },
    'sr': {
        'aboutUs' : 'O nama',
        'aboutUsContent' : "Mislimo da je zadovoljan klijent najbolja reklama... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        'add' : 'Dodaj u korpu',
        'alternative': 'Mala scena',
        'amount' : 'IZNOS: ',
        'author table' : 'AUTOR: ',
        'cart' : 'Korpa',
        'clear' : 'Obriši',       
        'clear table' : 'OBRIŠI: ',
        'contact' : 'Kontakt',
        'date' : 'DATUM: ',
        'customer' : 'Korisnički servis',
        'customerReturn' : ' Uslovi zamene karata',
        'customerReturnContent' : 'Svi se ponekad nađemo u neplaniranoj situaciji kada nam nam je jedina opcija vraćanje kupljene ulaznice. Ovo su uslovi za povrat novca... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis',
        'entry' : 'Ulaz',        
        'error title' : "Pogrešan unos. Unesite naziv događaja",
        'error author' : 'Pogrešan unos. Unesite ime i prezime autora',
        'error price': 'Pogrešan unos. Unesite cenu ulaznice',
        'error date' : 'Pogrešan unos. Unesite datum događaja',
        'eugene' : 'EVGENIJE ONJEGIN',
        'filter': 'Filtriraj',
        'finish' : ' Završi kupovinu ',
        'formName': 'Ime:',
        'formSurname': 'Prezime:',
        'formPassword': 'Lozinka:',
        'img pick' : 'Izaberite sliku:',
        'jelena' : '"Morala sam da otkažem karte za jednu predstavu. Procedura je bila veoma jednostavna, a novac mi je vraćen u rekordnom roku. Sigurno ću ponovo koristiti e-ticket."',
        'lady' : 'DAMA SA KAMELIJAMA',
        'luka' : '"Uvek ljubazan i efikasan korisnički servis. Mogućnost kontaktiranja e-mailom ili telefonom, a ulaznice stižu elektronskim putem." ',
        'main': 'Velika scena',
        'marko' : '"Jednostavna kupovina ulaznica je ono zbog čega uvek koristim ovu uslugu.Visoka sigurnost prilikom plaćanja je još jedan plus.',
        'pay' : 'Plati ',
        'premiere' : 'Premijera',        
        'premiere-h1' : 'PREMIJERE',        
        'price table' : 'CENA: ',
        'receipt' : 'UNOS DOGAĐAJA',
        'reserve': 'Rezerviši',
        'sale' : 'Prodaja',
        'sent' : 'Pošaljite komentar',
        'scene' : 'SCENA: ',
        'shop': 'Prodavnica:', 
        'shopping card' : 'Korpa',        
        'shopping-card': 'KORPA',        
        'show-more' : 'saznaj više...',
        'show-less' : '...saznaj manje',
        'signUpLegend': 'REGISTRACIJA KORISNIKA',
        'signInLegend' : 'LOGOVANJE',
        'signUp' : 'Prijavi se',
        'stefan' : '"Redovno posećujem ovaj sajt, jer uvek dobijem nove informacije vezane za  premijere. Preglednost i jednostavnost korišćenja mi je najbitnija."',
        'stock': 'DOSTUPNO: ',
        'submit': 'Pokupi',
        'swan': 'LABUDOVO JEZERO',
        'terms': ' Uslovi kupovine',
        'termsContent' : 'Brza, jednostavna i sigurna kupovina karata za pozorište, balet, operu ili koncerte filharmonije. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,
        'time' : 'VREME: ',
        'title': 'NAZIV: ',
        'title performance' : 'NAZIV DOGAĐAJA: ',
        'they said' : 'Rekli su o nama',
        'total': 'UKUPAN IZNOS (RSD):',
        'type comment' : 'Ostavite komentar',
        'type table' : 'VRSTA: ',          
        'qty' : 'KOL: ',              
        'quantity' : 'Količina:',        
    }
};

//array of translation to change atributtes
var arrLangAt = {
    'en':{
        'name': 'Yor name...',
        'error name' : 'Error. Type valid name...',
        'error surname': 'Error. Type valid surname',
        'surname' : 'Your surname..',
        'error email' : 'Error. Type valid E-mail',
        'password' : 'Password...',
        'error pssword' : 'Error. Type valid password',
        'register' : 'Register',
        'clear' : 'Clear',
        'signIn' : 'Sign in',
        'type comment' : 'Type comment...',
        'news' : 'News in your inbox...',
        'entry':'Link to tickets entry...',
        'sale': 'Link to sale...',
        'title performance' : 'Performance title...',
        'author' : 'Author name...',
        'price' : 'Ticket price',
        'type' : 'Performance type',
        'quantity' : 'Quantity'
    },
    'sr' :{
        'name' : 'Unesite ime..',
        'error name' : 'Pogrešan unos. Unesite validno ime',
        'error surname' : 'Pogrešan unos. Unesite validno prezime',
        'surname' : 'Unesite prezime..',
        'error email' : 'Pogrešan unos. Unesite validan E-mail',
        'password' : 'Unesite lozinku...',
        'error password' : 'Pogrešan unos. Unesite validnu lozinku',
        'register' : 'Registracija',
        'clear' : 'Obriši',
        'signIn' : 'Uloguj',
        'type comment' : 'Napišite komentar...', 
        'news' : "Novosti u Vašem sandučetu…",
        'entry': "Idite na unos ulaznica...",
        'sale' : "Vratite se u prodavnicu...",
        'title performance' : 'Naziv događaja ',
        'author' : 'Ime autora',
        'price' : 'Cena ulaznice',
        'type': 'Tip događaja',
        'quantity' : ' Količina"'
    }
};
$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');
// inner text - change
        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')])
        });
        // value attribute placeholder - change
        $('.langAt').each(function(index, element){
            $(this).attr('placeholder', arrLangAt[lang][$(this).attr('key')]);
            
        });
    // value attribute value - change
        $('.langVal').each(function(index, element){
            $(this).attr('value', arrLangAt[lang][$(this).attr('key')])
        });
    // value attribute title - change
        $('.langTitle').each(function(index, element){
            $(this).attr('title', arrLangAt[lang][$(this).attr('key')])
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
      // console.log(elementsWithText[i].getAttribute('key'))
    }
    for(i = 0 ; i < elementsWithPlaceholder.length; i++){
        let key = arrLangAt[lang][elementsWithPlaceholder[i].getAttribute('key')];
        elementsWithPlaceholder[i].placeholder = key;
    }
    for(i = 0; i < elementsWithTitle.length; i++){
        let key = arrLangAt[lang][elementsWithTitle[i].getAttribute('key')];       
        elementsWithTitle[i].title = key;
    }
    return lang;
}