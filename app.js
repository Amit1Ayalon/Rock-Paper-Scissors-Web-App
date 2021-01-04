let rockElem;
let paperElem;
let scissorsElem;

window.onload = function () {
    rockElem = document.getElementById("rock");
    paperElem = document.getElementById("paper");
    scissorsElem = document.getElementById("scissors");

    rockElem.onclick = function () { moveMade(rock.id) };
    paperElem.onclick = function () { moveMade(paper.id) };
    scissorsElem.onclick = function () { moveMade(scissors.id) };
}

function moveMade(move) {
    console.log("The player played " + move);
    let movesDict = {
        "rock": 0,
        "paper": 1,
        "scissors": 2
    };
    let playerMoveId = movesDict[move];
    let compMoveId = Math.floor(Math.random(3));

    if (playerMoveId == compMoveId) {
        //tie
    } else if (playerMoveId == 0 && compMoveId == 2) {
        //player win - rock smash scissors
    } else if (playerMoveId == 2 && compMoveId == 0) {
        //computer win - rock smash scissors
    } else if (playerMoveId == 1 && compMoveId == 0) {
        //player win - paper cover rock
    } else if (playerMoveId == 0 && compMoveId == 1) {
        //computer win - paper cover rock
    } else if (playerMoveId == 2 && compMoveId == 1) {
        //player win - scissors cut paper
    } else if (playerMoveId == 1 && compMoveId == 2) {
        //computer win - scissors cut paper
    } 
}

