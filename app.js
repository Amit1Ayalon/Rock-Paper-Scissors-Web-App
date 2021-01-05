let rockElem;
let paperElem;
let scissorsElem;
let result;
let playerScore;
let compScore;
let playerScoreElem;
let compScoreElem;

window.onload = function () {
    rockElem = document.getElementById("rock");
    paperElem = document.getElementById("paper");
    scissorsElem = document.getElementById("scissors");
    result = document.getElementById("result-p");
    playerScoreElem = document.getElementById("user-score");
    compScoreElem = document.getElementById("comp-score");
    playerScore = 0;
    compScore = 0;

    rockElem.onclick = function () { moveMade(rock.id) };
    paperElem.onclick = function () { moveMade(paper.id) };
    scissorsElem.onclick = function () { moveMade(scissors.id) };
}

function moveMade(move) {
    let movesDict = {
        "rock": 0,
        "paper": 1,
        "scissors": 2
    };
    let playerMoveId = movesDict[move];
    let compMoveId = getRandInteger(0, 2);

    if (playerMoveId == compMoveId) {
        //tie
        result.innerHTML = "Tie! both player and computer played " + getKeyByValue(movesDict, playerMoveId);
        playerScore++;
        compScore++;
        playerScoreElem.innerHTML = playerScore;
        compScoreElem.innerHTML = compScore;
    } else if (playerMoveId == 0 && compMoveId == 2) {
        //player win - rock smash scissors
        win("player", getKeyByValue(movesDict, playerMoveId));
    } else if (playerMoveId == 2 && compMoveId == 0) {
        //computer win - rock smash scissors
        win("computer", getKeyByValue(movesDict, compMoveId));
    } else if (playerMoveId == 1 && compMoveId == 0) {
        //player win - paper cover rock
        win("player", getKeyByValue(movesDict, playerMoveId));
    } else if (playerMoveId == 0 && compMoveId == 1) {
        //computer win - paper cover rock
        win("computer", getKeyByValue(movesDict, compMoveId));
    } else if (playerMoveId == 2 && compMoveId == 1) {
        //player win - scissors cut paper
        win("player", getKeyByValue(movesDict, playerMoveId));
    } else if (playerMoveId == 1 && compMoveId == 2) {
        //computer win - scissors cut paper
        win("computer", getKeyByValue(movesDict, compMoveId));
    } 
}

function win(whoWin, winPlay) {
    let beatDict = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    }
    result.innerHTML = winPlay + " beats " + beatDict[winPlay] + ". " + whoWin + " wins!";

    if (whoWin == "player") {
        playerScore++;
    } else if (whoWin == "computer") {
        compScore++;
    }
    playerScoreElem.innerHTML = playerScore;
    compScoreElem.innerHTML = compScore;
}

function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}