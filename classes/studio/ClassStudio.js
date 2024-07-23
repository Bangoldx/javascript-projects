//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(score) {
        this.scores.push(score);
    }
    average() {
        let total = 0;
        let average = 0
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i]
        }
        average = Math.round((total / this.scores.length) * 10) / 10;
        return average
    }
    status() {
        let average = this.average();

        if (average >= 90) {
            return "Accepted";
        } else if (average >= 80 && average < 90) {
            return "Reserved";
        } else if (average >= 70 && average < 80) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
}
const bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
const merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
const gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

bubbaBear.addScore(83);
console.log(bubbaBear);

console.log(merryMaltese.average());

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`)
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`)
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`)

let steps = 0;
while(gladGator.average() <=80 ){
    steps += 1;
    gladGator.addScore(100);
}
console.log(steps);



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.