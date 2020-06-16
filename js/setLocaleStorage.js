function setLocalStorage(a, b, c, d) {
    //localStorage.removeItem('bazakorisnika');

    //preuzimanje vrednosti local storidga i slanje na drugu adresu
    /*
        var storageOfPerformances = JSON.parse(localStorage.getItem('bazadogadjaja'));
        var bazakorisnika = JSON.parse(localStorage.getItem('bazakorisnika'));
        var trenutnoUlogovani = {
            status: 9,
            email: "gost"
        }
        console.log(storageOfPerformances);
        console.log(bazakorisnika);
        localStorage.setItem('bazadogadjaja3', JSON.stringify(storageOfPerformances));
        localStorage.setItem('bazakorisnika3', JSON.stringify(bazakorisnika));
        localStorage.setItem('trenutnoulogovanikorisnik3', JSON.stringify(trenutnoUlogovani));*/


    //KADA JE LOCAL STORAGE PRAZAN, PUNIMO GA POCETNIM VREDNOSTIMA.
    //INDEX.HTML DUGME POCETNA

        let start = document.getElementById(a);
        let signing = document.getElementById(b); 
        let signIn = document.getElementById(c);
        let signUp = document.getElementById(d);
      //  let signing_mobile = document.getElementById('signing_mobile');
       // let start_mobile = document.getElementById('start_mobile');
        start.style.display = "none";
        signing.style.display ="inherit";
        signIn.style.display = "block";
        signUp.style.display = "block";

      //  signing_mobile.style.display = "inherit";
       // start_mobile.style.display = "none";

    
    var userStorage = [
        { name: "TATJANA", surname: "MARKOVIC", email: "tanja120a@gmail.com", password: "tanja", status: "0" },
        { name: "TANJA", surname: "MARKOVIC", email: "tanja120@gmail.com", password: "tanja", status: "0" },
        { name: "PERA", surname: "PERIC", email: "pera@gmail.com", password: "pera", status: "1" },
        { name: "MITAR", surname: "MIRIC", email: "mitar@gmail.com", password: "mitar", status: "1" },
        { name: "IVAN", surname: "IVANOVIC", email: "ivan@gmail.com", password: "ivan", status: "1" }

    ];
    var storageOfPerformances = [{
            naziv: "KARMEN",
            autor: "Bize",
            cena: "700",
            datum: "2020-10-10",
            kolicina: 123,
            vrsta: "Opera",
            scena: "Mala scena",
            image: "opera1.jpg"

        },
        {
            naziv: "RADOVAN TREĆI",
            autor: "Dušan Kovačević",
            cena: "500",
            datum: "2020-11-20",
            kolicina: 8,
            vrsta: "Predstava",
            scena: "Mala scena",
            image: "drama1.jpg"

        }, {

            naziv: "GOSPOĐA MINISTARKA",
            autor: "Branislav Nušić",
            cena: "800",
            datum: "2020-09-15",
            kolicina: 163,
            vrsta: "Predstava",
            scena: "Mala scena",
            image: "drama2.jpg"

        },
        {
            naziv: "TRAVIJATA",
            autor: "Đuzepe Verdi",
            cena: "860",
            datum: "2020-10-19",
            kolicina: 161,
            vrsta: "Opera",
            scena: "Velika scena",
            image: "opera2.jpg"

        }, {
            naziv: "BALKANSKI ŠPIJUN",
            autor: "Dušan Kovačević",
            cena: "680",
            datum: "2020-09-11",
            kolicina: 175,
            vrsta: "Predstava",
            scena: "Mala scena",
            image: "drama3.jpg"

        }, {
            naziv: "LABUDOVO JEZERO",
            autor: "Petar Iljič Čajkovski",
            cena: "900",
            datum: "2020-10-18",
            kolicina: 236,
            vrsta: "Balet",
            scena: "Velika scena",
            image: "balerina1.jpg"

        }, {
            naziv: "ČUDO U ŠARGANU",
            autor: "LJubomir Simović",
            cena: "550",
            datum: "2020-10-25",
            kolicina: 80,
            vrsta: "Predstava",
            scena: "Mala scena",
            image: "drama4.jpg"

        }, {
            naziv: "DAMA S KAMELIJAMA",
            autor: "Aleksandar Dima Sin",
            cena: "800",
            datum: "2020-09-16",
            kolicina: 255,
            vrsta: "Predstava",
            scena: "Mala scena",
            image: "drama5.jpg"

        }, {
            naziv: "EVGENIJE ONJEGIN",
            autor: "Petar Iljič Čajkovski",
            cena: "900",
            datum: "2020-05-16",
            kolicina: 58,
            vrsta: "Balet",
            scena: "Velika scena",
            image: "balerina2.jpg"

        }, {
            naziv: "KRCKO ORAŠČIĆ",
            autor: "Petar Iljič Čajkovski",
            cena: "980",
            datum: "2020-09-28",
            kolicina: 37,
            vrsta: "Balet",
            scena: "Velika scena",
            image: "balerina3.jpg"

        }, {
            naziv: "KRALJICA MARGO",
            autor: "Goran Bregović",
            cena: "700",
            datum: "2020-09-17",
            kolicina: 195,
            vrsta: "Balet",
            scena: "Mala scena",
            image: "balerina4.jpg"

        }, {
            naziv: "USPAVANA LEPOTICA",
            autor: "Petar Iljič Čajkovski",
            cena: "800",
            datum: "2020-09-16",
            kolicina: 79,
            vrsta: "Balet",
            scena: "Mala scena",
            image: "balerina5.jpg"

        }, {
            naziv: "KAVALERIJA RUSTIKANA",
            autor: "Pjetro Maskanji",
            cena: "1000",
            datum: "2020-11-21",
            kolicina: 151,
            vrsta: "Opera",
            scena: "Velika scena",
            image: "opera3.jpg"

        }, {
            naziv: "AIDA",
            autor: "Đuzepe Verdi",
            cena: "880",
            datum: "2020-10-18",
            kolicina: 158,
            vrsta: "Opera",
            scena: "Velika scena",
            image: "opera4.jpg"

        }, {
            naziv: "MUZIČKI RAZGOVORI",
            autor: "Nemanja Stanković",
            cena: "2000",
            datum: "2020-09-15",
            kolicina: 163,
            vrsta: "Filharmonija",
            scena: "Mala scena",
            image: "filharmonija1.jpg"

        }, {
            naziv: "KONCERT NA OTVORENOM",
            autor: "Gabrijel Felc",
            cena: "100",
            datum: "2020-09-22",
            kolicina: 93,
            vrsta: "Filharmonija",
            scena: "Velika scena",
            image: "filharmonija2.jpg"

        }, {
            naziv: "JA VOLIM FILHARMONIJU",
            autor: "Aleksandar Kojić",
            cena: "2500",
            datum: "2020-09-22",
            kolicina: 163,
            vrsta: "Filharmonija",
            scena: "Mala scena",
            image: "filharmonija3.jpg"

        }, {

            naziv: "BOLERO",
            autor: "Ravel",
            cena: "970",
            datum: "2020-09-17",
            kolicina: 165,
            vrsta: "Filharmonija",
            scena: "Mala scena",
            image: "filharmonija4.jpg"

        }, {
            naziv: "ERO S ONOGA SVIJETA",
            autor: "Jakov Gotovac",
            cena: "1500",
            datum: "2020-09-27",
            kolicina: "157",
            vrsta: "Opera",
            scena: "Velika scena",
            image: "opera5.jpg"

        }, {
            naziv: "NA LEPOM PLAVOM DUNAVU",
            autor: "Johan Štraus",
            cena: "1200",
            datum: "2020-09-13",
            kolicina: "71",
            vrsta: "Filharmonija",
            scena: "Velika scena",
            image: "filharmonija5.jpg"

        }

    ];
    
    
    var currentlyLoggedIn = {
        status: 9,
        email: "guest"
    }
    console.log(storageOfPerformances);   
    console.log(userStorage);    
    console.log(currentlyLoggedIn);

   // version 1 . We set localStorage ones, and after that use the same localStorage    
   localStorage.removeItem('currentlyLoggedInUser');

    if(JSON.parse(localStorage.getItem('bazadogadjaja')) ===null){
        localStorage.setItem('bazadogadjaja', JSON.stringify(storageOfPerformances));        
    }
    if(JSON.parse(localStorage.getItem('userStorage')) ===null){
        localStorage.setItem('userStorage', JSON.stringify(userStorage));
    }
    
    localStorage.setItem('currentlyLoggedInUser', JSON.stringify(currentlyLoggedIn));


   // version 2 . Every time we clicked icon, we set new localStorage

   /*localStorage.removeItem('bazadogadjaja');
   localStorage.removeItem('userStorage');    
   localStorage.removeItem('currentlyLoggedInUser');

   localStorage.setItem('bazadogadjaja', JSON.stringify(storageOfPerformances)); 
   localStorage.setItem('userStorage', JSON.stringify(userStorage));   
   localStorage.setItem('currentlyLoggedInUser', JSON.stringify(currentlyLoggedIn));*/
}
