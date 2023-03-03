// Write your JavaScript code here!
//***********Somewhere on this page, I need to call formSubmission() function!!!****************

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

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
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, plantet.moons, planet.image)
   })
   
   let form = document.querySelector("launchForm");
   form.addEventListener("submit", function(event) {
   event.preventDefault();

   pilotNameInput = form.pilotName['pilotName'];
   
   copilotNameInput = form.copilotName['copilotName'];
   fuelLevelInput = form.fuelLevel['fuelLevel'];
   cargoMassInput = form.cargoMass['cargoMass'];
   
    });


   
});

