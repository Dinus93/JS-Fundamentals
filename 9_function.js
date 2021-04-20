//FUNCTIONS
/*
Una function ci permette di scrivere codice modulare e riutilizzabile.
Mediante una function stiamo definendo un pezzo di codice che andremo poi a eseguire più tardi.

SYNTAX --> function "functionName"(){...}; --> qui abbiamo solo dichiarato la funzione

cosa fondamentale: una funziona per essere eseguita va richiamata!!
per richiamarla--> "functionName();"
*/

function sum() {
  console.log(2 + 3);
}

sum();

// DISTINZIONE FONDAMENTALE TRA PARAMETER E ARGUMENTS
/* il parameter è la variabile/variabili usata nella dichiarazione della funzione
 --> function somma (a,b) {...} --> a e b sono i parameters

L'argument/s sarebbe il valore attuale della variabile che viene passata alla funzione.
nel momento in cui vado a richiamare la funzione --> somma(5,6); --> 5 e 6 sono gli arguments.
*/

//RETURN STATEMENTS
/*
Quando abbiamo parlato di funzioni non abbiamo detto una cosa.
Esistono i cosidetti metodi "built-in" che non sono altro che delle funzioni.
ES:--> string.toUpperCase() --> toUpperCase è il metodo dell'oggetto stringa ma non è altro che una funzione.

Fino a questo momento le funzioni scritte sono state funzioni che non ritornavano un valore ma stampavano solo un valore
 sul console log del browser.
*/

const word = "ciao";
const hello = word.toUpperCase();
hello;

//è bene sempre ricordare che è buona abitudine salvare dentro una variabile l'output di un metodo per poterlo catturare/vedere.

function sum(x, y) {
  console.log(x + y);
}
sum(1, 2);

//in questo caso il valore stampato viene mostrato solo sul console log ma non è un VALORE DI RITORNO
//il discorso invece cambia se aggiungo la KEYWORD RETURN all'interno della funzione

//* * function add con return value---> la funzione mi restituisce un valore che è la somma di x+y*/
function add(x, y) {
  return x + y;
}
/*dichiaro una variabile total e gli assegno la funzione add passandogli dei parametri,
  effettuo il console log per vedere se effettivamente alla variabile total
  viene passato qualcosa----> viene passato 3.*/
const total = add(1, 2);
console.log(total); //stampa sulla console  "3"

/*
  in questo caso nella funzione add ho inserito il console log ma la funzione non mi restituisce alcun valore da poter utilizzare
  ma stampa solo sulla console del browser il valore della somma */

function add(x, y) {
  console.log(x + y);
}
/* infatti nella variabile total2 viene inserita la funzione che viene richiamata passandogli poi come parametri 1 e 2 
  ma siccome la funzione non ritorna nessun valore ciò che viene contenuto dentro total2 è undefined*/
const total2 = add(1, 2);
console.log(total2); // stampa sulla console "undefined"

//Ci sono alcune regole importanti sui return:
/*
1)si può ritornare solo 1 valore da una funzione per volta
2)si possono avere più return statement ma il valore di return deve essere singolo/unico
3) il return statement conclude l'esecuzione di una funzione e specifica il valore da ritornare di quella funzione
tutto ciò che è presente dopo quel return viene ignorato.
*/

//FUNCTION SCOPE (IMPORTANTE) per gli esempi ci sono quelli nel capitolo VARIABILI
/*
Lo scope indica lo spazio di visibilità di una variabile nella quale tale variabile è disponibile per essere usata.
Ci permette di capire dove noi abbiamo accesso a quella variabile.
*/


//FUNCTION EXPRESSIONS
/*
per definire una funzione è disponibile un altra sintassi che si chiama: "FUNCTION EXPRESSION". --> La funzione viene salvata in una variabile e
ciò è possibile farlo poichè in javascript le funzioni sono OBJECT,possiamo quindi inserirle negli array o all'interno di variabili.

Esistono 2 tipologie di function expression:
1)Named: la function ha un nome
2)Anonymous: la function non ha un nome

*/

//anonymous function
const square = function (num) {
  return num * num;
};

console.log(square(7));

//named function
const product = function multiply(num) {
  return num * num;
};

console.log(product(7));

//HIGH ORDER FUNCTION
/*
Le funzioni che operano su altre funzioni,o che le accettano come arguments o che le ritornano come valori vengono chiamate HIGH ORDER FUNCTION
*/

function add(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}
const divide = function (x, y) {
  return x / y;
};
const operations = [add, multiply, divide];

console.log(operations[1](2, 4));

const thing = {
  doSomething: divide,
};
// divide è una funzione che viene inserita come valore all'interno di una property dell'oggetto thing.
//se faccio
console.log(thing.doSomething(10, 2));
// doSomething diventa quindi un metodo dell'oggetto thing
// I METODI SONO LE FUNZIONI DEGLI OGGETTI

//FUNCTION COME ARGUMENTS

function call(func) {
  func();
  func();
  func();
}

function cry() {
  console.log("Sono triste");
}
call(cry);
// la funzione cry viene passata come argomento alla funzione call che la esegue per 3 volte

