function getComputerChoice() {

    const choices = ["pedra", "tesoura", "papel"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function getPlayerChoice() {
    const choice = prompt("Pedra, papel ou tesoura?");

    validatingInput(choice);

    choiceFinal = choice.toLocaleLowerCase;

    return choiceFinal;
}

function validatingInput(value) {

    if(value === ""){
        return alert("Please enter something")
    }

    if((value !== "pedra") && (value !== "tesoura") && (value !== "papel")){
        return alert("Choose a valid answer!")
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "draw"
    } else if (
        (playerSelection == "pedra" && computerSelection == "tesoura") ||
        (playerSelection == "tesoura" && computerSelection == "papel") ||
        (playerSelection == "papel" && computerSelection == "pedra")) {

        return "Player wins"
    } else {
        return "Machine wins"
    }

}



console.log(playRound(getPlayerChoice(), getComputerChoice()))

