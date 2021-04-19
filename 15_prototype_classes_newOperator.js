//PROTOTYPE
/*
I prototype sono il meccanismo con il quale gli oggetti in javascript "ereditano"
caratteristiche dall'uno all'altro.
Javascript è spesso descritto come un linguaggio basato su prototipi e per fornire l'ereditarietà,
gli oggetti hanno un "prototype object" che funge da modello dal quale ereditano metodi e property.

Ogni oggetto in javascript ha una property privata (chiamata _proto_) che contiene una reference (riferimento) ad un altro oggetto 
chiamato PROTOTYPE.

[PROTOTYPE]  {metodi e property}
     ^
     .
     .
  [OBJECT] {_proto_}

*/

//Esempio
const arrayData = [];

arrayData.push(5);// push() è un metodo non di questo specifico array "arrayData" ma del suo prototipo Array.prototype

//come detto prima _proto_ è una property che referenzia l'array prototype
// in cui dentro ci sono tutti i metodi e property che il nostro array può usare.

console.log(arrayData);



//Se volessi accedere al prototype originario di un array farei così:

Array.prototype;

 //i prototype sono dei "template object" (oggetti modello) ai quali tutti gli oggetti in javascript si riferiscono
 //e prendono i metodi e le property

 /*
è possibile anche aggiungere un nuovo modello all'object prototype
questo metodo sarà quindi disponibile da tutti gli oggetti che faranno riferimento a quel prototype.
Chiaramente questo metodo sarà disponibile fino al prossimo refresh della pagina dopodichè verrà cancellato. (DA VERIFICARE)
 */



//FACTORY FUNCTIONS (usate raramente)

/*
Una factory function è una funzione che ritorna un nuovo oggetto.
Sono state introdotte con ES6 e sono un alternativa alle ben più famose classi e constructors.
*/
//Questa funzione crea e ritorna un object "color" ogni volta che viene chiamata
function makeColor(r, g, b) {  //makeColor in questo caso è una factory function
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};
	return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"



//CONSTRUCTOR FUNCTIONS

// This is a Constructor Function...
//N.B una constructor function ha il nome della funzione scritto con l'iniziale maiuscola che lo distingue da una normale function.
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined
//It returns undefined. Seems useless!

// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();



//CLASSES 

/*
Le classi JavaScript, introdotte in ECMAScript 2015, sono principalmente
"syntactical sugar" sull'esistente ereditarietà prototipale di JavaScript. 
La sintassi non introduce un nuovo modello di eredità orientata agli oggetti in JavaScript.
Quindi semplicemente prende la sintassi basata sui prototipi (scritta prima) e la rende più simile ad
un linguaggio basato sulle classi (simil java).
JAVASCRIPT RIMANE UN LINGUAGGIO BASATO SU PROTOTIPI NON CLASSI (VIENE MODIFICATA SOLO LA FORMA DEL CODICE)
*/

class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
}
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');


//EXTENDS,SUPER e SUB CLASSES

/*
 la keyword "extends" permette come dice proprio il nome di estendere le funzionalità
 della classe padre a quelle che la ereditano.(le figlie)
 es: class Gatto extends (from) Pet --> quindi la classe gatto erediterà dalla classe Pet
 metodi,property e costruttore.

*/

/*
la keyword "super" invece andrà a riferirsi alla classe dalla quale ci stiamo estendendo.
(in questo caso Pet) da rivedere!!!


*/


class Pet {
	constructor(name, age) {
		console.log('IN PET CONSTRUCTOR!');
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

class Cat extends Pet {
	constructor(name, age, livesLeft = 9) {
		console.log('IN CAT CONSTRUCTOR!');
		super(name, age);
		this.livesLeft = livesLeft;
	}
	meow() {
		return 'MEOWWWW!!';
	}
}

class Dog extends Pet {
	bark() {
		return 'WOOOF!!';
	}
	eat() {
		return `${this.name} scarfs his food!`;
	}
}
