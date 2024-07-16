const whoWon = require("../RPS.js");

describe("tests to see who wins RPS", function(){
    test("checks to see if returns TIE! if both players chose the same", function(){
        let round = whoWon("rock", "rock");
        expect(round).toEqual("TIE!")
    })
    test("checks to see if returns Player 2 Wins! if P1 = rock & P2 = paper", function(){
        let round = whoWon("rock", "paper");
        expect(round).toEqual("Player 2 wins!")
    })
    test("checks to see if returns Player 2 Wins! if P1 = paper & P2 = scissors", function(){
        let round = whoWon("paper", "scissors");
        expect(round).toEqual("Player 2 wins!")
    })
    test("checks to see if returns Player 2 Wins! if P1 = scissors & P2 = rocks", function(){
        let round = whoWon("scissors", "rock");
        expect(round).toEqual("Player 2 wins!")
    })
})