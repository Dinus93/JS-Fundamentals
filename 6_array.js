//ARRAY
/*
vengono definiti come "collections of data" o "gruppi di valori ordinati"
Possono contentere vari tipi di dati come numeri,stringhe e anche oggetti.
Gli array hanno diversi metodi:
1) PUSH() aggiunge un elemento alla fine dell'array
2) POP() rimuove un elemento dalla coda
3) SHIFT() rimuove un elemento dall'inizio
4) UNSHIFT() aggiunge un elemento all'inizio dell'array
questi sarebbero quelli più importanti poi ne sono presenti altri:

concat() --> unisce gli array
includes() --> cerca un valore
indexof() --> funziona uguale a string.indefOf() --> praticamente restituisce l'indice di quell'elemento dell'array
join() --> unisce tutti gli elementi di un array (o di un array di oggetti) in una stringa che viene restituita.
reverse() --> inverte un array
slice() --> copia una porzione di un array
splice() --> rimuove/sostituisce un elemento
sort() --> ordina un array

*/
const students = [10, 20, 30];
const words = ["ciao", "come", "va"];
const object = [{ key: "value" }, { key: "value" }];

//REFERENCE TYPE (IMPORTANTE)
/*
javascript ha 5 tipi di dato che sono passati tramite valore: boolean,null,undefined,string,number
mentre ne ha altri 3 che sono passati mediante reference(riferimento): array,function e object.
*/

let fruit = "orange";
let color = fruit;
console.log(fruit);
console.log(color);
fruit = "watermelon";
console.log(fruit);
console.log(color); //color non dovrebbe avere come valore "watermelon"?

/*
Quando il dato contenuto nella variabile è di tipo "value", essendo una stringa in questo caso,la variabile ne contiene il valore.
FRUIT      COLOR
[orange]   [fruit]   ---> [] indica la cella di memoria (l'array non c'entra nulla)

FRUIT        !=     COLOR
[WATERMELON]     [fruit=orange]

quindi queste 2 non sono collegate tra di loro poichè sono in 2 celle di memoria distinte.
*/

//CONST CON GLI ARRAY

/*
il concetto base è che non è possibile riassegnare una variabile costante
quindi se io definisco un array o un object const non potranno essere riassegnati --> const data = [10] non può diventare const data = [11]
ma siccome const si riferisce in questo caso alla cella di memoria e non al loro valore essendo reference type
io posso andare a modificarne gli elementi di questi array/ object.
Se invece const viene utilizzato con un tipo primitivo (string,number,boolean) il suo valore non può essere cambiato essendo value type.
*/

const number = 10;
//number = 9; ciò genera un errore MA

const numberArray = [10, 20];
//numberArray = [10] anche questo genera un errore poichè sto cercando di riassegnare
//la variabile è ciò con const non è possibile ma posso modificarne gli elementi al suo interno
//cosa che invece con un tipo primitivo non mi è possibile fare.
// RICORDA BENE -->const lega la variabile di tipo reference non al valore ma alla reference stessa.

//NESTED ARRAY
//è possibile innestare array dentro altri array

const nestedArray = [["array1"], "ciao", ["array3"]];

//METODI ARRAY CHE ACCETTANO CALLBACK

/*
Come abbiamo visto prima gli array hanno vari metodi built-in.
Questi che vado a spiegare adesso sono metodi che a differenza di quelli prima accettano come parametri delle callback.(delle funzioni)
Essi sono:
1)FOREACH()
2)MAP()
3)FILTER()
4)FIND()
5)REDUCE()
6)SOME()
7)EVERY()
*/

//FOREACH
/*
il metodo foreach permette di eseguire la funzione presente al suo interno una volta per ogni elemento presente nell'array.
Permette quindi di scorrere l'array.
Funziona allo stesso modo di for..of o di un normale ciclo for.
*/
const numbers = [20, 40, 60, 80, 100];
numbers.forEach((num) => {
  console.log(num);
});
//è possibile utilizzare foreach anche quando negli array abbiamo come elementi degli object

const arrayObj = [{}, {}, {}];
arrayObj.forEach((num) => {
  console.log(num);
});

