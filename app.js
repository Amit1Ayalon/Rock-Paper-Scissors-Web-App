window.onload = function () {
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    rock.onclick = function () { moveMade(rock.id) };
    paper.onclick = function () { moveMade(paper.id) };
    scissors.onclick = function () { moveMade(scissors.id) };

}

function moveMade(move) {
    console.log(move);
}

