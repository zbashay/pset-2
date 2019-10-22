const readlineSync = require("readline-sync");
const IN_TO_CM = 2.54;
const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
let a = width;
let b = length;
let c = a * IN_TO_CM;
let d = b * IN_TO_CM;
const perimeter = (c + c + d + d).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nA(n) " + a + "-by-" + b + "-inch sheet of paper has an perimeter of " + perimeter + " square centimeter(s).");
