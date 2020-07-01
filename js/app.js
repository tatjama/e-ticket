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
            <div class="program-item">${ticket.type}</div>
            <div class="program-item">${ticket.scene}</div>
            <div class="program-item" >${ticket.price},00 RSD</div>
            
          </div>     `

            document.querySelector('.program-row-container').innerHTML = result;
           /* result += `

            <div class="premiere">
                  
                   <img  alt="balet1" src="./images/webp/${ticket.image}">
                  
                  <div class="parallax- text"> 
                    <a href="./view/eshop.html">
                    <h4 >${ticket.title}</h4> </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique diam in tempor condimentum. Proin condimentum a purus non malesuada. Nulla et dignissim libero, a accumsan enim. Quisque at auctor dolor. Praesent vitae neque iaculis,
                      molestie sapien quis, pretium est. Sed vehicula                      
                    </p>
                    <h5> <span class="lang" key="date"> DATE: </span> ${ticket.date}</h5>
                      <h5><span class="lang" key = "time">TIME: </span> 20:00h</h5>
                      <h5><span class="lang" key = 'scene'>SCENE: </span> ${ticket.scene}</h5>
                    </div>
                       
                  </div> 
            `;
           document.querySelector('.program-list').innerHTML = result;*/

        })
    }
}


document.addEventListener('DOMContentLoaded',()=>{
    
    const tickets = new Tickets();
    const ui = new UI();
    //get tickets
    tickets.getTickets().then((tickets)=>{
        ui.displayTickets(tickets)
    })
   // console.log(tickets.getTickets())
})