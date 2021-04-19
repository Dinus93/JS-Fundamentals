//STRINGHE
// le stringhe sono un tipo primitivo e in javascript rappresentano pezzi di testo o stringhe di carattere
//i valori delle stringhe sono racchiusi da doppi apici " " oppure da singoli apici ''
// una volta scelto lo stile da usare continuare ad usare quello.

let firstName = "Ziggy";
let surName = "Monaco";

console.log(firstName + surName);

// un altra cosa importante è che le stringhe hanno un indice --> ogni lettera ha un indice corrispondente
// "dino" --> dino[0] ="d" dino[1]="i" dino[2]="n" dino[3]="o"
// lenght è una property che permette di contare quanti caratteri ha una stringa

console.log(surName.length);

//METODI DELLE STRINGHE
//le stringhe "nascono" con una serie di metodi "built-in", i metodi non sono altro che azioni che le stringhe possono compiere
/* Ecco una lista di vari metodi delle stringhe:
1)trim()
2)indexOf()
3)slice()
4)replace()
5)toUpperCase()/toLowerCase()
*/

//trim() permette di eliminare lo spazio presente nella stringa --> " Monaco " --> "Monaco"
let cognome = "Monaco";
cognome.trim();

//indexOf() permette di indicare l'indice della lettera passata come arguments della stringa.
console.log( cognome.indexOf("o"));

/*slice() accetta 1 o 2 valori (accetta come valore l'indice della stringa)
 se viene inserito 1 solo valore allora quello sarà l'indice finale ---> tutto ciò che viene prima viene tagliato (escluso l'indice 2)
 in questo caso viene tagliato l'indice 0 e 1 */

console.log(cognome.slice(2));

/*se invece vengono inseriti 2 valori ---> il primo indica l'indice iniziale e il secondo l'indice finale (non è inclusivo)
la parola tagliata non sarà quella inclusa nei 2 valori degli indici ma quella che viene dopo
se la parola è "monaco" --> lui partirà da m e arriverà a c che ha indice 4 ma non verrà inclusa.
la parola tagliata sarà quindi "co" */


console.log(cognome.slice(0, 4));


/*il metodo replace() accetta 2 arguments --> il primo valore indica ciò che si vuole sostituire mentre il secondo indica con cosa sostituirlo. 
*/

console.log(cognome.replace("aco","drio"))


/* i 2 metodi toUpperCase() e toLowerCase() permettono di modificare la stringa in maiuscolo o minuscolo
*/

console.log(cognome.toLowerCase())
console.log(cognome.toUpperCase())

// STRING ESCAPE 
/*
Escaping a string means to reduce ambiguity in quotes (and other characters) used in that string.
 For instance, when you're defining a string, you typically surround it in either double quotes or single quotes:

"Hello World."
But what if my string had double quotes within it?

"Hello "World.""
Now I have ambiguity - the interpreter doesn't know where my string ends. If I want to keep my double quotes, I have a couple options. I could use single quotes around my string:

'Hello "World."'
Or I can escape my quotes:

"Hello \"World.\""
Any quote that is preceded by a slash is escaped, and understood to be part of the value of the string.

\n --> newline
\' --> single quote
\\" --> double quote
\\ --> backslash

*/

//STRING TEMPLATE LITERALS
/* 
` ` UTILIZZANO IL BACKTICKS NON LE SINGLE/DOUBLE QUOTES " "

sono stringhe che permettono di utilizzare espressioni al loro interno che vengono poi valutate
e restituiscono un valore come stringa

*/

let paragraph = `I have seen ${3+4} gpu`;
console.log(paragraph);

//all'interno dei template literals è possibile anche usare variabili con metodi
let username ="Teenzone93"
console.log(`Welcome back ${username}`)
console.log(`GAME OVER ${username.toUpperCase()}`)

//metodo vecchio con concatenazione (non conviene usarlo)
let animal= "pig"
let sound = "oink"
console.log(animal+" says "+sound);



