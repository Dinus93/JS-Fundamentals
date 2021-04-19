/* Gli eventi ci permettono di eseguire codice,ad esempio per creare un nuovo elemento, rimuoverlo o modificarlo, quando avviene una specifica interazione da parte dell'utente.
Ecco alcuni esempi di eventi ---> "clicks","drags","drops","hovers","scrolls","mouseWheel","doubleClick",ecc..
L'idea dietro a come funziona un evento è questa:

1)theThing 2)eventType 3)codeToRun
(button)     (clicks)   (changeColor)

*/

/*
1) Regola ---> Non aggiungere mai gli eventi inline ma sempre in un file js a parte
2) Regola ---> Non conviene scrivere gli eventi nel modo mostrato di seguito poichè se volessi aggiungere
allo stesso bottone un altro evento il primo verrebbe sovrascritto dal secondo.
*/
const btn = document.querySelector("button");

btn.onclick = alert("hello");
//"onclick" è l'evento

//è possibile anche assegnargli una funzione
btn.onclick = function () {
  console.log("you click me");
};

//la soluzione è utilizzare ADDEVENTLISTENER (metodo)
//SYNTAX ---> addeventlistener("tipo di evento",funzione da eseguire)
// viene passato il nome dell' evento senza l'on davanti
//es: onclick ---> click
// onmouseHover ----> mouseHover

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  alert("CLICKED!!!");
});

btn.addEventListener("click", function () {
  console.log("SECOND THING!!");
});

btn.addEventListener("mouseover", function () {
  btn.innerText = "STOP TOUCHING ME";
});

btn.addEventListener("mouseout", function () {
  btn.innerText = "Click Me!";
});

window.addEventListener("scroll", function () {
  console.log("STOP SCROLLING!!");
});

/* la cosa utile di addeventlistener è che possiamo aggiungerlo più volte allo stesso oggetto (btn in questo caso) 
e verrà eseguito ogni pezzo di codice.
Questo poichè a differenza di prima non è una property --> btn.onclick = value
in questo caso il valore di onclick resta a null e ogni volta viene poi settato con il valore 
dell'addeventlistener chiamato.
*/

//event object
/*
l'event object permette di accedere a delle informazioni riguardo l'evento che si scatena
es:mouseEvent,keyboardEvent
(ci permette di capire varie cose come quale tasto è stato premuto oppure
  quale mouseClick è stato fatto e in che posizione dello schermo)
*/

document.body.addEventListener('keypress', function(e) {
	console.log(e); //contiene informazioni sul keypress event
});


//key events
// eventi che si scatenano alla pressione o al rilascio di un tasto
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
	console.log('KEY DOWN!');
});

input.addEventListener('keyup', function(e) {
	console.log('KEY UP!');
});

input.addEventListener('keypress', function(e) {
	console.log('KEY PRESS!');
});


//formEvents e preventDefault
/*
e.preventDefault() --> è un metodo dell'oggetto event che non accetta parametri che permette
di evitare il comportamento o azione predefinita di un tasto o azione.

ES: facendo un submit su una form l'intera form verrà inviata ad un server e la pagina si caricherà.
Se inserisco preventDefault() ciò non avviene.
*/

const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function(e) {
	e.preventDefault(); //stops the request from being sent (prevents page reload)
	console.log('cc', creditCardInput.value);
	console.log('terms', termsCheckbox.checked);
	console.log('veggieSelect', veggieSelect.value);
	//send form data to db
	//append something to page using form data
});

//input e changeEvent
/*
la differenza tra onInput e onChange deriva dal fatto che l'evento input si scatena
immediatamente dopo che il valore di quell'elemento è stato cambiato
mentre onChange si scatena solo quando l'elemento perde il focus (ad esempio clicco con il mouse
su di un altro punto dello schermo)

Per il resto sono uguali.

L'evento "input" permette di accedere ai valori della form senza aspettare il click del bottone
submit.
Quindi possiamo accedere ai dati immediatamente nel momento in cui li scriviamo nella form.
*/

