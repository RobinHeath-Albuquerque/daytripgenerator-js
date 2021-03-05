"use strict";

let destinations = ["Albuquerque", "Taos", "Jemez", "Roswell"];

let Albuquerque = destinations [0];
let Taos = destinations [1];
let Jemez = destinations [2]
let Roswell = destinations [3];

let randomValue = destinations[Math.floor(Math.random() * destinations.length)];
console.log(randomValue);

for(let index = 0; index < destinations.length; index ++) {
    if (destinations[index] === "Albuquerque") {
        console.log("Lunch at The Range Cafe!");
    }
    else if(destinations[index] === "Taos") {
        console.log("Lunch at Gutiz!");

    }
    else if(destinations[index] === "Jemez") {
        console.log("Lunch at Daves!");

    }