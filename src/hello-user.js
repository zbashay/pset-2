const readlineSync = require("readline-sync");

const name = readlineSync.question("Hi! What's your name?\n");
console.log("\nHello, " + name + "!");
