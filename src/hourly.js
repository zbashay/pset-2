const readlineSync = require("readline-sync");

const wage = Number(readlineSync.question("\nHourly wage: "));


const a = Number(readlineSync.question("\nMonday: "));
const b = Number(readlineSync.question("Tuesday: "));
const c = Number(readlineSync.question("Wednesday: "));
const d = Number(readlineSync.question("Thursday: "));
const e = Number(readlineSync.question("Friday: "));
const f = Number(readlineSync.question("Saturday: "));
const g = Number(readlineSync.question("Sunday: "));

const money = ((a * wage) + (b * wage) + (c * wage) + (d * wage) + (e * wage) + (f * wage) + (g * wage)).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nYou'll make $" + money + " this week.")
