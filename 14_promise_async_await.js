//PROMISE//
/*
Una promise è un object che rappresenta un eventuale completamento o fallimento di un operazione
asincrona.(che può quindi impiegare del tempo).

ES: se viene eseguita una richiesta HTTP ad esempio tramite AXIOS,la richiesta ritornerà una promise
poichè la richiesta HTTP potrebbe prendere tempo e quel valore potrebbe non tornare mai indietro.

Una promise è un object che ha 2 property: STATUS e VALUE --> lo status può essere PENDING,FULLFILLED,REJECTED
il value invece è il valore del dato che ritorna la PROMISE.
Una promise inoltre ha 2 metodi: then() e catch()
1)promise.then()---> verrà eseguita se la nostra promise viene risolta
2)promise.catch()---> verrà eseguita se la nostra promise viene respinta
Sia then() che catch() accettano come parametro una callback

es: promise.then(() => {console.log("promessa risolta")})

promise.all() --> permette di eseguire codice asincrono nello stesso momento (esegue più promise nello stesso momento).

*/
//creazione di una promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("got the user");
        resolve({ user: "ed" });
        reject(new Error('User not logged in'))
    }, 2000);
});
//esecuzione della promise
promise.then(pippo => { console.log(pippo); })
    .catch(err => console.log(err));
//in questo caso verrà eseguito solo il then e non il catch in quanto
//la promise viene risolta e non ha problemi per andare in catch 



const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rand = Math.random();
        if (rand < 0.5) {
            resolve();
        }
        else {
            reject();
        }
    }, 5000);
});

promessa.then(() => {
    console.log("promessa mantenuta")
}).catch(() => {
    console.log("promessa rejected")
})
//si può scrivere anche così//
/* promessa.catch(() => {
    console.log("promessa rejected")
}) */


/*
pattern di scrittura diverso da quello di prima (utilizzare questo)
 in questo creo una nuova funzione che ritorna una promise invece
 che creare una nuova promise e salvarla dentro una variabile.
*/

const makeFunctionPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                resolve();
            }
            else {
                reject({ status: 404 }); // all'interno dei metodi resolve e reject è possibile inserire dei valori che vengono poi
                //passati ai metodi then e catch della promise 
            }
        }, 5000);
    });
}

makeFunctionPromise()
    .then(() => {
        console.log("promessa mantenuta")
    }).catch((response) => {
        console.log("promessa rejected" + " " + response.status)// response è un parametro scelto a caso che ha al suo interno
        // l'object passato nella creazione della promise dal metodo reject
    })

//ASYNC e AWAIT

/* async e await è un nuovo modo di scrivere codice ("syntactical sugar")
permette di avere la stessa sintassi del codice sincrono
ma in realtà quello che si sta usando funziona in modo asincrono
La keyword async va sempre inserita prima del nome della funzione
e poi await inserito all'interno */

//es:--->
async function getPlanet() {
    const res = await axios.get('https://swapi.co/api/planets/');
    console.log(res.data);
}

getPlanet();


/* è interessante vedere che nel caso non avessimo usato la keyword "await" il 
console log avrebbe dato come output "undefined" in quanto sarebbe stato eseguito subito
prima che la promise fosse risolta.
usando invece la parola await il console log non verrà eseguito fino a che la promise non verrà risolta
una volta che ha ricevuto i dati indietro allora il codice andrà avanti.
Infatti await indica proprio il fatto di "aspettare" che quella determinata operazione finisca e poi il codice potrà proseguire.
 */
//-------// gestione degli errori nelle async functions
async function getPlanet() {
    const res = await axios.get('https://swapi.co/api/planets/');
    console.log(res.data);
}

getPlanet().catch((err) => {
    console.log(err)
});

//oppure

async function getPlanet() {
    try {
        const res = await axios.get('https://swapi.co/api/planets/');
        console.log(res.data);
    }
    catch (e) {
        console.log(e);
    }
}

getPlanet();