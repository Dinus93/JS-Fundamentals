//DEFAULT PARAMS FUNCTION
/*
Quando una funzione che accetta 1 o 2 parametri in ingresso viene richiamata
bisogna passargli 1 o 2 valori

*/
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4));
//nel caso in cui passassimo 1 solo valore quando la funzione ne accetta 2 otterremo un errore NaN poichè il valore della variabile
//b è undefined

/*
Con default parameter possiamo definire il parametro di default nel momento in cui definiamo la funzione
così da non esserci bisogno di definirlo al momento della chiamata della funzione
*/
function moltiplica(a, b = 5) {
  return a * b;
}

console.log(moltiplica(4));

//SPREAD OPERATOR

/*
lo spread operator è utilizzabile su ogni cosa che è iterabile come ad esempio stringhe,array,ecc...
Per definizione (spread vuol dire "diffondere") permette ad un iterable come un array,ad esempio,di essere espanso
in posti dove 0 o più arguments (function calls) o elementi (array) sono richiesti.
Permette di:
1) aggiungere elementi di un array ad un array esistente
2) copiare array in un altro array
3) passare gli elementi di un array ad una funzione come argomenti separati
4)è utilizzabile anche con le property di un object
*/

const nums = [9, 4, 3, 8];
console.log(Math.max(nums));
//da errore poichè il metodo max dell'object Math non accetta 1 solo argument ma minimo 2

//si fa così allora mediante l'operatore spread
console.log(Math.max(...nums));
//funziona perfettamente

//spread array literals
const mammiferi = ["cani", "gatti", "mucche", "pecore", "maiali"];
const anfibi = ["rane", "rospi", "salamandre"];
const uccelli = ["rondine", "corvo", "fringuello"];
// abbiamo copiato 3 array dentro un altro
const animals = [...mammiferi, ...anfibi, ...uccelli];
console.log(animals);

//spread object literals
const feline = {
  legs: 4,
  family: "Felidae",
};
const caninae = {
  family: "Caninae",
  furry: true,
};
const dog = {
  ...caninae,
  isPet: true,
  adorable: true,
};
//così facendo abbiamo unito le object property di caninae con quelle di dog
console.log(dog);
//nel caso in cui ci fossero state delle property con chiave uguale avrebbe vinto l'ultima ad essere dichiarata.




//REST PARAMETERS
/*
Il parametro REST è un nuovo modo per gestire i parametri delle funzioni che ci permette di rappresentare un numero indefinito
di arguments come un array.
è utilizzabile solo all'interno della lista di parametri di una funzione.
SYNTAX --> function "nomeFunzione" (...nums) {...} --> nums in questo caso è un array che verrà riempito di elementi quando la
funzione verrà richiamata e ci verranno passati dei dati.
N.B --> i parametri rest devono essere posizionati sempre come ultimi arguments. -->function f(a,...b,c){...} ERRORE!!
Il suo caso d'uso migliore sarebbe quello di quando non si sa esattamente quanti saranno gli elementi da passare a quella funzione

*/

function sumAll(...nums) {
  let total = 0;
  for (let n of nums) total = total + n;
  return total;
}

console.log(sumAll(1, 2, 5, 8, 9));

function testRest(first, last, ...rest) {
  console.log("first", first);
  console.log("last", last);
  console.log("rest", rest);
}

testRest();

//DESTRUCTURING
/*
il destructuring consiste nel "tirar fuori" specifici valori da un array o property da un object in nuove variabili.
*/

const results = ["first", "last", "second"];

const [gold, bronze, silver] = results;
// la sintassi di destructuring è questa mostrata sopra ed è inversa a quella della dichiarazione di un array
//SYNTAX --> CONST [variabile,variabile,variabile,...] = array
gold;
silver;
bronze;

//per quanto riguarda gli object
const runner = {
  first: "Dino",
  last: "Monaco",
  country: "Italy",
};
const { first, last, country } = runner;

first;
last;
country;

/* per quanto riguarda il destructuring con gli object l'unica cosa da dire
è che a differenza degli array in cui le variabili utilizzate seguivano l'ordine degli indici dell'array
qui invece le variabili sono i nomi delle property cioè le chiavi. */

//per quanto riguarda i parametri

const fullName = ({ first, last }) => {
  return `${first} ${last}`;
};

console.log(fullName(runner));

/* in questo caso abbiamo applicato il destructuring nella fase di passaggio a dei parametri di una funzione
una volta definita la funzione al momento di essere richiamata gli viene passato l'intero object dal quale abbiamo fatto
il destructuring */

//KEYWORD THIS

/*
 la keyword "this" indica un riferimento allo scope corrente,
 più precisamente indica un riferimento all'oggetto corrente e quell'oggetto rappresenta lo scope corrente.
*/

function hello() {
  console.log("ciao");
  console.log(this);
}

hello();
/* il console.log(this) farà riferimento all'object window che sarebbe il global scope nel browser.
Erroneamente qualcuno avrebbe pensato che this si sarebbe rivolto alla funzione hello ma in realtà
quando si definisce una funzione sembra come se essa si trovasse nel mezzo del nulla ---> in realtà non è così.
function hello() diventa una property dell'oggetto window più precisamente ne diventa un metodo. */

//adesso invece facciamo un altro esempio con this ma usando un object

const person = {
  first: "dino",
  last: "monaco",
  nickName: "Dinus",
  completeName() {
    console.log(this);
  },
};
person.completeName();
//this in questo caso si riferisce all'oggetto "person".

//un altro utilizzo di this è quello di essere utilizzato per accedere alle property sullo stesso object
const persona = {
  first: "dino",
  last: "monaco",
  nickName: "Dinus",
  completeName() {
    return `${this.first} ${this.last}`; //qui è come se fosse {persona.first} {persona.last}
  },
};
console.log(persona.completeName());

/* il valore di this dipende dal contesto d'invocazione della funzione in cui è usato
ciò signica che se io definisco this all'interno del metodo di un object e vado a richiamare
quella funzione/metodo devo stare attento a come la chiamo
poichè "object.completeName()" --> this all'interno di questo metodo si riferirà all'object persona
se uso invece completaName() senza la dot syntax il this al suo interno si andrà a riferire al window object */

/* N.B  il valore di this è mutevole,non è fisso ma varia a seconda di come il metodo viene richiamato.
un altra cosa fondamentale è l'uso delle arrow function con i metodi di un oggetto e this.
Poichè usiamo una arrow function e dentro usiamo this non importa come la andremo achiamare se usando la dot syntax o altro
this farà riferimento al WINDOW OBJECT.
ecco perchè non si usano spesso/MAI le arrow function come metodi di un object. */
