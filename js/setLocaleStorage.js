function setLocalStorage(a, b, c, d) {
    //localStorage.removeItem('bazakorisnika');

    //preuzimanje vrednosti local storidga i slanje na drugu adresu
    /*
        var nizDogadjaja = JSON.parse(localStorage.getItem('bazadogadjaja'));
        var bazakorisnika = JSON.parse(localStorage.getItem('bazakorisnika'));
        var trenutnoUlogovani = {
            status: 9,
            email: "gost"
        }
        console.log(nizDogadjaja);
        console.log(bazakorisnika);
        localStorage.setItem('bazadogadjaja3', JSON.stringify(nizDogadjaja));
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
    var nizDogadjaja = [{
            naziv: "KARMEN",
            autor: "Bize",
            cena: "700",
            datum: "2019-05-10",
            kolicina: 123,
            vrsta: "Opera",
            scena: "Mala scena"

        },
        {
            naziv: "RADOVAN TREĆI",
            autor: "Dušan Kovačević",
            cena: "500",
            datum: "2019-05-20",
            kolicina: 8,
            vrsta: "Predstava",
            scena: "Mala scena"

        }, {

            naziv: "GOSPOĐA MINISTARKA",
            autor: "Branislav Nušić",
            cena: "800",
            datum: "2019-05-15",
            kolicina: 163,
            vrsta: "Predstava",
            scena: "Mala scena"

        },
        {
            naziv: "TRAVIJATA",
            autor: "Đuzepe Verdi",
            cena: "860",
            datum: "2019-05-19",
            kolicina: 161,
            vrsta: "Opera",
            scena: "Velika scena"

        }, {
            naziv: "BALKANSKI ŠPIJUN",
            autor: "Dušan Kovačević",
            cena: "680",
            datum: "2019-05-11",
            kolicina: 175,
            vrsta: "Predstava",
            scena: "Mala scena"

        }, {
            naziv: "LABUDOVO JEZERO",
            autor: "Petar Iljič Čajkovski",
            cena: "900",
            datum: "2019-05-18",
            kolicina: 236,
            vrsta: "Balet",
            scena: "Velika scena"

        }, {
            naziv: "ČUDO U ŠARGANU",
            autor: "LJubomir Simović",
            cena: "550",
            datum: "2019-05-25",
            kolicina: 80,
            vrsta: "Predstava",
            scena: "Mala scena"

        }, {
            naziv: "DAMA S KAMELIJAMA",
            autor: "Aleksandar Dima Sin",
            cena: "800",
            datum: "2019-05-16",
            kolicina: 255,
            vrsta: "Predstava",
            scena: "Mala scena"

        }, {
            naziv: "EVGENIJE ONJEGIN",
            autor: "Petar Iljič Čajkovski",
            cena: "900",
            datum: "2019-05-16",
            kolicina: 58,
            vrsta: "Balet",
            scena: "Velika scena"

        }, {
            naziv: "KRCKO ORAŠČIĆ",
            autor: "Petar Iljič Čajkovski",
            cena: "980",
            datum: "2019-05-28",
            kolicina: 37,
            vrsta: "Balet",
            scena: "Velika scena"

        }, {
            naziv: "KRALJICA MARGO",
            autor: "Goran Bregović",
            cena: "700",
            datum: "2019-05-17",
            kolicina: 195,
            vrsta: "Balet",
            scena: "Mala scena"

        }, {
            naziv: "USPAVANA LEPOTICA",
            autor: "Petar Iljič Čajkovski",
            cena: "800",
            datum: "2019-05-16",
            kolicina: 79,
            vrsta: "Balet",
            scena: "Mala scena"

        }, {
            naziv: "KAVALERIJA RUSTIKANA",
            autor: "Pjetro Maskanji",
            cena: "1000",
            datum: "2019-05-21",
            kolicina: 151,
            vrsta: "Opera",
            scena: "Velika scena"

        }, {
            naziv: "AIDA",
            autor: "Đuzepe Verdi",
            cena: "880",
            datum: "2019-05-18",
            kolicina: 158,
            vrsta: "Opera",
            scena: "Velika scena"

        }, {
            naziv: "MUZIČKI RAZGOVORI",
            autor: "Nemanja Stanković",
            cena: "2000",
            datum: "2019-05-15",
            kolicina: 163,
            vrsta: "Filharmonija",
            scena: "Mala scena"

        }, {
            naziv: "KONCERT NA OTVORENOM",
            autor: "Gabrijel Felc",
            cena: "100",
            datum: "2019-05-22",
            kolicina: 93,
            vrsta: "Filharmonija",
            scena: "Velika scena"

        }, {
            naziv: "JA VOLIM FILHARMONIJU",
            autor: "Aleksandar Kojić",
            cena: "2500",
            datum: "2019-05-22",
            kolicina: 163,
            vrsta: "Filharmonija",
            scena: "Mala scena"

        }, {

            naziv: "BOLERO",
            autor: "Ravel",
            cena: "970",
            datum: "2019-05-17",
            kolicina: 165,
            vrsta: "Filharmonija",
            scena: "Mala scena"

        }, {
            naziv: "ERO S ONOGA SVIJETA",
            autor: "Jakov Gotovac",
            cena: "1500",
            datum: "2019-05-27",
            kolicina: "157",
            vrsta: "Opera",
            scena: "Velika scena"

        }, {
            naziv: "NA LEPOM PLAVOM DUNAVU",
            autor: "Johan Štraus",
            cena: "1200",
            datum: "2019-05-13",
            kolicina: "71",
            vrsta: "Filharmonija",
            scena: "Velika scena"

        }

    ];
    
    var currentlyLoggedIn = {
        status: 9,
        email: "guest"
    }
    console.log(nizDogadjaja);   
    console.log(userStorage);    
    console.log(currentlyLoggedIn);

    localStorage.removeItem('bazadogadjaja');
    localStorage.removeItem('userStorage');    
    localStorage.removeItem('currentlyLoggedInUser');

    localStorage.setItem('bazadogadjaja', JSON.stringify(nizDogadjaja));
    localStorage.setItem('userStorage', JSON.stringify(userStorage));
    localStorage.setItem('currentlyLoggedInUser', JSON.stringify(currentlyLoggedIn));
}
