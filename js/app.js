//getting tickets
class Tickets{
    async getTickets(){
        try{
            let result =  await fetch('tickets.json');
            let data = await result.json();
            let ticket = data.tickets.map(item=>{
                const {naziv, autor, cena, kolicina, scena, datum, image, vrsta}= item;
                return {naziv, autor, cena, kolicina, scena, datum, image, vrsta};
            })
            return ticket;
        }catch{
            console.error();
        }        
    }
}
//getting Languages
class Languages{
    async getLanguages(){
        try{
            let result = await fetch('languages.json');
            let data = await result.json();
            let language = data.languages.map((item) => {
                const{en, sr} = item;
                return{en, sr};
            })
            return language;
        }catch{
            console.error();
        }
    }
}

//display tickets
class UI{
    displayTickets(tickets){
        console.log(tickets)
        let result = '';
        tickets.forEach((ticket)=>{
            result += `
            <div class="program-row">
            <div class="program-item img-container" >
              <img class="program-img" alt="labudovo jezero" src="./images/webp/${ticket.image}">
            </div>
            <div class="program-item">${ticket.naziv}</div>
            <div class="program-item">${ticket.autor}</div>
            <div class="program-item">${ticket.datum}</div>
            <div class="program-item hide-item">${ticket.vrsta}</div>
            <div class="program-item hide-item">${ticket.scena}</div>
            <div class="program-item hide-item" >${ticket.cena},00 RSD</div>            
          </div>     `

            document.querySelector('.program-row-container').innerHTML = result;          
        })
    }
}
//set to localStorage tickets and languages
class Storage{
    static saveStorageTickets(tickets){
        localStorage.setItem('tickets', JSON.stringify(tickets));        
    }
    static saveStorageLanguages(languages){
        localStorage.setItem('languages', JSON.stringify(languages));
    }    
}


document.addEventListener('DOMContentLoaded',()=>{
    
    const tickets = new Tickets();
    const languages = new Languages();
    const ui = new UI();
    //get tickets
    tickets.getTickets().then((tickets)=>{
        ui.displayTickets(tickets);
        Storage.saveStorageTickets(tickets);
    })
    //get languages
    languages.getLanguages().then((languages) => {
        Storage.saveStorageLanguages(languages);
    })
   //console.log(tickets.getTickets())
   console.log(languages.getLanguages());
})

function setLocalStorage(a, b, c, d) {
    
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
        { name: "ADMINISTRATOR", surname: "ADMIN", email: "admin@admin.com", password: "admin", status: "0" },
        { name: "TATJANA", surname: "MARKOVIC", email: "tanja120a@gmail.com", password: "tanja", status: "0" },
        { name: "TANJA", surname: "MARKOVIC", email: "tanja120@gmail.com", password: "tanja", status: "0" },
        { name: "USER", surname: "USER", email: "user@user.com", password: "user", status: "1" },
        { name: "PERA", surname: "PERIC", email: "pera@gmail.com", password: "pera", status: "1" },
        { name: "MITAR", surname: "MIRIC", email: "mitar@gmail.com", password: "mitar", status: "1" },
        { name: "IVAN", surname: "IVANOVIC", email: "ivan@gmail.com", password: "ivan", status: "1" }

    ];
        
    var currentlyLoggedIn = {
        status: 9,
        email: "guest"
    }
    //console.log(storageOfPerformances);   
    console.log(userStorage);    
    console.log(currentlyLoggedIn);

   // version 1 . We set localStorage ones, and after that use the same localStorage    
  localStorage.removeItem('currentlyLoggedInUser');

    
    if(JSON.parse(localStorage.getItem('userStorage')) ===null){
        localStorage.setItem('userStorage', JSON.stringify(userStorage));
    }
    
    localStorage.setItem('currentlyLoggedInUser', JSON.stringify(currentlyLoggedIn));


   // version 2 . Every time we clicked icon, we set new localStorage

  /* localStorage.removeItem('tickets');
   localStorage.removeItem('userStorage');    
   localStorage.removeItem('currentlyLoggedInUser');

   localStorage.setItem('tickets', JSON.stringify(storageOfPerformances)); 
   localStorage.setItem('userStorage', JSON.stringify(userStorage));   
   localStorage.setItem('currentlyLoggedInUser', JSON.stringify(currentlyLoggedIn));*/
}