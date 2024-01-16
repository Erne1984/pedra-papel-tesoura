const btnPapper = document.querySelector("#btnPapper");
const btnScissor = document.querySelector("#btnScissor");
const btnRock = document.querySelector("#btnRock");
const roundDisplay = document.querySelector("#round");
const count = document.querySelector("#count");
const playerPointsDisplay = document.querySelector("#player");
const machinePointsDisplay = document.querySelector("#machine");

let playerPoints = 0;
let machinePoints = 0;

function getComputerChoice() {

    const choices = ["pedra", "tesoura", "papel"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {

    let result = "";

    if (playerSelection === computerSelection) {
        result = "draw"
    } else if (
        (playerSelection == "pedra" && computerSelection == "tesoura") ||
        (playerSelection == "tesoura" && computerSelection == "papel") ||
        (playerSelection == "papel" && computerSelection == "pedra")) {

        result = "player"
    } else {
        result = "machine"
    }

    if (result == "player") {
        roundDisplay.textContent = "Ponto do player"
        playerPoints += 1;
        playerPointsDisplay.textContent = playerPoints;
    } else if (result == "machine") {
        roundDisplay.textContent = "Ponto da maquina"
        machinePoints += 1;
        machinePointsDisplay.textContent = machinePoints;
    } else {
        roundDisplay.textContent = "Empate"
    }

    if (playerPoints === 5 || machinePoints === 5) {
        game(playerPoints, machinePoints)
        playerPoints = 0;
        machinePoints = 0;
    }

}

function game(playerPoints, machinePoints) {

    if (playerPoints > machinePoints) {
        alert("O jogador ganhou")
        playerPointsDisplay.textContent = 0;
        machinePointsDisplay.textContent = 0;
        roundDisplay.textContent = "";
    } else {
        alert("A maquina ganhou")
        playerPointsDisplay.textContent = 0;
        machinePointsDisplay.textContent = 0;
        roundDisplay.textContent = "";
    }
}


btnPapper.addEventListener('click', () => playRound("papel", getComputerChoice()));
btnRock.addEventListener('click', () => playRound("pedra", getComputerChoice()));
btnScissor.addEventListener('click', () => playRound("tesoura", getComputerChoice()));