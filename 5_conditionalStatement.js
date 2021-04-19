//IF STATEMENT
/*
SYNTAX --> if(boolean condition is true) {execute this code}
else if ( boolean condition) { execute this code}
immagina else if come se dicesse che la prima condizione non è true allora lo sarà la seconda
else {execute this} --> la sintassi di else non ha una condizione, immagina come se nient'altro di ciò che ci stava sopra era vero
allora fai questo.
A logica possiamo quindi avere tanti else if ma 1 solo else.
*/
let rating = 66;

if (rating === 3) {
  console.log("OTTIMO");
} else if (rating === 2) {
  console.log("BUONO");
} else if (rating === 1) {
  console.log("SUFFICENTE");
} else {
  console.log("ECCELLENTE");
}

//SWITCH STATEMENT
/*
lo switch statement viene utilizzato per eseguire diverse azioni basate su differenti condizioni
la parola "break" viene inserita dopo ogni case poichè altrimenti i successivi case verrebbero eseguiti a
prescindere.
Viene inserito il case "default" poichè nel caso il valore uscisse dai vari case la funzione non va in errore
*/
let day = 7;

switch (day) {
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  default:
    console.log("RELAXXXX");
    break;
}

//TERNARY OPERATOR
/*
l'operatore ternario si usa principalmente con if e else e permette di racchiudere
 in una singola linea un if statement
 la sintassi è questa --> CONDITION ? OPERATION TRUE : OPERATION FALSE
 conviene usarlo con delle condizioni brevi altrimenti verrebbe fuori un pasticcio
*/
let num = 7;
num === 7 ? console.log("true") : console.log("false");

//VALORI FALSI E VERI DI BASE
/*
Valori falsi di propria natura --> false,0," "(stringa vuota),null,undefined,NaN
valori veri di base --> tutto il resto!
*/


//IF ANNIDATI
//è anche possibile "annidare" più if uno dentro l'altro.
let password = 'hello  kitty';

if (password.length >= 6) {
	if (password.indexOf(' ') === -1) {
		console.log('Valid Password!');
	}
	else {
		console.log('Password is long enough, but cannot contain spaces');
	}
}
else {
	console.log('Password must be longer!');
}
