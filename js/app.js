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

document.addEventListener('DOMContentLoaded',()=>{
    const tickets = new Tickets();
    tickets.getTickets().then((data)=>console.log(data))
   // console.log(tickets.getTickets())
})