const btnPapper = document.querySelector("#btnPapper");
const btnScissor = document.querySelector("#btnScissor");
const btnRock = document.querySelector("#btnRock");
const roundDisplay = document.querySelector("#round");
const count = document.querySelector("#count");

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
    } else if (result == "machine") {
        roundDisplay.textContent = "Ponto da maquina"
    } else {
        roundDisplay.textContent = "Empate"
    }

}

function game() {

    let playerPoints = 0;
    let machinePoints = 0;

    for (let i = 1; i < 6; i++) {

        console.log(`Rodada ${i}`)

        const result = playRound(getPlayerChoice(), getComputerChoice());

        if (result == "player") {
            playerPoints += 1;
            console.log("Ponto do player")
        } else if (result == "machine") {
            machinePoints += 1;
            console.log("Ponto da maquina")
        } else {
            console.log("empate")
        }
    }

    if (playerPoints === machinePoints) {
        console.log("Foi um empate")
    } else if (playerPoints > machinePoints) {
        console.log("O jogador ganhou")
    } else {
        console.log("A maquina ganhou")
    }
}


btnPapper.addEventListener('click', () => {
    playRound("papel", getComputerChoice())

});
btnRock.addEventListener('click', () => {
    playRound("pedra", getComputerChoice())

});
btnScissor.addEventListener('click', () => {
    playRound("tesoura", getComputerChoice())

});