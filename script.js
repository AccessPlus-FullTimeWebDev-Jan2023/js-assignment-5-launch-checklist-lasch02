// Write your JavaScript code here!
//***********Somewhere on this page, I need to call formSubmission() function!!!****************

// const { formSubmission } = require("./scriptHelper");

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
    let planet = pickPlanet(listedPlanets);
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
   })
   
   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
   event.preventDefault();

   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let pilot = pilotNameInput.value;
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let copilot = copilotNameInput.value; 
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let fuelLevel = Number(fuelLevelInput.value); 
   let cargoMassInput = document.querySelector("input[name=cargoMass]");
   let cargoMass = Number(cargoMassInput.value); 
   
formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);

    });


   
});

