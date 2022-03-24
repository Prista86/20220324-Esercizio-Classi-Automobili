class Car {        //creazione classe 
    constructor(id, brand, modello, alimentazione, colore, cavalli, targa) {
        this.id = id;
        this.brand = brand;
        this.modello = modello;
        this.colore = colore;
        this.cavalli = cavalli;
        this.targa = targa;
    }
}
var indice = 0;    
//instanziare l'oggetto car
const car1 = new Car(1, 'Fiat', 'Panda', 'Benzina', 'Rossa', 70, 'AA000BB');
const car2 = new Car(2, 'Ford', 'Fiesta', 'Diesel', 'Blu', 72, 'CC000DD');
const car3 = new Car(3, 'Ferrari', 'Testa Rossa', 'Benzina', 'Gialla', 550, 'EE000FF')
const car4 = new Car(4, 'Porsche', 'Cayman', 'Gpl', 'Arancione', 130, 'GG000HH')
const ListaMacchine = [car1, car2, car3, car4];
StampaListaDatiVettura();


const btnP = document.getElementById('btnP');  //gestione bottone Precedente con incremento indice
btnP.onclick = function () {
    indice--;
        if(indice == -1){
            indice=3;
        }
    console.log(indice);
    StampaListaDatiVettura();
}

const btnS = document.getElementById('btnS');   //gestione bottone Precedente con incremento indice
btnS.onclick = function () {
    indice++;
        if(indice == 4){
            indice=0;
        }
    console.log(indice);
    StampaListaDatiVettura();
}

function StampaListaDatiVettura() {  //completa la tabella con le info della classe
    const celId = document.getElementById('celId');
    celId.innerText = ListaMacchine[indice].id;
    const btnV = document.getElementById('btnV');
    btnV.innerText = ListaMacchine[indice].brand;
    const celModello = document.getElementById('celModello');
    celModello.innerText = ListaMacchine[indice].modello;
    const celColore = document.getElementById('celColore');
    celColore.innerText = ListaMacchine[indice].Colore;
    const celCavalli = document.getElementById('celCavalli');
    celCavalli.innerText = ListaMacchine[indice].cavalli;
    const celTarga = document.getElementById('celTarga');
    celTarga.innerText = ListaMacchine[indice].targa;
}

$(document).ready(function(){
    $('#btnV').click(function(){
      $('.cel1').slideToggle();
    });
});