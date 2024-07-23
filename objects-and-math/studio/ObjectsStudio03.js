// Code your crewMass function here:
function crewMass(crew) {
  let mass = 0;
  for (let i = 0; i < crew.length; i++) {
    mass += crew[i].mass
  }
  return Math.round(mass * 10) / 10
}

// Code your fuelRequired function here:
function fuelRequired(crew) {
  let uncrewedMass = 75000;
  let totalMass = crewMass(crew) + uncrewedMass;
  let fuelNeeded = Math.ceil(totalMass * 9.5);
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].species === "dog" || crew[i].species === "cat") {
      fuelNeeded += 200
    } else {
      fuelNeeded += 100
    }
  }
  console.log(`The mission has a launch mass of ${totalMass} kg and requires ${fuelNeeded} kg of fuel.`)
  return fuelNeeded
}


// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function (hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function (hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function (hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function (hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function (hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function (hrs) { return 0.018 * hrs },
  'astronautID': 890
};

let crew = [candidateB, candidateC, candidateF];
console.log(crewMass(crew));
//  console.log(fuelRequired(crew));
fuelRequired(crew);