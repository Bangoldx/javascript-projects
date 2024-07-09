const input = require('readline-sync');

let info = input.question("Question text... ");

console.log(info);


let num1 = Number(input.question("Pick a number..."));
let num2 = Number(input.question("Pick another number..."));
let total = num1 + num2;

console.log(total);