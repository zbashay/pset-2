const readlineSync = require("readline-sync");

const annual = Number(readlineSync.question("\nAnnual salary: "));

const four = .93;

const fed = .157;
const state = .0447;
const soc = .062;
const med = .0145;

const salary = (four * annual);

const total = ((salary * fed) + (salary * state) + (salary * soc) + (salary * med));

const home = (salary - total);

let paycheck = (home / 24).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nYour take-home pay each check will be $" + paycheck + ".")
