// Prezzo al km fisso
const prezzoAlKm = 0.21;

// Prezzo scritto nello span dell'html
const prezzoFinaleDisplay = document.getElementById('prezzoFinale');

// Fix per input 0 + prompt per sapere e calcolare km total
let kmTotali = parseFloat(prompt('Quanti km devi percorrere?'));
if (isNaN(kmTotali)) {
    kmTotali = 0;
}

// Calcolo il totale in base ai km
let prezzoFinale = kmTotali * prezzoAlKm;
prezzoFinale = prezzoFinale.toFixed(2);

// Prompt per sapere gli anni per i calcoli
let userAge = parseFloat(prompt('Quanti anni hai?'));
if (isNaN(userAge)) {
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
