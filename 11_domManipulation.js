//DOM(Document Object Model)

/*
Il browser trasforma il nostro codice html e css in un javascript object,
nel DOM possiamo controllare tutto mediante javascript.

Il document object è il nostro punto di ingresso nel mondo del DOM.
Il DOM contiene al suo interno "una rappresentazione ad albero"
di tutto il contenuto della pagina,insieme a metodi e property.

*/

//METODI DEL DOM

/*Sono metodi usati per selezionare elementi all'interno del DOM

1)GetElementByID
2)GetElementByTagName
3)GetElementByClassName
*/

//1)getElementByID

/*seleziona elementi nel DOM mediante 
l'ID assegnato all'elemento HTML.
*/

//Per selezionare l'elemento con id "bear-photo":
document.getElementById("bear-photo");

//Per selezionare l'elemento con id "main"
document.getElementById("main");

//2)getElementByTagName
/*
sono usati per selezionare gli elementi usando il nome del tag html
*/

//Per selezionare tutti i tag dell'elemento <li>
document.getElementsByTagName("li");

//Per selezionare tutti i tag dell'elemento <h1>:
document.getElementsByTagName("h1");

/*
Ricorda, getElementsByTagName ritorna un array-like object (NON un vero array)
 restituisce una HTML collection che è una collection di object,assomiglia
 ad un array ma non lo è.
*/
const inputs = document.getElementsByTagName("input"); //ottiene tutti gli inputs
inputs[0]; //questo funziona
inputs.pop(); //NON FUNZIONA! pop() è un metodo degli array,e questo non è un array.

//3)getElementByClassName

/*
usato per selezionare elementi usando il nome della classe dei tag html
*/

// Per selezionare tutti gli elementi con la class di 'special':
document.getElementsByClassName("special");

/*anche getElementsByClassName ritorna un array-like object.
restituisce anche questo una HTML collection.
Non possiamo accedere ai metodi degli array, ma possiamo iterare:
*/

const specials = document.getElementsByClassName("special");
for (let el of specials) {
  console.log(el);
}

//We can use spread to make an actual array:
const arr = [...specials];
arr.pop(); //this works because it's now an array!

//Tuttavia esiste anche un altro metodo per selezionare gli oggetti del DOM (nuovo metodo)

/* querySelector ritorna un singolo elemento,più precisamente restituisce
 il primo elemento di quel tipo che incontra.
 può replicare le funzionalità dei metodi visti prima.
*/

//To find the first li on the page:
document.querySelector("li");

//To find the first element with class of special:
document.querySelector(".special");

//To find the first element with id of main (there should only be one...)
document.querySelector("#main");

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
document.querySelector("section ul li.special");

// querySelectorAll
/*
il querySelectorAll fa la stessa cosa del querySelector ma ritorna una COLLECTION degli elementi cercati.
ritorna una NODELIST che è un altro tipo di COLLECTION --> è simile alla HTML Collection soltanto che il
risultato viene inserito all'interno di un container diverso.
*/

// To find ALL li's on the page:
document.querySelectorAll("li");

// To find ALL elements with the class of special on the page:
document.querySelectorAll(".special");

//Nella sezione precedente abbiamo visto come selezionare gli elementi del DOM
//adesso invece vedremo come MANIPOLARLI

//Esistono svariati tipi di metodi e property per la manipolazione --> qui un elenco di quelli più usati

/*
Property                      
-classList
-innerText
-textContent
-innerHtml
-value
-parentElement
-children
-style
-nextSibling
-previousSibling


Metodi
-getAttribute()
-setAttribute()
-appendChild()
-append()
-prepend()
-removeChild()
-remove()
-createElement()
*/

//INNERTEXT e TEXTCONTENT
/*
mediante queste 2 property possiamo accedere al contenuto di un elemento
presente nel DOM
*/

//INNERTEXT
const bottone = document.querySelector("button"); //seleziono
bottone.innerText; //"cliccami"   ---> manipolo
/*
quando usiamo INNERTEXT su un elemento/tag andiamo ad ottenere tutto il testo
al suo interno.
Mediante innertext possiamo anche modificarne il contenuto:
*/
bottone.innerText = "Spingi qui"; // il bottone aveva come contenuto prima "cliccami"

//TEXTCONTENT
/*
permette di fare le stesse cose di INNERTEXT con delle differenze:

1)TEXTCONTENT cattura/ottiene tutto il testo contenuto negli elementi
anche dentro <script> e <style>

2)INNERTEXT non ritornerà il testo di elementi che sono nascosti con il css
mentre TEXTCONTENT si.
*/

//INNERHTML
/*
mediante questa property ottengo l'intero codice html presente all'interno
dell'elemento selezionato --> posso usare innerHtml anche per modificarne il
contenuto dell'elemento
*/

const form = document.querySelector('form');
form.innerHTML; //ottengo tutto il codice html presente all'interno del tag form


//VALUE,SRC,HREF AND MORE (PROPERTY)
/*
la property value permette di ottenere il valore di un determinato elemento di tipo input
la property checked invece viene usata nel momento in cui ho un input di tipo checkbox e voglio andare a leggerne il valore
la property href consente di ottenere/modificare il valore di un url
la property src consente di ottenere/modificare il valore di un elemento <img>
*/



