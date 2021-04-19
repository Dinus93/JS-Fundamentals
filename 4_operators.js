//OPERATORI DI PARAGONE
/*
> maggiore
< minore
>= maggiore uguale
<= minore uguale
== uguale
!= non uguale/diverso
=== uguaglianza stretta
!== disuguaglianza stretta

tutti questi operatori di paragone ritornano un BOOLEANO (true o false)
*/

//DOUBLE EQUALS VS TRIPLE EQUALS
/*
la doppia uguaglianza controlla solo l'uguaglianza di valore ma non del tipo
*/
console.log(7 == "7");
/*
la tripla uguaglianza invece controlla l'uguaglianza di valore e di tipo
*/
console.log(7 === "7");
console.log(7 === 7);
console.log(10 !== "10");
console.log(10 != "10");
// nel 99% dei casi conviene usare sempre l'operatore di triplice uguaglianza per evitare problemi

//LOGICAL OPERATOR
/*

&&(AND) entrambi i lati devono essere true per far si che la condizione sia verificata
||(OR) solo uno dei 2 lati deve essere true
!(NOT) indica il contrario di ciò che ha vicino
Tra i vari operatori logici esiste una precedenza --> viene prima !(NOT) --> poi &&(AND) --> ||(OR)

*/
console.log(1 < 4 && "a" === "a");
console.log(1 > 4 || 2 === 2);
console.log(!false);