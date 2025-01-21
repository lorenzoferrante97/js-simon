// start code

// workflow
// 1. generare 5 numeri random
//      - inserirli in un array
// 2. far partire un timer di 30s
// 3. far sparire i numeri generati a schermo
// 4. appaiono input per far inserire all'utente i numeri che ricorda di aver visto
// 5. controllo sui numeri indovinati
//      - recupero i value degli input
//      - controllo con ciclo se numeri inseriti dall'utente corrispondono a quelli random
//      - se corrispondono:
//              - aumento counter indovinati
//              - inserire num indovinato in array num indovinati
// 6. stampare risultato


function generaNumRandom () {

    return Math.floor(Math.random() * 100) + 1;
}

let num1 = generaNumRandom();
let num2 = generaNumRandom();
let num3 = generaNumRandom();
let num4 = generaNumRandom();
let num5 = generaNumRandom();

console.log(num1, num2, num3, num4, num5)