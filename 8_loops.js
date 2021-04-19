//LOOPS
/*
Loop vuol dire far qualcosa di continuo ripetendola
Ci permettono quindi di ripetere il nostro codice
Esistono vari tipi di loops:
1)FOR LOOP
2)WHILE LOOP
3)FOR...OF LOOP
4)FOR...IN LOOP
*/

//FOR LOOP
/*
SYNTAX -->  for ([initialExpression],[condition],[incrementExpression]) {....}
tutto ciò che è presente all'interno delle parentesi graffe viene eseguito e ripetuto solo quando ciò che è presente nelle parentesi tonde viene rispettato.
*/

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//Una cosa da evitare sono i LOOP Infiniti come questo
/*

for(let i=20;i>=0;i++)
console.log(i);

La condizione verrà sempre verificata quindi il loop sarà infinito poichè 20 > 0 sin dall'inizio e andando ad aumentare ogni volta lo sarà sempre
DA EVITARE!!
*/

//FOR LOOPS CON ARRAY

const examScore = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < examScore.length; i++) {
  console.log(examScore[i]);
}

//WHILE LOOP
/*
SYNTAX --> while ("some condition is true") {execute this code}

il while loop mi permette di fare la stessa cosa che faccio con il ciclo for MA...
in uno scenario in cui bisogna soltanto iterare e scorrere dei numeri conviene usare FOR poichè con while andrebbe creata una variabile
al di fuori del blocco.(sarebbe let j = 0)
Ci sono però altre situazioni in cui usare il while loop conviene:
--> la situazione migliore sarebbe quella di quando si sta scrivendo un loop e non si sa quante volte dovrà essere eseguito
(un esempio potrebbe essere il gioco 2048 in cui si continua ad avere la logica del gioco in loop fino a che non avviene il game-over)
*/
let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}
//siccome l'utilizzo di while potrebbe portare a volte a dei loop infiniti o piuttosto belli lunghi in javascript esiste la parola "break",che
//permette di interrompere il ciclo nel momento in cui una condizione è verificata.

//FOR...OF
/* for...of è un modo carino e facile di iterare attraverso array e stringhe (NON OBJECT)
for...of si comporta allo stesso modo di un ciclo for.

SYNTAX --> for(let variabile of iterable) {statement}

*/
const categories = ["soccer", "cringe", "books"];

//ciclo for classico
for (i = 0; i < categories.length; i++) {
  console.log(categories[i]);
}

//ciclo for usando for...of
for (let variables of categories) {
  console.log(variables);
}

//se lo scopo ultimo è quello di iterare gli elementi di un array fregandosene degli indici --> for...of è da preferire rispetto al classico for.
//se invece mi serve l'indice dell'array allora è preferibile usare il for classico
//for...of sugli object non funziona,infatti per iterare gli oggetti si possono usare 2 modi:
//1)Object.keys("nome oggetto") --> poco usato e sconsigliato
//2)for...in

const dataDino = {
  name: "dino",
  surname: "monaco",
  age: 27,
};

//object.keys permette di iterare sulle chiavi dell'oggetto mentre object.values permette di iterare sui valori delle chiavi dell'oggetto
for (let variables of Object.values(dataDino)) {
  console.log(variables);
}
for (let variables of Object.keys(dataDino)) {
  console.log(variables);
}

//FOR...IN
/*
for...in è specifico per iterare attraverso gli object.

SYNTAX --> for(let variabile in object) {statement}
*/

const obj = {
  name: "dino",
  surname: "monaco",
  age: 27,
};

for (let variabile in obj) {
  console.log(variabile);
}
//in questo caso l'output sono le chiavi dell'oggetto

for (let variabile in obj) {
  console.log(obj[variabile]);
}
//così invece otteniamo i valori delle chiavi dell'oggetto

//LOOPS ANNIDATI
//è possibile anche annidare cicli for in altri.

for (let i = 1; i <= 10; i++) {
	console.log('OUTER LOOP:', i);
	for (let j = 10; j >= 0; j -= 2) {
		console.log('  INNER LOOP', j);
	}
}

// EXAMPLE 2
// Sum all elements in our 2048 board
const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];

let totalScore = 0;
//outer loop iterates through the rows
for (let i = 0; i < gameBoard.length; i++) {
	let row = gameBoard[i];
	//inner loop iterates over each cell in a given row
	for (let j = 0; j < row.length; j++) {
		totalScore += row[j];
	}
}