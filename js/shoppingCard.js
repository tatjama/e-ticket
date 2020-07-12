//vadi niz iz local S i parsira u JavaScript, smesta u promenljivu korpa
var shoppingCard = JSON.parse(localStorage.getItem('korpa')) || [];
var currentlyLoggedIn =JSON.parse(sessionStorage.getItem('user')) ;  
let currentlyLanguage = cLanguage();

//Language is defined 
function cLanguage(){
    let currentlyLanguage;
    if(JSON.parse(sessionStorage.getItem('lang')) === null){
         currentlyLanguage = 'en';
    }else{
        currentlyLanguage = JSON.parse(sessionStorage.getItem('lang')).language;
        console.log(currentlyLanguage);        
    }
    console.log(currentlyLanguage)
    return currentlyLanguage;
}
console.log(currentlyLanguage)

createShoppingCard(currentlyLanguage);

function createShoppingCard(x) {    
    console.log(shoppingCard);
    if(x === 'sr'){
        countMessage = "Vaš račun je zadužen za ";
        payMessage = " RSD. Molimo Vas da izvršite plaćanje...";
        thankYouMessage = "Hvala za izvršenu uplatu  ";
        clear = 'Ukloni';
    }else{
        countMessage = "Your account is a charge of ";
        payMessage = " RSD. Please make your payment...";
        thankYouMessage = "Thank you for making payment  ";
        clear = 'Clear';
    }

    
    //dodajemo polje za kolicinu rezervacije .
    shoppingCard.forEach(addEraseItem);

    //pozivamo funkciju za iscrtavanje tabele sa rezervisanim događajima
    tableOfReservedPerformances(shoppingCard);    

    //sumiramo ukupan iznos
    sumShoppingCard();    
}
//functiom make sum of shopping card
function sumShoppingCard() {
    for (let i = 0; i < shoppingCard.length; i++) {
        let sumOfBuyingItems = document.getElementById('sum-of-buying-items').value;
        let sumOfItem = document.getElementById('iznos' + i).innerHTML;
        sumOfBuyingItems = parseInt(sumOfBuyingItems) + parseInt(sumOfItem);
        document.getElementById('sum-of-buying-items').value = sumOfBuyingItems;
    }
}

//When "ukloni" button is clicked, function remove all column
$(document).ready(function() {

    $("#table-main").on('click', '.obrisi', function(event) {
        console.log(event.target.id);
        var removeId = event.target.id;
        var positionOfRemovedRow = removeId.slice(6);
        //deleting sum
        document.getElementById('sum-of-buying-items').value -= shoppingCard[positionOfRemovedRow].iznos;

        delete shoppingCard[positionOfRemovedRow]
        console.log(positionOfRemovedRow);
        $(this).closest('tr').remove();
        var purchasedItems = shoppingCard.filter(deleteRemovedFields);

        console.log(purchasedItems);
        console.log(shoppingCard);

    });

});


//FUNKCIJE:

function addEraseItem(el) {    
    el.obrisi = clear;
    el.iznos = parseInt(el.cena) * parseInt(el.rezervacija);
}



//Function create table with reserved performances or items.
function tableOfReservedPerformances(x) {
    let table = document.getElementById('table-of-reserved-performances');
    table.style.display = 'initial';

    for (y in x) {
        let tableRow = document.createElement('tr');

        for (i in x[y]) {
            let tableCells = document.createElement('td');
            tableCells.innerHTML = x[y][i];
            //dodajemo class-u za svaku celiju
            tableCells.setAttribute('class', i);
            tableCells.setAttribute('id', i + y);
            tableRow.appendChild(tableCells);
        }

        table.appendChild(tableRow);
    }
    console.log(x);
    return x;
}

//End od fuction tableOfReservedPerformances


// Function shopping is ativated when "Izvrsi placanje " is clicked and
//put arrey of buying tickets in the localStorage by the name "kupljeno"

 function shopping () {
    //vadimo podatke iz osnovnog lagera 'bazadogadjaja' i smestamo u promenljivu lager
    //. Oduzimamo prodate ulaznice i upisujemo nove kolicine na lager
    var lager = JSON.parse(localStorage.getItem('bazadogadjaja')) || [];
    console.log(lager);
    var purchased = shoppingCard.filter(deleteRemovedFields);
    console.log(purchased);
    document.getElementById('shopping-button').style.display = "none";
    document.getElementById('pay-button').style.display = "block";

    for (let i = 0; i < purchased.length; i++) {
       // console.log(purchased[i].kolicina);
        //console.log(purchased[i].rezervacija);
        var newStock = parseInt(purchased[i].kolicina) - parseInt(purchased[i].rezervacija);
        //console.log(newStock);
        var userBill = document.getElementById('sum-of-buying-items').value
        for (let j = 0; j < lager.length; j++) {
           // console.log(purchased[i].naziv);
           // console.log(lager[j].naziv);
            if (purchased[i].naziv === lager[j].naziv) {
                console.log(lager[j].kolicina);
                console.log(newStock);
                lager[j].kolicina = newStock;
                console.log(lager[j].kolicina);

                //upisujemo novi lager u localStoridze 'bazadogadjaja'  
                //pre toga obrisemo dosadasnji lager 
                localStorage.removeItem('bazadogadjaja');
                localStorage.setItem('bazadogadjaja', JSON.stringify(lager));
                document.getElementById('table-main').style.display = "none";
                document.getElementById('thank-you-message').innerHTML = 
                countMessage + userBill + payMessage                
            }
        }
    }
    localStorage.removeItem('kupljeno');
    localStorage.setItem('kupljeno', JSON.stringify(purchased));
    //praznimo localS korpa
    localStorage.removeItem('korpa');
}
//end of function shopping

function pay(){
    document.getElementById('pay-button').style.display = "none";
    document.getElementById('thank-you-message').innerHTML = thankYouMessage + currentlyLoggedIn.name +
    " " + currentlyLoggedIn.surname ;
    document.getElementById('sum-of-buying-items').value = "0";
}

function deleteRemovedFields (element) {
    return element != undefined;
}