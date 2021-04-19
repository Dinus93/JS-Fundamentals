//Ci sono molteplici modi per fare richieste HTTP
/*
1)XHR (metodo vecchio)
2)FETCH (metodo nuovo)
3)AXIOS (metodo migliore e più usato anche a livello lavorativo)
*/

//AJAX

/*
Prima di introdurre questi vari modi per fare richieste http bisogna parlare di AJAX.
AJAX sta per "ASYNCHRONOUS JAVASCRIPT AND XML".

Ajax praticamente è una tecnica di sviluppo software per la realizzazione di app web interattive
basandosi su uno scambio di dati in background fra web browser e server,consentendo così
l'aggiornamento dinamico di una pagina web senza esplicito ricaricamento da parte dell'utente.
E' una tecnica asincrona nel senso che i dati extra sono richiesti al server e caricati in background senza interferire
con il comportamento della pagina esistente.

Cliccando in una sezione di una pagina che implementa AJAX il contenuto cambierà ma la pagina non farà nessun refresh.
In una pagina "normale"(che non implementa AJAX) invece cliccando in una sezione avverrà il caricamento della nuova pagina selezionata,refreshando la pagina stessa.
(Durante il refresh avviene lo scambio tra client e server dei dati richiesti).

I dati inviati in AJAX sono sottoforma di file JSON (no html e css)
*/

//JSON E XML

/*
JSON (più usato) E XML (vecchio) sono 2 modelli di dati che vengono utilizzati per scambiare dati tra un server ed un altro
o tra un server ed un client.


XML(EXTENSIBLE MARKUP LANGUAGE)

assomiglia all'HTML ma in realtà è ben diverso
può essere considerato come un antenato/genitore dell'html

es:

<name>Todd</name>
 <first></first>
 <second></second>
<email></email>

JSON(JAVASCRIPT OBJECT NOTATION)
come sintassi assomiglia a javascript ma è ben diverso.

es:

{
    "nomeSquadra":"Milan",
    "casa":"Milano",
    "formed":1900,
}
La differenza con javascript è che in un file JSON le chiavi hanno doppi apici.

Una volta ottenuta la response come file JSON andrà convertito in un object Javascript.
*/

//1)XHR(XMLHTTPREQUEST)
/*
All'interno dell'oggetto XMLHttpRequest è presente una property che si chiama "responseText"
che contiene i dati della request ---> questo "responseText" --> è un file JSON
usando JSON.parse() ottengo un oggetto javascript.
Mediante il metodo parse() --> trasformo un JSON in un Object Javascript.
*/
const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  console.log("IT WORKED!!!");
  const data = JSON.parse(this.responseText);
  for (let planet of data.results) {
    console.log(planet.name);
  }
});
firstReq.addEventListener("error", () => {
  console.log("ERROR!!!!!!");
});
firstReq.open("GET", "https://swapi.co/api/planets/");
firstReq.send();
console.log("Request Sent!");

//CHAINING REQUEST XHR

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('FIRST REQUEST WORKED!!!');
	const data = JSON.parse(this.responseText);
	const filmURL = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function() {
		console.log('SECOND REQUEST WORKED!!!');
		const filmData = JSON.parse(this.responseText);
		console.log(filmData.title);
	});
	filmReq.addEventListener('error', function(e) {
		console.log('ERROR!!', e);
	});
	filmReq.open('GET', filmURL);
	filmReq.send();
});
firstReq.addEventListener('error', (e) => {
	console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('Request Sent!');



//2)FETCH

/*
fetch come anche XHR è un metodo per fare richiesta http ma a differenza del metodo di prima:

1) supporta le promise
2) non supportato da internet explorer

*/

fetch("https://swapi.co/api/planetsuy21/")
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    response.json().then((data) => {
      for (let planet of data.results) {
        console.log(planet.name);
      }
    });
  })
  .catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH!");
    console.log(err);
  });

//CHAINING REQUEST USING FETCH

fetch('https://swapi.co/api/planets/')
	.then((response) => {
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);

		return response.json();
	})
	.then((data) => {
		console.log('FETCHED ALL PLANETS (first 10)');
		const filmURL = data.results[0].films[0];
		return fetch(filmURL);
	})
	.then((response) => {
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);

		return response.json();
	})
	.then((data) => {
		console.log('FETCHED FIRST FILM, based off of first planet');
		console.log(data.title);
	})
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});



//3)AXIOS

/*
axios è una libreria esterna per fare richiesta http, ne esistono di svariate
ma axios è tra le più famose.
Per utilizzarlo dobbiamo includerlo come script esterno al nostro file html(dentro il body alla fine).

Axios presenta 2 caratteristiche principali che lo fanno diventare un ottima scelta:

1) Con axios non vi è il bisogno di fare il parsing della response ricevuta --> in automatico
il valore ricevuto sarà già un object javascript "parsato".
(axios esegue il parsing ma lo fa in background automaticamente).

2) quando usiamo fetch dobbiamo andare a controlalre manualmente lo status code della response perchè fetch non respinge una promise
se vi è un erro 404 o altro ma accetta quasi tutto.
Axios invece cattura e capisce quando vi sono errori tipo 404 o altri e quindi non esegue quella promise.
*/

axios
  .get("https://swapi.co/api/planets/")
  .then((res) => {
    //We don't have to parse the JSON!
    console.log(res.data);
  })
  .catch((err) => {
    console.log("IN CATCH CALLBACK!!!");
    console.log(err);
  });

axios
  .get("https://swapi.co/api/planetaslkjdaklsjds/") //BAD URL!
  .then((res) => {
    //We don't need to check for a 200 status code, because...
    //Axios will reject the promise for us, unlike fetch!
    console.log(res.data);
  })
  .catch((err) => {
    //In this example with a not-found URL, this callback will run...
    console.log("IN CATCH CALLBACK!!!");
    console.log(err);
  });


// SAME THING USING FETCH

// const checkStatusAndParse = (response) => {
// 	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

// 	return response.json();
// };

// const printPlanets = (data) => {
// 	console.log('Loaded 10 more planets...');
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// 	return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
// 	return fetch(url);
// };

// fetchNextPlanets()
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});




// CHAINING REQUESTS USING AXIOS

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
	console.log(url);
	return axios.get(url);
};
const printPlanets = ({ data }) => {
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

fetchNextPlanets()
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.catch((err) => {
		console.log('ERROR!!', err);
	});

// SAME THING USING FETCH

// const checkStatusAndParse = (response) => {
// 	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

// 	return response.json();
// };

// const printPlanets = (data) => {
// 	console.log('Loaded 10 more planets...');
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// 	return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
// 	return fetch(url);
// };

// fetchNextPlanets()
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});