//GETTING AND SETTING ATTRIBUTES (METODI)
/*
questi 2 metodi ci permettono di ottenere e modificare i valori di un attributo di un elemento.
Le property che abbiamo visto prima erano delle shortcut per determinati attributi
ma non tutti gli attributes hanno questa possibilità
Ecco perchè usiamo i metodi getAttribute() e setAttribute().
*/


//PARENT ELEMENT (PROPERTY)
/*
ParentElement è una property che permette di ottenere i genitori dell'elemento attuale.
ES: --> gli elementi <li> sono figli di <ul> e <ul> è il genitore di <li>
<ul>
 <li>
 <li>
 <li>
</ul>

Invece children è una property che permette di ottenere i figli dell'elemento attuale(sempre se ci sono)
*/


//CHANGING MULTIPLE ELEMENTS

// Select all LI's on the page:
const allLis = document.querySelectorAll("li");

// One option, a regular for loop:
for (let i = 0; i < allLis.length; i++) {
  allLis[i].innerText = "WE ARE THE CHAMPIONS!";
}

//Another option using for...of:
for (let li of allLis) {
  li.innerHTML = "WE ARE <b>THE CHAMPIONS</b>";
}

//ALTERING STYLE (PROPERTY)
/*
usando javascript possiamo manipolare il codice CSS dello stile utiizzando ad esempio la property style.
*/

// Changing the color and background-color:
const h1 = document.querySelector("h1");
h1.style.color = "pink";
h1.style.backgroundColor = "yellow"; //camel cased! (not background-color but backgroundColor)

// Changing Multiple Elements:
const allLis = document.querySelectorAll("li");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

allLis.forEach((li, i) => {
  const color = colors[i];
  li.style.color = color;
});

//GETCOMPUTEDSTYLE (METODO)
//metodo che permette di andare a leggere i valori attuali degli stili degli elementi

const h1 = document.querySelector("h1");

// style property only contains INLINE styles...
// Even though we gave the h1 a purple color, we still get:
h1.style.color; //""
// Same with any property we did not set inline:
h1.style.fontSize; //""

// We can use getComputedStyle to figure out the ACTUAL styles that are applying:
const compStyles = getComputedStyle(h1);
compStyles.color; //"rgb(128, 0, 128)"  (purple as an RGB color)
compStyles.fontSize; //"60px"

//MANIPULATING CLASSES
//permette di modificare le classi degli elementi html 
const todo = document.querySelector("#todos .todo");

// Setting styles one at a time is not ideal:
// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%'

// We can use a class instead!
// In app.css I've defined a 'done' class that we can apply

// OPTION 1 - using setAttribute
//This adds the class 'done', but it overwrites any existing classes...
// todo.setAttribute('class', 'done');

// OPTION 2 - classList
// We can use the classList property and it's methods to add,remove, and toggle classes!
todo.classList.add("done");
//to remove it
todo.classList.remove("done");
//to toggle:
todo.classList.toggle("done"); //add
todo.classList.toggle("done"); //remove
todo.classList.toggle("done"); //add
todo.classList.toggle("done"); //remove
todo.classList.toggle("done"); //add

//CREATING ELEMENTS
//permette di creare all'interno di un nuovo elemento all'interno del DOM

// Make a new empty img element:
const newImg = document.createElement("img");
// Add a src:
newImg.src =
  "https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80";
// Change its width:
newImg.style.width = "300px";

//Add it to the end of the body:
document.body.appendChild(newImg);

// Create a new anchor tag
const newLink = document.createElement("a");
// Set its innerText:
newLink.innerText = "Mr. Bubz Video! CLICK MEEE";
// Set its src:
newLink.href = "https://www.youtube.com/watch?v=QQNL83fhWJU";

// Select the first paragraph:
const firstP = document.querySelector("p");
// Add the link as a child of the paragraph:
firstP.appendChild(newLink);

//APPEND,PREPEND & INSERTBEFORE
//per andare a mostrare l'elemento sulla pagina web una volta creato bisogna usare altri metodi che sono
//APPEND,PREPEND e INSERTBEFORE 


const parentUL = document.querySelector("ul");
const newLI = document.createElement("li");
newLI.innerText = "I AM A NEW LIST ITEM!";

//prepend will add newLI as the FIRST child of parentUL
parentUL.prepend(newLI); //Doesn't work in IE!

//We can also insert something BEFORE another element, using insertBefore.
// First, select the element to insert before:
const targetLI = document.querySelectorAll("li.todo")[2]; //3rd li with class of 'todo'
// To insert our new LI before targetLI...
//parent.insertBefore(what to insert, where to insert)
parentUL.insertBefore(newLI, targetLI);

//REMOVECHILD & REMOVE (METODI)
//permette di rimuovere un elemento dal DOM

// USING removeChild()
//Select the element you want to remove;
const removeMe = document.querySelector(".special");
//We call removeChild() on the parent element and pass in the element we want to remove:
removeMe.parentElement.removeChild(removeMe);

// USING THE NEWER REMOVE() METHOD - NO INTERNET EXPLORER SUPPORT!
//Select the H1
const h1 = document.querySelector("h1");
h1.remove(); //REMOVE IT!
