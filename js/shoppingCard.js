//vadi niz iz local S i parsira u JavaScript, smesta u promenljivu korpa
var shoppingCard = JSON.parse(localStorage.getItem('korpa')) || [];
var currentlyLoggedIn =JSON.parse(sessionStorage.getItem('user')) ;  
createShoppingCard();

function createShoppingCard() {    
    console.log(shoppingCard);
    // suma();

    //dodajemo polje za kolicinu rezervacije .
    shoppingCard.forEach(addEraseItem);

    //pozivamo funkciju za iscrtavanje tabele sa rezervisanim događajima
    tableOfReservedPerformances(shoppingCard);

    //dodavanje dugmeta zavrsi kupovinu    
    //!!! ovo smo izbacili dugme je fiksno  
    /*let table = document.getElementById('table-of-reserved-performances');
    let buy = document.createElement('button');
    buy.addEventListener('click', shopping);
    buy.innerHTML = 'Završi kupovinu';
    table.appendChild(buy);*/

    //sumiramo ukupan iznos
    sumShoppingCard();    
}
//functiom make sum of shopping card
function sumShoppingCard() {
    for (let i = 0; i < shoppingCard.length; i++) {
        let sumOfBuyingItems = document.getElementById('sum-of-buying-items').value;
        let sumOfItem = document.getElementById('iznos' + i).innerHTML;
        sumOfBuyingItems = parseInt(sumOfBuyingItems) + parseInt(sumOfItem);
       // sumOfBuyingItems = thousands_separators(sumOfBuyingItems);
        document.getElementById('sum-of-buying-items').value = sumOfBuyingItems;
    }
}



//When "ukloni" button is clicked, function remove all column
$(document).ready(function() {

    $("#table-main").on('click', '.obrisi', function(event) {
        console.log(event.target.id);
        var removeId = event.target.id;
        var positionOfRemovedRow = removeId.slice(6);
        //brisanje sume
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
    el.obrisi = 'Ukloni';
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
            //console.log(i + y);
            tableRow.appendChild(tableCells);
        }

        table.appendChild(tableRow);
    }
    console.log(x);
    // suma();
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
                "Vaš račun je zadužen za " + userBill + 
                " RSD. Molimo Vas da izvršite plaćanje..."
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
    document.getElementById('thank-you-message').innerHTML = "Uplata je izvršio " + currentlyLoggedIn.name +
    " " + currentlyLoggedIn.surname + ". Hvala.";
    document.getElementById('sum-of-buying-items').value = "0";


}

function deleteRemovedFields (element) {
    return element != undefined;
}