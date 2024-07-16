const checkFive = require('../checkFive.js');

describe("check five", function(){
    test("checks to see output being less than 5", function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.")
    })
    
})