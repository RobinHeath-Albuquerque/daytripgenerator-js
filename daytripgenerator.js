"use strict";

prompt("Hello. Please type start to have your day trip planning begin. ");


let destinations = ["Albuquerque", "Taos", "Jemez", "Roswell"];

let restaurantsAlbuquerque = [" Range", " Savoy", " Gardunos"];
let restaurantsTaos = ["Gutiz", "Moderna", "Geronimos"];
let restaurantsJemez = [" Daves", " Sisters", " hotSpringsCafe"];
let restaurantsRoswell = ["cowboyCafe", "alienEats" ,"stellarCafe"]

let transportationAlbuquerque = [" jakes", " yellowCab", " uber"]
let transportationTaos = [" taosShuttle", " greyhound", " amtrak"];
let transportationJemez = [" railRunner", " greyhound", " uber"];
let transportationRoswell = [" newMexicoLuxuryBus", " greyhound", " amtrak"];

let entertainmentAlbuquerque = [" indianCulturalCenter", " oldTown", " atomicMuseum"];
let entertainmentTaos = [" puebloTour", " artGallery", " whiteWaterRafting"];
let entertainmentJemez = [" puebloTour", " potteryDemo",  " nativeAmericanDanceExhibit"];
let entertainmentRoswell = [" ufoMuseum", " carlsbadCavernsTour", " nmmiTour"];




let city = destinations[Math.floor(Math.random() * destinations.length)];
console.log(city);

if (city === "Albuquerque") {

let abqTrip = restaurantsAlbuquerque[Math.floor(Math.random() * restaurantsAlbuquerque.length)]
 +  transportationAlbuquerque[Math.floor(Math.random() * transportationAlbuquerque.length)] 
 + entertainmentAlbuquerque[Math.floor(Math.random() * entertainmentAlbuquerque.length)];
console.log(abqTrip);
}


if(city === "Taos") {
    let taosTrip = restaurantsTaos[Math.floor(Math.random() * restaurantsTaos.length)]
     + transportationTaos[Math.floor(Math.random() * transportationTaos.length)] + 
     entertainmentTaos[Math.floor(Math.random() * entertainmentTaos.length)];
    console.log(taosTrip);
}

if(city ==="Jemez") {
    let jemezTrip = restaurantsJemez[Math.floor(Math.random() * restaurantsJemez.length)]
     + transportationJemez[Math.floor(Math.random() * transportationJemez.length)] + 
     entertainmentJemez[Math.floor(Math.random() * entertainmentJemez.length)];
    console.log(jemezTrip);
}

if(city === "Roswell") {
    let roswellTrip = restaurantsRoswell[Math.floor(Math.random() * restaurantsRoswell.length)]
    + transportationRoswell[Math.floor(Math.random() * transportationRoswell.length)] 
    + entertainmentRoswell[Math.floor(Math.random() * entertainmentRoswell.length)];
    console.log(roswellTrip);
    
}
prompt("Would you like to comfirm this trip? Please answer yes or no.");

let userInput = ("yes", "no");

if(userInput = "yes") {
    console.log("Thank you. Your trip is confirmed.");

    }else(userInput === "no") 
        prompt("Which part would you like to change? Please enter Destination, Transportation, Restaurant, Entertainment or All.");

let userOption = ("destination", "transportation", "restaurant", "entertainment", "all");


if(userOption = "destination") {
    prompt("Please select from the following. Albuquerque, Taos, Jemez or Roswell.");
}
let destination = ["Albuquerque", "Taos", "Jemez", "Roswell"];


if(destination = "Albuquerque") {
    let abqTrip = restaurantsAlbuquerque[Math.floor(Math.random() * restaurantsAlbuquerque.length)]
    + transportationAlbuquerque[Math.floor(Math.random() * transportationAlbuquerque.length)]
    +entertainmentAlbuquerque[Math.floor(Math.random() * entertainmentAlbuquerque.length)];
    console.log("Albuquerque" + abqTrip);

}
function displayAlbuquerqueTrip(abqTrip) {
    console.log("Your Albuquerque Trip is Complete.");
}

displayAlbuquerqueTrip();




  




        

