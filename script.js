function getComputerChoice(num) {
    const choices = {
        0: "Rock",
        1: "Paper", 
        2: "Scissors"
    };

    num = Math.floor(Math.random() * 3);
    return choices[num];
}

function getHumanChoice(hum) {
    let input = prompt("type either Rock, Paper, or Scissors: ");
    return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
}