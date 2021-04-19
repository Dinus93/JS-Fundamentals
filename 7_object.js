//OBJECT
/*
gli object in javascript sono delle "tuple" di properties.(Coppie di informazioni)
E' più corretto usare il termine tupla che collection poichè la tupla è piu' legata ad un'entita' con varie proprieta',
la collection in genere e' qualcosa composto da elementi tutti uguali nella forma, anche se non sempre.
Ogni property è composta da una combinazione di "chiave-valore" e viene separata da un altra property con delle virgole.
Negli object l'ordine non è fondamentale,la disposizione è un parametro fondamentale degli array.
Da ricordare che le chiavi di un oggetto sono convertite automaticamente come delle stringhe.
Il valore di una property può essere qualsiasi cosa:una stringa,un numero,un array,un booleano,TUTTO!.
*/

const data = {
  totalSteps: 30580,
  //[chiave:valore] = property
  avgCalories: 14000,
  45: "fourty-five",
};

//Per accedere ai dati contenuti nel nostro object possiamo usare la "dot.syntax" --> "nomeOggetto"."nomeChiave"//
console.log(data.avgCalories);

 /* oppure utilizzare gli "array brackets" [] --> "nomeOggetto[nomeChiave]" --> questo metodo viene chiamato COMPUTED PROPERTY NAMES
 esiste un problema di fondo che è questo --> le chiavi negli object vengono convertite a stringhe come già detto prima ma
 se io uso come chiave un numero questo verrà convertito a stringa e ciò mi causa un problema
 se provo ad accedere a quel valore mediante la dot syntax essa non funzionerà
 dovrò usare per forza gli array brackets

 */
//console.log(data.45); da errore infatti

//facendo così invece worka
console.log(data[45]);

//OBJECT LITERALS
/*
Un oggetto viene definito mediante parentesi graffe ("curly braces") {} ---> questa sintassi viene chiamata OBJECT LITERALS
Essendo un object un tipo di dato reference quando lo andiamo a definire è bene usare la keyword CONST
*/

//AGGIUNGERE E MODIFICARE PROPERTIES//
/* UPDATE
 "nomeOggetto"."nomeChiaveDaAggiornare" = "nuovoValoreDaAggiornare"
*/
console.log((data.avgCalories = 13500));

/*ADDING
"nomeOggetto"."nomeNuovaChiave" = "nuovoValoreDaAggiungere"
*/
console.log((data.numbers = 7000));
console.log(data);

//è possibile aggiungere e modificare le property anche mediante le [] brackets ---> COMPUTED PROPERTY NAMES.

//ARRAY E OBJECT
/*
Il concetto fondamentale è che sia gli array che gli object possono essere innestati gli uni negli altri
Posso avere un array di object oppure un object con dentro degli array.
*/

const shoppingCart = [{ milk: 12 }, { bread: 10 }, { pasta: 6 }];

//oppure

const students = {
  skills: ["music", "arts"],
  exams: {
    math: 9,
    story: 10,
  },
};

//REFERENCE TYPE RIFERITO AGLI OBJECT (stesso discorso fatto con gli array) ---> vai a vederlo lì

//ARRAY/OBJECT EQUALITY
/*
anche qui il concetto base da capire è sempre lo stesso
usando l'operatore di uguaglianza stretta io vado a uguagliare 2 array il cui risultato sarà false (booleano)
poichè un array non contiene il valore mostrato ma l'indirizzo di memoria di quel valore.
Mettendoli a confronto anche se sembrano uguali non lo saranno poichè tutti e 2 avranno indirizzi di memoria diversi.
*/

console.log([] === []);
const nums = [1, 2, 3];
const nums2 = [1, 2, 3];

console.log(nums === nums2);

//per renderli uguali si fa così

const numsCopy = nums;
console.log(numsCopy === nums);
