// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("check organization type", function(){
    expect(launchcode.organization).toEqual("nonprofit");
  })
  test("check executive director name", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  })
  test("check percentage of cool employees", function(){
    let percentageOfCoolEmployees = launchcode.percentageOfCoolEmployees;
    expect(launchcode.percentageOfCoolEmployees).toEqual(100)
  })
  test("check number of programs offered", function(){
    let testValues = ["Web Development", "Data Analysis", "Liftoff"];
    let programsOffered = launchcode.programsOffered;
    for(let i = 0; i < testValues.length; i++){
      expect(programsOffered[i]).toBe(testValues[i])
    }
    expect(programsOffered.length).toEqual(3)
  })
  test("check launch output", function(){
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
    expect(launchcode.launchOutput(3)).toEqual("Code!");
    expect(launchcode.launchOutput(5)).toEqual("Rocks!");
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!")
    expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.")


  })
});