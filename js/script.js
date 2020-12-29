// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.


var sceltaUtente = sceltaGiocatore();
var numeroUtente = sceltaNumero();
var numeroComputer = numeroRandom(1,5);
var sommaNumeri = numeroUtente + numeroComputer;


console.log(sceltaUtente);
console.log(numeroUtente);
console.log(numeroComputer);
console.log(sommaNumeri);
console.log(pariDispari(sommaNumeri));

if (sceltaUtente == pariDispari(sommaNumeri)){
  console.log("Hai vinto");
} else {
  console.log("Hai perso");
}

// FUNZIONI**********

function sceltaGiocatore(){
  var scelta = prompt("Scegli pari o dispari").toLowerCase();

  while (scelta != "pari" && scelta != "dispari"){
    alert("Attenzione: immettere pari o dispari");
    scelta = prompt("Scegli pari o dispari").toLowerCase();
  }
  return scelta;
}

function sceltaNumero(){
  var numero = parseInt(prompt("scegli un numero da 1 a 5"));

  while (numero < 1 || numero > 5){
    alert("attenzioneil numero deve essere compreso tra 1 e 5");
    numero = parseInt(prompt("scegli un numero da 1 a 5"));
  }
  return numero;
}

function pariDispari(n){
  var messaggio = "dispari";

  if (n % 2 != 0){
    return messaggio;
  }
  return messaggio = "pari";
}

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