//CALLBACK FUNCTION//
/* OGNI VOLTA CHE PASSIAMO UNA FUNZIONE AD UN ALTRA FUNZIONE(COME ARGUMENTS) E QUELLA FUNZIONE PASSATA
  VIENE ESEGUITA ALL'INTERNO DI QUELLA FUNZIONE LA CHIAMEREMO CALLBACK
  CON LE CALLBACK SI INTRODUCE ANCHE IL CONCETTO DI ASINCRONICITA' ---> L'ESECUZIONE DI QUELLA CALLBACK NON AVVIENE
  SEGUENDO UN ORDINE PRESTABILITO MA AVVIENE QUANDO VIENE CHIAMATA DALL'ALTRA FUNCTION.
  LO SVILUPPATORE DECIDE LUI ,QUINDI, QUANDO FARLA ESEGUIRE. QUESTA COSA ROMPE LA SINCRONICITA' DEL CODICE.
  (praticamente programmi l'esecuzione di quella funzione quando e se si verificheranno delle condizioni, quindi,
   senza rispettare il normale ordine di esecuzione imposto dal motore js)
*/

//ESEMPIO//
function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("AHAHAHAHAHAAH");
}
callTwice(laugh); // LAUGH E' UNA CALLBACK PERCHE' VIENE PASSATA COME ARGUMENTS ALLA FUNZIONE CALLTWICE
// E VIENE ESEGUITA ALL'INTERO DI CALLTWICE 2 VOLTE.

//ESEMPIO 2//
function scream() {
  alert("GO AWAYYYY!!!!"); // posso scriverla anche così----> setTimeout(function(){alert("go awayyy!!")},5000);// anonymous function
}
setTimeout(scream, 5000); // scream è un altra callback function in quanto viene passata come argomento alla funzione setTimout che
// la eseguirà dopo 5 secondi esatti.

//ESEMPIO 2 CALLBACK

setTimeout(function () {
  console.log("ciao ale");
}, 2000);
//scrittura semplificata con le arrow function --->

setTimeout(() => {
  console.log("ciao ale");
}, 2000);
//setTimeout è una funzione che accetta 2 parametri
//il primo parametro è la callback
//mentre il secondo è il valore in millisecondi
//la callback sarebbe potuta anche essere stata scritta in questo modo
//--->

const callback = () => {
  console.log("ciao dino");
};
setTimeout(callback, 3000);

// N.B. le callback non sono per forza asincrone
//es: --->
const items = [1, 2, 3, 4, 5];

items.forEach((items) => {
  console.log(items);
});
// in questo caso foreach accetta un'altra funzione come parametro e
// la esegue ma non è asincrona in quanto l'esecuzione
// avviene immediatamente.

//HOISTING//
/* praticamente quando dichiariamo una variabile usando var ma la utilizziamo prima di
  dichiararla il codice su console non da errore ma dice "undefined"
  questa cosa non ha molto sensopoichè quella variabile non è ancora stata "creata"
  Questo perchè javascript(SOLO quando uso VAR) è come se effettuasse questa operazione
  
  var animal;
  console.log(animal);
  animal="lion"
  
  quindi l'output su console sarà undefined.
  
  SE USO LET E CONST QUESTA FENOMENO DI HOISTING NON FUNZIONA in quanto come è logico che sia
  la variabile non può essere chiamata prima di essere dichiarata.
  
  console.log(animal);
  let/const animal="lion"; // ERROR
  
  
  la stessa cosa vale anche per le function
  se io chiamo una funzione e dopo la dichiaro questa funzionerà
  
  ES: 
  
  function call(){
    console.log("chiamami")
  }
  
  call(); // stampa sulla console "chiamami"
  
  
  però io posso fare anche in questo modo ----->
  
  call();
  
  
  function call(){
    console.log("chiamami")
  }
   
  //stampa a schermo "chiamami" come sopra
  
  anche se non si vede è come se l'interprete javascript scansionasse prima tutte le righe di codice della 
  nostra function e poi la richiamasse anche se viene prima lato codice.
  
  ----------------------------------------------------------------------
  ATTENZIONE PERO' 
  se uso una function expression
  
  var hoot = function(){
    console.log("Hoooo hoooo")
  }
  hoot() // tutto ok  stampa ---> "hoooo hoooo"
  
  
  se faccio così però non funziona:
  
  hoot()
  
  var hoot = function(){
    console.log("Hoooo hoooo")  // ERROR
  }
  
  
  STIAMO USANDO UNA FUNCTION EXPRESSION CHE NON SUPPORTANO IL FENOMENO DELL'HOISTING
  in realtà però per essere ancora più specifici la variabile Hoot esiste anche se viene chiamata prima della
  sua dichiarazione(quindi è HOISTED) mentre il suo valore NO.
  */

//ARROW FUNCTIONS (IMPORTANTE)
/*
non sono altro che un modo alternativo,più compatto di scrivere le funzioni in javascript.
*/

//metodo di scrittura classico delle function

/* const quadrato = function (x) {
  return x * x;
}; */

//metodo di scrittura con le arrow function
const quadrato = (x) => {
  return x * x;
};

// se è presente un solo parametro in ingresso le parentesi tonde non servono, sono opzionali

const quadra = x => {
  return x * x;
};

//nel caso in cui la funzione abbia una single expressions come valore di ritorno
//è possibile togliere la parola return e anche le parentesi {}

const quad = x => x * x;
