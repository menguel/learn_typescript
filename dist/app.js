"use strict";
const a = "hello world";
const n = 10;
const b = true;
const d = null;
const arr = ['aze', 'aa', 3];
const user = { firstname: 'John', lastname: 'Doe' }; // Pour utiliser une infinité de clé 
const data = new Date(); // Pour de type spécifique 
const cb = (e) => {
    return 3;
};
// const compteur = document.querySelector('#compteur') as HTMLButtonElement // Pour attribuer un type à Element 
function printId(id) {
    console.log(id.toString());
}
const compteur = document.querySelector('#compteur');
let i = 0; // let pour initialier des variable qui vont être incrémentées
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
/* Type Narrowing */
function printId2(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString()); // Tailwin dévine directement que l'on traite avec des nombres
    }
    else {
        console.log(id.toUpperCase());
    }
}
const date = "2022-01-01";
const id1 = 123;
const users = { firstname: "John", lastname: "Doe" };
function identity(arg) {
    return arg;
}
function fisrt(arg) {
    return arg[0];
}
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const aa1 = consoleSize([1, 2, 3]);
const a1 = identity(3);
