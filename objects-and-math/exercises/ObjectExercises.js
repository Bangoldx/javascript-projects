let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () { return Math.floor(Math.random() * 11) }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () { return Math.floor(Math.random() * 11) }
};

let superChimpTw0 = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () { return Math.floor(Math.random() * 11) }
}

let powerPup = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () { return Math.floor(Math.random() * 11) }
}

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () { return Math.floor(Math.random() * 11) }
}

let crew = [superChimpOne, superChimpTw0, salamander, powerPup, waterBear];

function crewReports(crewMembers) {
   return crewMembers.name + ' is a ' + crewMembers.species + ' They are ' + crewMembers.age +
      ' years old and ' + crewMembers.mass + ' kilograms. Their ID is ' + crewMembers.astronautID + '.'
}

console.log();
console.log(crewReports(superChimpOne));
console.log();
console.log(crewReports(superChimpTw0));
console.log();
console.log(crewReports(salamander));
console.log();
console.log(crewReports(powerPup));
console.log();
console.log(crewReports(waterBear));
console.log();

function fitnessTest(crewArray) {
   let result = [], numSteps, turns;
   for (let i = 0; i < crewArray.length; i++) {
      numSteps = 0;
      turns = 0
      while (numSteps < 20) {
         numSteps += crewArray[1].move();
         turns++
      }
      result.push(`${crewArray[i].name} took ${turns} turns to take 20 steps.`)
   }
   return result;
}

console.log(fitnessTest(crew));

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
