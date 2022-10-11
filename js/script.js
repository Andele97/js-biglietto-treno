const prezzoKm = 0.21;
const scontoVenti = 0.2;
const scontoQuaranta = 0.4;
const etaMinore = 18;
const overAdult = 65;
let prezzoBiglietto;
let prezzoFinale;
let sconto;

const km = parseInt(prompt('Inserisci la distanza del luogo'));
const eta = parseInt(prompt('Inserisci i tuo anni'));

prezzoBiglietto = prezzoKm * km;

if (eta < etaMinore) {
  sconto = prezzoBiglietto * scontoVenti;
  prezzoFinale = prezzoBiglietto - sconto;
}

else if (eta > overAdult) {
  sconto = prezzoBiglietto * scontoQuaranta;
  prezzoFinale = prezzoBiglietto - sconto;
} else {
  prezzoFinale = prezzoBiglietto;
}

// STAMPA

let outEta = `${eta}`;
let outKm = `${km} Km`;
let outPrice = `${prezzoFinale.toFixed(2)} €`;

document.getElementById('prezzoFinale').innerHTML += outPrice;
document.getElementById('eta').innerHTML += outEta;
document.getElementById('km').innerHTML += outKm;