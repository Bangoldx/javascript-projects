const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, 
//and the third for the altitude the shuttle reaches.

let fuelLevel = "";
let numOfAstronauts = "";
let altitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

fuelLevel = input.question("Enter starting fuel level: ")
fuelLevel = Number(fuelLevel);

while (fuelLevel < 5000 || fuelLevel > 30000) {
  if (fuelLevel < 0 || isNaN(fuelLevel)) {
    fuelLevel = input.question("Invalid entry. Enter starting fuel level: ");
    fuelLevel = Number(fuelLevel);
  } else if (fuelLevel > 0 && fuelLevel < 5000) {
    fuelLevel = input.question("NOT ENOUGH FUEL. Enter starting fuel level: ");
    fuelLevel = Number(fuelLevel);
  } else if (fuelLevel > 30000) {
    fuelLevel = input.question("TOO MUCH FUEL. Enter starting fuel level: ");
    fuelLevel = Number(fuelLevel);
  }
}

// console.log(fuelLevel);

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

numOfAstronauts = input.question("Enter number of astronauts: ");
numOfAstronauts = Number(numOfAstronauts);

while (numOfAstronauts < 0 && numOfAstronauts > 7) {
  if (isNaN(numOfAstronauts)){
    numOfAstronauts = input.question("INVALID ENTRY! Enter number of astronauts: ");
    numOfAstronauts = Number(numOfAstronauts);
  } else if (numOfAstronauts < 1) {
    numOfAstronauts = input.question("NOT ENOUGH ASTRONAUTS! Enter number of astronauts: ");
    numOfAstronauts = Number(numOfAstronauts);
  } else if (numOfAstronauts > 7) {
    numOfAstronauts = input.question("TOO MANY ASTRONAUTS! Enter number of astronauts: ");
    numOfAstronauts = Number(numOfAstronauts);
  }
}
//  console.log(numOfAstronauts);

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. 
//   Also, increase the altitude by 50 kilometers.

while(fuelLevel - 100 * numOfAstronauts >=0){
  fuelLevel -= 100 * numOfAstronauts;
  altitude += 50;
}

console.log(altitude);

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let result = `The shuttle gained an altitude of ${altitude} km. `;

if(altitude >= 2000){
  result += "Orbit achieved!"
} else {
  result += "Failed to reach orbit.";
}

console.log(result);
