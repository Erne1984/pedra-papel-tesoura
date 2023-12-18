function getComputerChoice() {

    const choices = ["pedra", "tesoura", "papel"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function getPlayerChoice() {
    const choice = prompt("Pedra, papel ou tesoura?");

    validatingInput(choice);

    const choiceFinal = choice.toLocaleLowerCase();

    console.log(choiceFinal);

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

        return "player"
    } else {
        return "machine"
    }

}

function game(){

    let playerPoints = 0;
    let machinePoints = 0;
    
    for(let i = 1; i < 6; i++){

        console.log(`Rodada ${i}`)

        const result = playRound(getPlayerChoice(), getComputerChoice());

        if(result == "player"){
            playerPoints += 1;
            console.log("Ponto do player")
        } else if(result == "machine"){
            machinePoints += 1;
            console.log("Ponto da maquina")
        }else{
            console.log("empate")
        }
    }

    if(playerPoints === machinePoints){
        console.log("Foi um empate") 
    } else if(playerPoints > machinePoints){
        console.log("O jogador ganhou") 
    } else{
        console.log("A maquina ganhou")     
    }
}

game();