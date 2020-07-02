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
//set to localStorage
class Storage{
    static saveStorage(tickets){
        localStorage.setItem('tickets', JSON.stringify(tickets));
    }
}


document.addEventListener('DOMContentLoaded',()=>{
    
    const tickets = new Tickets();
    const ui = new UI();
    //get tickets
    tickets.getTickets().then((tickets)=>{
        ui.displayTickets(tickets);
        Storage.saveStorage(tickets);
    })
   // console.log(tickets.getTickets())
})