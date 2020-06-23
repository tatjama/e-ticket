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
        'signUpLegend': 'Sign Up',
        'formName': 'Name:',
        'formSurname': 'Surname:',
        'formPassword': 'Password:',
    },
    'sr': {
        'aboutUs' : 'O nama',
        'aboutUsContent' : "Mislimo da je zadovoljan klijent najbolja reklama... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        'terms': ' Uslovi kupovine',
        'termsContent' : 'Brza, jednostavna i sigurna kupovina karata za pozorište, balet, operu ili koncerte filharmonije. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,
        'customerReturn' : ' Uslovi zamene karata',
        'customerReturnContent' : 'Svi se ponekad nađemo u neplaniranoj situaciji kada nam nam je jedina opcija vraćanje kupljene ulaznice. Ovo su uslovi za povrat novca... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis',
        'signUpLegend': 'Registracija korisnika',
        'formName': 'Ime:',
        'formSurname': 'Prezime:',
        'formPassword': 'Lozinka:',
    }
};
$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')])
        });
    })
})