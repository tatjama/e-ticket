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
//set to localStorage
class Storage{
    static saveStorageTickets(tickets){
        localStorage.setItem('tickets', JSON.stringify(tickets));
        
    }
    static saveStorageLanguages(languages){
        localStorage.setItem('languages', JSON.stringify(languages));
    }
    
}


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
}
})