const readlineSync = require("readline-sync");
const MM_TO_IN = 25.4;
const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");
let a = width;
let b = length;
const diagonal = Math.hypot(a, b).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nA(n) " + a + "-by-" + b + "-inch sheet of paper has an diagonal of " + diagonal + " inch(es).");
