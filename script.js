const btnPapper = document.querySelector("#btnPapper");
const btnScissor = document.querySelector("#btnScissor");
const btnRock = document.querySelector("#btnRock");
const roundDisplay = document.querySelector("#round");
const count = document.querySelector("#count");
const playerPointsDisplay = document.querySelector("#player");
const machinePointsDisplay = document.querySelector("#machine");
const playerChoice = document.querySelector("#playerChoice");
const machineChoice = document.querySelector("#machineChoice");
const modal = document.querySelector("#modal");
const winner = document.querySelector("#winner");
const btnRestart = document.querySelector("#restart");

let playerPoints = 0;
let machinePoints = 0;

function getComputerChoice() {

    const choices = ["pedra", "tesoura", "papel"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {

    let result = "";

    displayingChoice(playerSelection, computerSelection);

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
        roundDisplay.textContent = "Ponto do Jogador"
        playerPoints += 1;
        playerPointsDisplay.textContent = playerPoints;
    } else if (result == "machine") {
        roundDisplay.textContent = "Ponto da Máquina"
        machinePoints += 1;
        machinePointsDisplay.textContent = machinePoints;
    } else {
        roundDisplay.textContent = "Empate"
    }

    if (playerPoints === 5 || machinePoints === 5) {
        game(playerPoints, machinePoints)
    }

}

function displayingChoice(playerSelection, machineSelection) {
    if (playerSelection == "pedra") {
        playerChoice.textContent = "✊";
    } else if (playerSelection == "tesoura") {
        playerChoice.textContent = "✌";
    } else {
        playerChoice.textContent = "✋"
    }

    if (machineSelection == "pedra") {
        machineChoice.textContent = "✊";
    } else if (machineSelection == "tesoura") {
        machineChoice.textContent = "✌";
    } else {
        machineChoice.textContent = "✋"
    }

}

function game(playerPoints, machinePoints) {

    if (playerPoints > machinePoints) {
        modal.classList.toggle('modal-none')
        winner.textContent = "Você Ganhou!"
    } else {
        modal.classList.toggle('modal-none')
        winner.textContent = "Você Perdeu!"
    }
}

function restart() {
    modal.classList.toggle('modal-none')
    roundDisplay.textContent = "Primeiro a marcar 5 ganha pontos";
    playerPointsDisplay.textContent = 0;
    machinePointsDisplay.textContent = 0;
    roundDisplay.textContent = "";
    playerPoints = 0;
    machinePoints = 0;
}

btnRestart.addEventListener('click', () => restart());

btnPapper.addEventListener('click', () => playRound("papel", getComputerChoice()));
btnRock.addEventListener('click', () => playRound("pedra", getComputerChoice()));
btnScissor.addEventListener('click', () => playRound("tesoura", getComputerChoice()));