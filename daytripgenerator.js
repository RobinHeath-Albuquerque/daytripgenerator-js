"use strict";

let destinations = ["Albuquerque", "Taos", "Jemez", "Roswell"];

let restaurantsAlbuquerque = ["Range", "Savoy", "Gardunos"];
let restaurantsTaos = ["Gutiz", "Moderna", "Geronimos"];
let restaurantsJemez = ["Daves", "Sisters", "hotSpringsCafe"];
let restaurantsRoswell = ["cowboyCafe", "alienEats" ,"stellarCafe"]

let transportationAlbuquerque = ["jakes", "yellowCab", "uber"]
let transportationTaos = ["taosShuttle", "greyhound", "amtrak"];
let transportationJemez = ["railRunner", "greyhound", "uber"];
let transportationRoswell = ["newMexicoLuxuryBus", "greyhound", "amtrak"];

let entertainmentAlbuquerque = ["indianCulturalCenter", "oldTown", "atomicMuseum"];
let entertainmentTaos = ["puebloTour", "artGallery", "whiteWaterRafting"];
let entertainmentJemez = ["puebloTour", "potteryDemo",  "nativeAmericanDanceExhibit"];
let entertainmentRoswell = ["ufoMuseum", "carlsbadCavernsTour", "nmmiTour"];




let city = destinations[Math.floor(Math.random() * destinations.length)];
console.log(city);