//MAP
/*
map è un altro metodo che funziona in maniera simile a foreach,mi permette (per ogni elemento
presente nell'array) di scorrerci attraverso e di eseguirne la funzione.Per fare ciò ne crea un altro partendo da uno esistente.
Con il metodo Map è fondamentale avere un return value altrimenti l'array sarà riempito di valori UNDEFINED.
*/
const texts = ["rofl", "lol", "omg"];

const capsTexts = texts.map(function (t) {
  return t.toUpperCase();
});

console.log(texts);
console.log(capsTexts);

//FILTER
/*
metodo che crea un nuovo array con tutti gli elementi che passando il test della condizione specificata(ritorna sempre un valore true o false)
*/

const nums = [9, 8, 7, 6, 5];

const filterNums = nums.filter((numbersArray) => {
  return numbersArray % 2 === 1;
});

console.log(filterNums);
//in questo caso a differenza di prima la variabile filterNums è un array.

//FIND
/*
metodo che ritorna il valore del primo elemento nell'array che soddisfa la condizione specificata.
Da specificare che il metodo find nel momento in cui trova l'elemento che soddisfa la condizione finisce di scansionare l'array e ritorna
true con il valore di quell'elemento.
Quindi anche se ci fossero altri elementi che rispettano la condizione non verranno considerati.
Nell'esempio qui sotto infatti ritorna come valore solo "superman" e non anche "superwoman"
*/

const movies = ["batman", "superman", "superwoman"];

let superHero = movies.find((superHeroes) => {
  return superHeroes.includes("sup");
});

console.log(superHero);
//la variabile superHero NON contiene un array e non è un array ecco perchè ho usato come keyword let.

//SOME E EVERY
/*
Entrambi ritornano un valore booleano.(true o false)
il metodo every scorre ogni elemento nell'array affinchè rispetti la condizione specificata.
Se un solo elemento non la rispetta ritorna false.
*/
const wordsArray = ["og", "dig", "log", "bagg", "wag"];
const boole = wordsArray.every((word) => {
  return word.length === 3;
});
console.log(boole);

/*
il metodo some è simile a every,scorre ogni elemento nell'array affinchè rispetti la condizione specificata.
Se almeno un elemento rispetta la condizione ritorna true.
*/

let bool = wordsArray.some((word) => {
  return word.length > 3;
});

console.log(bool);

//REDUCE

/*

prende un array di valori e lo "riduce" ad un singolo valore
Esegue una funzione "reducer" su ogni elemento dell'array con risultato
finale di un singolo valore.
Tecnicamente con reduce possiamo fare varie operazioni:

-sommare gli elementi di un array/moltiplicarli/dividerli
-trovarne il valore massimo
-fare dei conteggi
-ecc..

*/
/*
SYNTAX = "array".reduce((accumulator,currentValue) => {
  return accumulator + currentValue;
});

*/



const nums = [3, 4, 5, 6, 7];
// To multiply all values in nums:
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});

// total    currentVal    returnVal
// 3             4           12
// 12            5           60
// 60            6           360
// 360           7           2520

//Final Return Value: 2520


//trovare il valore massimo tra questi valori

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// One approach to find max using reduce:
// const maxGrade = grades.reduce((max, currVal) => {
//   if (currVal > max) return currVal;
//   return max;
// });

// A shorter version using Math.max:
const maxGrade = grades.reduce((max, currVal) => {
  return Math.max(max, currVal)
});
// Finding the min value using Math.min: 
const minGrade = grades.reduce((min, currVal) => (
  //using implicit return for variety's sake
  Math.min(min, currVal)
));

// max     currVal    return
// 87        64         87
// 87        96         96
// 96        92         96
/// etc.

// We can specify an initial value as the 2nd argument to reduce:
// arr.reduce(reducerFunction, initialValue)
const total = [10, 20, 30, 40, 50];

total.reduce((sum, currVal) => {
  return sum + currVal;
}, 1000) //sum starts at 1000, then each element is added to it --> final value is 1150



// USING REDUCE PER CONTEGGIARE ELEMENTI

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// To tally the votes:
// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {})

// The shorter version:
const results = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
// in questo caso abbiamo settato come valore iniziale un object vuoto

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]
// To group books by rating: 
const groupedByRatings = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book)
  return groupedBooks;
}, {})

