"use strict";

let destinations = ["Albuquerque", "Taos", "Jemez", "Roswell"];

let Albuquerque = destinations [0];
let Taos = destinations [1];
let Jemez = destinations [2]
let Roswell = destinations [3];

let randomValue = destinations[Math.floor(Math.random() * destinations.length)];
console.log(randomValue);


if (randomValue === "Albuquerque") {
    console.log("Lunch at the Range Cafe!");
}
if(randomValue === "Taos") {
    console.log("Lumch at Gutiz!");
    
}
if(randomValue === "Jemez") {
    console.log("Lunch at Daves Cafe!");

}
if(randomValue === "Roswell") {
    console.log("Lunch at The Cowboy Cafe!");
}
if(randomValue === "Albuquerque") {
    console.log("Transportation by Jake's Car Service.");

}
if(randomValue === "Taos") {
    console.log("Transportation by Taos Shuttle.");

}
if(randomValue === "Jemez") {
    console.log("Transportation by Rail Runner Train.");

}
if(randomValue === "Roswell") {
    console.log("Transportation by  New Mexico Luxury Bus.");
    
}
