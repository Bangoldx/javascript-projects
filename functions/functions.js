const input = require("readline-sync");

let char = input.question("What character would you like to use? ");


function makeLine(size) {
    let line = ""
    for (let i = 0; i < size; i++) {
        line += char
    }
    return line;
}
console.log(makeLine(5));

function makeSquare(size) {

    let square = "";

    for (let i = 0; i < size; i++) {
        square += makeLine(size) + "\n";
    }
    return square;
}

console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = "";
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + "\n")
    }
    return rectangle;
}

console.log(makeRectangle(6, 2));

function makeDownwardStairs(height) {
    let downwardStairs = "";
    for (let i = 0; i < height; i++) {
        downwardStairs += (makeLine(i + 1) + "\n")
    }
    return downwardStairs;
}

console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let space = "";
    let line = ""
    for (let i = 0; i < numSpaces; i++) {``
        space += " ";
    }
    for (let j = 0; j < numChars; j++) {
        line += char;
    }
    return space + line + space;
}

console.log(makeSpaceLine(3, 5));
console.log();

function makeIsoscelesTriangle(height) {
    let triangle = "";
    for (let i = 0; i < height; i++) {
        triangle += ("\n" + makeSpaceLine(height - i - 1, 2 * i + 1))
    }
    return triangle;
}
console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = (makeIsoscelesTriangle(height) )
    diamond += "\n"+ diamond.split("").reverse().join("");
    return diamond;
}

console.log(makeDiamond(5));