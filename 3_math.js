//NULL & UNDEFINED
/*
NULL indica l'assenza intenzionale di un valore e va assegnato proprio come valore
*/
let loginNumber = null;
/*
UNDEFINED indica invece variabili che non hanno alcun valore assegnato
*/
let nome;
console.log(nome);

//MATH OBJECT
/*
l'oggetto Math contiene Property e metodi per funzioni e costanti matematiche
ecco alcuni metodi:
1) Math.random()--> permette di generare un numero compreso da 0 e 1
2) Math.floor() --> restituisce il numero intero arrotondato per difetto del numero passato come parametro
3) Math.round() --> restituisce il valore di un numero approssimato all'intero ad esso più vicino.
4) Math.PI --> property
*/
console.log(Math.random());
console.log(Math.floor(35.56));
console.log(Math.round(0.9))
console.log(Math.PI)

//TYPEOF
/*
è un operatore usato in javascript per determinare il tipo di un valore che abbiamo dichiarato
*/
const type = typeof(25);
console.log(type);
const type2 = typeof("Dino");
console.log(type2);

//PARSEINT e PARSFLOAT
/*
La funzione parseInt() analizza un argomento stringa e restituisce un numero intero
La funzione parseFloat() riceve una stringa come argomento e ritorna un numero in virgola mobile.
*/

console.log(parseInt("24"));
console.log(parseFloat("3.14"))
