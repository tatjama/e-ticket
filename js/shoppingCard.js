createShoppingCard();

function createShoppingCard() {

    //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu korpa
    var shoppingCard = JSON.parse(localStorage.getItem('korpa')) || [];
    console.log(shoppingCard);
    // suma();

    //dodajemo polje za kolicinu rezervacije .
    shoppingCard.forEach(addEraseItem);

    //pozivamo funkciju za iscrtavanje tabele sa rezervisanim događajima
    tableOfReservedPerformances(shoppingCard);

    //dodavanje dugmeta kupi      
    let table = document.getElementById('tabelaRezervisanihDogadjaja');
    let buy = document.createElement('button');
    buy.addEventListener('click', shopping);
    buy.innerHTML = 'Kupi';
    table.appendChild(buy);

    //sumiramo ukupan iznos
    sumShoppingCard();

    function sumShoppingCard() {
        for (let i = 0; i < shoppingCard.length; i++) {
            let sumOfBuyingItems = document.getElementById('ceh').value;
            let sumOfItem = document.getElementById('iznos' + i).innerHTML;
            sumOfBuyingItems = parseInt(sumOfBuyingItems) + parseInt(sumOfItem);
            document.getElementById('ceh').value = sumOfBuyingItems;
        }
    }

    $(document).ready(function() {

        $("#roditelj").on('click', '.obrisi', function(event) {
            console.log(event.target.id);
            var removeId = event.target.id;
            var positionOfRemovedRow = removeId.slice(6);
            //brisanje sume
            document.getElementById('ceh').value -= shoppingCard[positionOfRemovedRow].iznos;

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
        el.obrisi = 'Obrisi';
        el.iznos = parseInt(el.cena) * parseInt(el.rezervacija);

    }



    //Funkcija koja pravi tabelu sa rezervisanim događajima
    function tableOfReservedPerformances(x) {
        let table = document.getElementById('tabelaRezervisanihDogadjaja');
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

    //kraj funkcije tabela rezervisanih događaja


    // Aktivira se pritiskom dugmeta 'kupi'
    //1.smesta  niz kupljenih ulaznica u localStoridge pod nazivom "kupljeno"

    function shopping() {
        //vadimo podatke iz osnovnog lagera 'bazadogadjaja' i smestamo u promenljivu lager
        //. Oduzimamo prodate ulaznice i upisujemo nove kolicine na lager
        var lager = JSON.parse(localStorage.getItem('bazadogadjaja')) || [];
        console.log(lager);
        var purchased = shoppingCard.filter(deleteRemovedFields);
        console.log(purchased);
        for (let i = 0; i < purchased.length; i++) {

            console.log(purchased[i].kolicina);
            console.log(purchased[i].rezervacija);
            var newStock = parseInt(purchased[i].kolicina) - parseInt(purchased[i].rezervacija);
            console.log(newStock);


            for (let j = 0; j < lager.length; j++) {
                console.log(purchased[i].naziv);
                console.log(lager[j].naziv);
                if (purchased[i].naziv === lager[j].naziv) {
                    console.log(lager[j].kolicina);
                    console.log(newStock);
                    lager[j].kolicina = newStock;
                    console.log(lager[j].kolicina);

                    //upisujemo novi lager u localStoridze 'bazadogadjaja'  
                    //pre toga obrisemo dosadasnji lager 
                    localStorage.removeItem('bazadogadjaja');
                    localStorage.setItem('bazadogadjaja', JSON.stringify(lager));
                    document.getElementById('roditelj').style.display = "none";
                    document.getElementById('poruka').innerHTML = "Vaša kupovina je uspešno izvršena. Hvala."

                }
            }
        }
        localStorage.removeItem('kupljeno');
        localStorage.setItem('kupljeno', JSON.stringify(purchased));
        //praznimo localS korpa
        localStorage.removeItem('korpa');
    }

    function deleteRemovedFields (element) {
        return element != undefined;
    }
}