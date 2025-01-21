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

let numsRandom = [];
let listRandom = document.getElementById("numbers-list");

for (let i = 0; i < 5; i++) {
    numsRandom[i] = generaNumRandom();
    let li = document.createElement("li");
    li.append(numsRandom[i]);
    listRandom.appendChild(li);
}