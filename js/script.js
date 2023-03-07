const nomeUtente = prompt('inserisci il tuo Nome');
const cognomeUtente = prompt('inserisci il tuo Cognome');
const coloreUtente = prompt('inserisci il tuo colore preferito');
const numero = 21;

let show = (nomeUtente);
console.log(show);
let watch = (cognomeUtente)
console.log(watch)
let see = (coloreUtente)
console.log(see)

if (nomeUtente && cognomeUtente  && coloreUtente) {
  if (isNaN (parseInt (nomeUtente)) && isNaN (parseInt (cognomeUtente)) && isNaN (parseInt (coloreUtente))) {
document. getElementById('password').innerHTML =
`<h1>${nomeUtente}${cognomeUtente}${coloreUtente}${numero}</h1>`;
  }
}

  else {
document. getElementById('password').innerHTML =
`<h1>Inserisci valori validi</h1>`;
  }

console. log(nomeUtente + cognomeUtente + numero);