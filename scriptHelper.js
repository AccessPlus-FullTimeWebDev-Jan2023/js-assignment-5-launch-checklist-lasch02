// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
let missionTarget = document.getElementById("missionTarget");

    // for(let i = 0; i < json.length; i++) {
    // let planet = json[i];

    missionTarget.innerHTML = 
                 `<h2>Mission Destination</h2>
                  <ol>
                  <li>Name: ${name}</li>
                   <li>Diameter: ${diameter}</li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance}</li>
                  <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
    }


//the pilot and co-pilot names should be strings and the fuel level and cargo mass should be numbers. To do this, complete the helper function in your scriptHelper.js called validateInput(). validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate. Note: JavaScript has a built-in method called isNaN(value) that returns true if value is NaN and false if value is not NaN.
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
}
// you will use validateInput() to complete the formSubmission() function. formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass. Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements as described below. Make sure to call your formSubmission() function at the appropriate time in your script.js file!
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
  
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert ("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert ("Invalid Input - Please Enter Name");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert ("Invalid Input - Please Enter a Number")
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
        list.style.visibility = "visible";
        if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.style.color = "#C7254E"; //red
        } else if (fuelLevel > 10000 && cargoLevel < 10000) {
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            launchStatus.innerHTML = `Shuttle is Ready for Launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.style.color = "#419F6A"; //green
        } else if (fuelLevel > 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.style.color = "#C7254E"; //red
        } else if (fuelLevel < 10000 && cargoLevel < 10000) {
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.style.color = "#C7254E"; //red
        }
    }
}

//myFetch() has some of the code necessary for fetching planetary JSON, however, it is not complete. You need to add the URL and return response.json().
async function myFetch() {
    let planetsReturned;
    
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });
      
    return planetsReturned;
}

//pickPlanet() takes in one argument: a list of planets. Using Math.random(), return one planet from the list with a randomly-selected index
function pickPlanet(planets) {
   let randomPlanet = Math.floor(Math.random() * 6)
   return planets[randomPlanet];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
