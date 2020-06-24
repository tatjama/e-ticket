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
        'terms' : 'Terms',
        'termsContent' : 'Quick, easy and safe purchase of tickets for theater, ballet, opera or philharmonic concerts. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,
        'customerReturn': ' Ticket replacement ',
        'customerReturnContent' : 'We all sometimes find ourselves in an unplanned situation when our only option is to return the purchased ticket. These are the conditions for a refund... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis',
        'entry' : 'Entry',
        'sale' : 'Sale',
        'show-more': 'show more...',
        'show-less' : '...show less',
        'signUpLegend': 'SIGN UP',
        'signInLegend' : 'SIGN IN',
        'formName': 'Name:',
        'formSurname': 'Surname:',
        'formPassword': 'Password:',
        'premiere' : 'Premiere',
        'contact' : 'Contact',
        'premiere-h1' : 'PREMIERES',
        'date' : 'DATE: ',
        'time' : 'TIME: ',
        'scene' : 'SCENE: ',
        'they said' : "What they’ve said",
        'marko' : '"Simple ticket purchase is why I always use this service. High security when paying is another plus."',
        'jelena' : '" I had to cancel tickets for one show. The procedure was very simple, and the money was returned to me in record time. I will for sure re-use the e-ticket."',
        'stefan' : '"I visit this site regularly, because I always get new information related to premieres. Clarity and ease of use are paramount to me. "',
        'luka' : '"Always friendly and efficient customer service. Possibility of contact by e-mail or telephone, and tickets arrive electronically. "',
        'swan': 'SWAN LAKE',
        'eugene' : 'EUGENE ONEGIN',
         'lady':'THE LADY OF THE CAMELLIAS',
        'type comment' : 'Type comment',
        'sent' : 'Sent comment',
        'customer' : 'Customer service',
        'signUp' :  'Sign Up',
       

    
    },
    'sr': {
        'aboutUs' : 'O nama',
        'aboutUsContent' : "Mislimo da je zadovoljan klijent najbolja reklama... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        'terms': ' Uslovi kupovine',
        'termsContent' : 'Brza, jednostavna i sigurna kupovina karata za pozorište, balet, operu ili koncerte filharmonije. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,
        'customerReturn' : ' Uslovi zamene karata',
        'customerReturnContent' : 'Svi se ponekad nađemo u neplaniranoj situaciji kada nam nam je jedina opcija vraćanje kupljene ulaznice. Ovo su uslovi za povrat novca... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis',
        'entry' : 'Ulaz',
        'sale' : 'Prodaja',
        'show-more' : 'saznaj više...',
        'show-less' : '...saznaj manje',
        'signUpLegend': 'REGISTRACIJA KORISNIKA',
        'signInLegend' : 'LOGOVANJE',
        'formName': 'Ime:',
        'formSurname': 'Prezime:',
        'formPassword': 'Lozinka:',
        'premiere' : 'Premijera',
        'contact' : 'Kontakt',
        'premiere-h1' : 'PREMIJERE',
        'date' : 'DATUM: ',
        'time' : 'VREME: ',
        'scene' : 'SCENA: ',
        'they said' : 'Rekli su o nama',
        'marko' : '"Jednostavna kupovina ulaznica je ono zbog čega uvek koristim ovu uslugu.Visoka sigurnost prilikom plaćanja je još jedan plus.',
        'jelena' : '"Morala sam da otkažem karte za jednu predstavu. Procedura je bila veoma jednostavna, a novac mi je vraćen u rekordnom roku. Sigurno ću ponovo koristiti e-ticket."',
        'stefan' : '"Redovno posećujem ovaj sajt, jer uvek dobijem nove informacije vezane za  premijere. Preglednost i jednostavnost korišćenja mi je najbitnija."',
        'luka' : '"Uvek ljubazan i efikasan korisnički servis. Mogućnost kontaktiranja e-mailom ili telefonom, a ulaznice stižu elektronskim putem." ',
        'swan': 'LABUDOVO JEZERO',
        'eugene' : 'EVGENIJE ONJEGIN',
        'lady' : 'DAMA SA KAMELIJAMA',
        'type comment' : 'Ostavite komentar',
        'sent' : 'Pošaljite komentar',
        'customer' : 'Korisnički servis',
        'signUp' : 'Prijavi se',
        

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
        'news' : 'News in your inbox...'
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
        'news' : "Novosti u Vašem sandučetu…"
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