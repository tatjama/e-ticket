//FETCH TICKETS FROM JSON
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

//FETCH DICTIONARY FROM JSON
class Languages{
    async getLanguages(){
        try{
            let result = await fetch('languages.json');
            let data = await result.json();
            let languages = data.languages;
            let en = languages[0];
            let sr = languages[1];
            return{en, sr}           
        }catch{
            console.error();
        }
    }
}

//DISPLAY TICKETS
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

//SET TO LOCAL STORAGE
class Storage{
    static saveStorageTickets(tickets){
        localStorage.setItem('tickets', JSON.stringify(tickets));        
    }
    static getStorageTickets(){
      let tickets =  JSON.parse(localStorage.getItem('tickets'));
      return tickets
    }
    static saveStorageLanguages(languages){
        localStorage.setItem('languages', JSON.stringify(languages));
    }    
}

//for the first time tickets are fetched from tickets.JSON and put it on localStorage, 
//after that always take tickets from localStorage, so changes of quantity are displayed
document.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('tickets') === null){
    const tickets = new Tickets();
    const languages = new Languages();
    const ui = new UI();
    //get tickets
    tickets.getTickets().then((tickets)=>{
        ui.displayTickets(tickets);
        Storage.saveStorageTickets(tickets);
    })
    
    languages.getLanguages().then((languages) => {
        Storage.saveStorageLanguages(languages);
    })
   console.log(languages.getLanguages());
}else{
   let tickets = Storage.getStorageTickets();
    const ui = new UI();    
    ui.displayTickets(tickets);    
}
})