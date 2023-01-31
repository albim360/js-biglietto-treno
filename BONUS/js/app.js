// Prezzo al km fisso
const prezzoAlKm = 0.21;

// Prezzo scritto nello span dell'html
const prezzoFinaleDisplay = document.getElementById('prezzoFinale');

// Fix per input 0 + prompt per sapere e calcolare km total
let kmTotali = parseFloat(prompt('Quanti km devi percorrere?'));
if (isNaN(kmTotali)) {
    alert("Devi inserire un numero");
    kmTotali = 0;
}

// Calcolo il totale in base ai km
let prezzoFinale = kmTotali * prezzoAlKm;
prezzoFinale = prezzoFinale.toFixed(2);

// Prompt per sapere gli anni per i calcoli
let userAge = parseFloat(prompt('Quanti anni hai?'));
if (isNaN(userAge)) {
    alert("Devi inserire un numero");
    userAge = 0;
}

// Calcolo totale scontato per i bambini
let discountChild = prezzoFinale - (prezzoFinale / 100) * 20;

// Calcolo totale scontato per i vecchi
let discountOld = prezzoFinale - (prezzoFinale / 100) * 40;

// Stampa in HTML il risultato in base all'età
if (userAge <= 12) {
    prezzoFinaleDisplay.innerHTML = "€" + discountChild.toFixed(2);
} else if (userAge >= 65) {
    prezzoFinaleDisplay.innerHTML = "€" + discountOld.toFixed(2);
} else {
    prezzoFinaleDisplay.innerHTML = "€" + prezzoFinale;
}

// Nome e cognome del passeggero
let nomeCognome = prompt("Inserisci il tuo nome e cognome");

// Prezzo base del biglietto
let prezzoBase = kmTotali * prezzoAlKm;
prezzoBase = prezzoBase.toFixed(2);

// Valore dello sconto
let valoreSconto;
if (userAge <= 12) {
valoreSconto = prezzoBase - discountChild;
} else if (userAge >= 65) {
valoreSconto = prezzoBase - discountOld;
} else {
valoreSconto = 0;
}

// Prezzo finale del biglietto
let prezzoFinaleBiglietto = prezzoBase - valoreSconto;

// Stampa su HTML del biglietto
document.getElementById("nomeCognome").innerHTML = nomeCognome;
document.getElementById("kmTotali").innerHTML = kmTotali + " km";
document.getElementById("prezzoBase").innerHTML = "€" + prezzoBase;
document.getElementById("valoreSconto").innerHTML = "€" + valoreSconto.toFixed(2);
document.getElementById("prezzoFinale").innerHTML = "€" + prezzoFinaleBiglietto.toFixed(2);
