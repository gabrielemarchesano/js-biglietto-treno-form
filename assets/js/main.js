/* 
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

*/

/* ========== MILESTONE 1 ========== */
/* 
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
*/

//Scrivere un programma che chieda all’utente:

//Il numero di chilometri da percorrere
//Creo la variabile per selezionare l'elemento input dell'età
const ageElement = document.getElementById("age-field");
//Stampo in console per un controllo
console.log(ageElement);

//Età del passeggero
//Creo la variabile per selezionare l'elemento input dei chilometri
const kmElement = document.getElementById("kilometer-field");
//Stampo in console per un controllo
console.log(kmElement);

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
const ticketTariff = 0.21;

//Creo una funzione per il calcolo del prezzo del biglietto
const ticketPrice = (km, tariff) => km * tariff;

//Recupero il form
const form = document.querySelector("form");

//Creo l'evento del submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //Creo le variabili dove salvare il valore inserito negli input
  const ageValue = ageElement.value;
  const kmValue = kmElement.value;

  //Controllo se l'utente è minorenne
  if(ageValue < 18){
    //Se lo è, applico lo sconto del 20%
    const under18Ticket = ticketPrice(kmValue, ticketTariff) * 0.80;
    console.log(`Costo del biglietto under18: ${under18Ticket.toFixed(2)}€`);        
  } else if(ageValue > 65){ //Altrimenti se è over 65
    //Applico lo sconto del 60%
    const over65Ticket = ticketPrice(kmValue, ticketTariff) * 0.60;
    console.log(`Costo del biglietto over65: ${over65Ticket.toFixed(2)}€`);    
  } else{ //Altrimenti
    //Non si applicano sconti
    const ticket = ticketPrice(kmValue, ticketTariff);
    console.log(`Costo del biglietto: ${ticket}€`);    
  }
})


/* ========== MILESTONE 2 ========== */
/* 
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

const infoElement = document.getElementById("travel-info");

let message;



form.addEventListener("submit", (event) => {
  event.preventDefault();
  //Creo le variabili dove salvare il valore inserito negli input
  const ageValue = ageElement.value;
  const kmValue = kmElement.value;
  
  const userInfoElement = document.getElementById("userInfo");
  console.log(userInfoElement.value);
  
  //Controllo se l'utente è minorenne
  if(ageValue < 18){
    //Se lo è, applico lo sconto del 20%
    const under18Ticket = ticketPrice(kmValue, ticketTariff) * 0.80;
    message = `Hai: ${ageValue} anni; Percorrerai: ${kmValue}km; Prezzo del biglietto: ${under18Ticket.toFixed(2)}€`;
  } else if(ageValue > 65){ //Altrimenti se è over 65
    //Applico lo sconto del 60%
    const over65Ticket = ticketPrice(kmValue, ticketTariff) * 0.60;
    message = `Hai: ${ageValue} anni; Percorrerai: ${kmValue}km; Prezzo del biglietto: ${over65Ticket.toFixed(2)}€`;
  } else{ //Altrimenti
    //Non si applicano sconti
    const ticket = ticketPrice(kmValue, ticketTariff);
    message = `Hai: ${ageValue} anni; Percorrerai: ${kmValue}km; Prezzo del biglietto: ${ticket.toFixed(2)}€`;
  }
  
  infoElement.innerHTML = message;

  const userOutput = document.getElementById("user-info");
  userOutput.innerText = userInfoElement.value; 

})
