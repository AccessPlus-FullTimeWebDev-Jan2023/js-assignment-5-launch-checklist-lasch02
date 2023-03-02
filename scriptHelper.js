// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div. review the comments in addDestinationInfo(). This is the format of the innerHTML for the missionTarget div, which you can locate using the document parameter of addDestinationInfo(). addDestinationInfo() does not need to return anything
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
    let input = document.getElementByID("pilotStatus", "copilotStatus")
    let list = 
        <ol>
        {`Pilot ${pilotName} status: ${pilotReady}.`} 
        {`Copilot ${copilotName} status: ${copilotReady}.`}
        If (fuelLevel < 10000) {
            `${fuelLevel} too low for launch`;
        } else if (fuelLevel >= 10000 ) {
            ${fuelStatus}
        }

            
        
        </ol>
      
   
   
   
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert ("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert ("Invalid Input - Please Enter Name");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert ("Invalid Input - Please Enter a Number")
    }


    
}

//myFetch() has some of the code necessary for fetching planetary JSON, however, it is not complete. You need to add the URL and return response.json().
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

//pickPlanet() takes in one argument: a list of planets. Using Math.random(), return one planet from the list with a randomly-selected index
function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
