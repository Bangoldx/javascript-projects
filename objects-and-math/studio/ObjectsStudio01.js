// Code your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let randId = Math.floor(Math.random() * arr.length);
  return arr[randId]
}

// Code your buildCrewArray function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

const luckyPick = [];

while (luckyPick.length < 3) {
  let num = selectRandomEntry(idNumbers)
  if (!(luckyPick.includes(num))) {
    luckyPick.push(num)
  }
}
console.log(luckyPick);


let crewArray = []
function buildCrewArray(picks, objects) {

  for (let i = 0; i < objects.length; i++) {
    if (picks.includes(objects[i].astronautID)) {
      crewArray.push(objects[i].name);
    }
  }
  // return crewArray
}

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

// Code your template literal and console.log statements:
buildCrewArray(luckyPick, animals);
// console.log(crewArray);
console.log(`${crewArray[0]}, ${crewArray[1]}, and ${crewArray[2]} are going to space!`)