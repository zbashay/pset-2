const readlineSync = require("readline-sync");

let z = 3;
let w = .15;
let x = .35;
let y = .5;

console.log("\nEnter three homework grades.")
const a = Number(readlineSync.question(""));
const b = Number(readlineSync.question(""));
const c = Number(readlineSync.question(""));
const hw = (((a + b + c)/ z) * w );



console.log("\nEnter three quiz grades.")
const d = Number(readlineSync.question(""));
const e = Number(readlineSync.question(""));
const f = Number(readlineSync.question(""));

const quiz = (((d + e + f)/ z) * x );



console.log("\nEnter three test grades.")
const g = Number(readlineSync.question(""));
const h = Number(readlineSync.question(""));
const i = Number(readlineSync.question(""));

const test = (((g + h + i)/ z) * y );

const grade = (hw + quiz + test).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nYour marking period grade is " + grade + "%.");
