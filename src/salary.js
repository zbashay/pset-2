const readlineSync = require("readline-sync");

const annual = Number(readlineSync.question("\nAnnual salary: "));

const four = 0.07
const fed = .157
const state = .447
const social = .062
const med = .0145

const salary = (four * annual);
const home = ((salary * fed) + (salary * state) + (salary * social) + (salary * med));
