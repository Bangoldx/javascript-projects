// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(2 * Math.PI * radius);
}

// Code your missionDuration function here:
function missionDuration(orbits, radius = 2000, speed = 28000) {

  let distance = orbits * orbitCircumference(radius);
  let time = distance / speed;
  time = Math.round(time * 100) / 100;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete. `);
  return time
}

// missionDuration(5, 2000, 28000)


// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let randId = Math.floor(Math.random() * arr.length);
  return arr[randId]
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate) {

  let spaceWalkTime = missionDuration(3);
  let o2Used = Math.round(candidate.o2Used(spaceWalkTime) * 1000) / 1000;
  console.log(`${candidate.name} will perform the spacewalk, which will last ${spaceWalkTime} hours and require ${o2Used} kg of oxygen.`)
  return o2Used
}

// Candidate data & crew array.
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

let crew = [candidateA, candidateC, candidateE];
oxygenExpended(selectRandomEntry(crew));
