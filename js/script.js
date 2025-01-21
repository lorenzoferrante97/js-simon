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

    return Math.floor(Math.random() * 50) + 1;
}

let instructions = document.getElementById("instructions").classList;
let instructionsGuess = document.getElementById("instructionsToGuess");

let numsRandom = [];
let listRandom = document.getElementById("numbers-list");

let form = document.getElementById("answers-form");

let btn = document.querySelector(".btn");

let counterGuessed = 0;
let numsGuessed = [];

let result = document.getElementById("message");

const time = 5*1000;

for (let i = 0; i < 5; i++) {
    let randomTemp = generaNumRandom();
    if (!(numsRandom.includes(randomTemp))) {
        numsRandom[i] = randomTemp;
        let li = document.createElement("li");
        li.append(numsRandom[i]);
        listRandom.appendChild(li);
    } else {
        i--;
    }
}

setTimeout(function() {
    instructionsGuess.append("Inserisci tutti i numeri che ricordi (l'ordine non è importante)");

    instructions.add("d-none");

    listRandom.classList.remove("d-flex");
    listRandom.classList.add("d-none");

    form.classList.remove("d-none");
}, time);

btn.addEventListener("click", () => {
    event.preventDefault();

    let numsUser = document.querySelectorAll(".form-control");
    
    for (let x = 0; x < numsUser.length; x++) {
        let numTemp = parseInt(numsUser[x].value);
        if (numsRandom.includes(numTemp)) {
            counterGuessed++;
            numsGuessed.push(numTemp);
        }
    }

    result.append(`Hai indovinato ${counterGuessed} numeri! ${numsGuessed.join("-")}`);

})

// end code

// start bonus