"use strict";
const firstName = "Kleiton";
const anotherName = 1;
const x = true;
function greeting(name) {
    console.log("Olá " + name);
}
greeting(firstName);
// greeting(anotherName);
// greeting(x);
function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(2, 2));
const a = true;
console.log(a);
// inference e annotation
let ann = "Teste";
let inf = "Teste";
// ann = 1
// inf = 1;
console.log("Testando watch ou live reload");
// Desafio 2
let num = 2;
let numStr = num.toString();
let template = `O número é ${numStr}`;
console.log(template);
