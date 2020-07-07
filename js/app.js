//getting tickets
class Tickets{
    async getTickets(){
        try{
            let result =  await fetch('tickets.json');
            let data = await result.json();
            let ticket = data.tickets.map(item=>{
                const {title, author, price, quantity, scene, date, image, type}= item;
                return {title, author, price, quantity, scene, date, image, type};
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
            <div class="program-item">${ticket.title}</div>
            <div class="program-item">${ticket.author}</div>
            <div class="program-item">${ticket.date}</div>
            <div class="program-item hide-item">${ticket.type}</div>
            <div class="program-item hide-item">${ticket.scene}</div>
            <div class="program-item hide-item" >${ticket.price},00 RSD</div>            
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
    
    languages.getLanguages().then((languages) => {
        Storage.saveStorageLanguages(languages);
    })
   //console.log(tickets.getTickets())
   console.log(languages.getLanguages());
})