//TIPI PRIMITIVI
/*
In JavaScript, un primitivo (valore primitivo, tipo di dato primitivo) è un dato che non è un object e che non ha metodi.
La maggior parte delle volte, un valore primitivo è rappresentato direttamente al livello più basso dell'implementazione del linguaggio.
Ne esistono di 6 tipi:
1) Numeri
2) Stringhe
3) Boolean
4) Null
5) Undefined
*/

//VARIABILI//
//il nome delle variabili in javascript utilizza il camelCase
//Var
/*
Prima dell'aggiornamento ES5 c'era solo 1 modo per dichiarare variabili in javascript,utilizzando la keyword var.
Le dichiarazioni fatte con var possono avere uno scope globale o locale.
Lo scope è globale quando una variabile è dichiarata con var all'esterno di una funzione.
Può quindi essere utilizzata dall'intero oggetto window.
Lo scope invece è locale o meglio "function scoped" quando la variabile var è dichiarata all'interno di una funzione.
Può essere utilizzata quindi solo all'interno di quella funzione.
Le variabili dichiarate con var possono essere aggiornate e ridichiarate nello stesso scope.
*/


//Let e const
/*
/* let
- Scoping, your variable’s values are exactly as they should be in that current scope and they are not hoisted as with var.
- Super useful if you don’t want your values to be overwritten, like in a for loop.
- Beware: You may not always want to use let. For example in situation where variables aren’t as easily block scoped, var may be more convenient.
*/

/* const
- if you’re setting a variable that you don’t plan on changing.
- Protects and prevents your variables from reassignment.
- In compiled languages, there is an increase in runtime efficiency of your code and thus an overall performance boost vs using plain ‘ol var.
*/

/* Let e const sono stati introdotti nel 2015 è presentano differenze da var.
Entrambe sono dichiarazioni di variabili block scope.
In javascript I BLOCKS sono una qualunque porzione di codice delimitati dalle parentesi graffe {variabile SCOPED in the block}.
Ciò implica che una variabile dichiarata con let o const all'interno di un block è disponibile solo all'interno di quel block {}.
Le variabili dichiarate con let possono essere aggiornate ma non ridichiarate (nello stesso scope).

 */

//esempio

//posso fare così

{
  let variabile = "dino";
  variabile = "marco";
}

//ma non posso fare così --> ERRORE

/* {
  let variable = "dino";
  let variable = "marco";
} */

//ma in 2 scope diversi posso però dichiarare variabili con lo stesso nome

let variabile = "dino";
{
  let variabile = "dino";
}


/* Le variabili dichiarate con const non possono ne essere aggiornate ne ridichiarate.
Inoltre con const la variabile va inizializzata al momento della dichiarazione.
 */
//esempio

/* questo da errore
const example;
example = 2; */

//questo  invece va bene
const example = "yooooo";


// esempio che dimostra come var a volte crei problemi 
// When using var what do we get?
var bunny = "eat carrot";

if (bunny) {
  var bunny = "eat twig";
  console.log(bunny); 
}

console.log(bunny); 

//questo esempio invece mostra il perchè let sia meglio di var.
//anche se le 2 variabili dichiarate hanno lo stesso nome sono in scope diversi e quindi non si aggiornano come valore
//ma rimangono distinte
// When using let what do we get?
/* let bunny = "eat carrot";

if (bunny) {
  let bunny = "eat twig";
  console.log(bunny); // "eat twig"
}

console.log(bunny); // "eat carrot"
 */


// per aggiornare un valore di una variabile bisogna fare in questo modo

// metodo errato
let variables = 80;
variables - 1;
variables;

// metodo corretto
let variables2 = 81;
//variables2 = variables2 -1;
// è possibile scriverlo con uno shorthands
variables2 -= 1;
variables2;

//operatore unario aumenta di 1 il valore della variabile
let numero = 0;
numero++; // oppure numero-- per diminuire di 1
numero;

// const funziona come LET ma una variabile dichiarata con const non è possibie modificarne il valore
const number = 17;
//number = 4; --> da errore poichè il valore è stato già assegnato



