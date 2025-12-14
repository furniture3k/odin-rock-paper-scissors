function getComputerChoice(num) {
    const choices = {
        0: "rock",
        1: "paper", 
        2: "scissors"
    };

    num = Math.floor(Math.random() * 3);
    return choices[num];
}

function getHumanChoice(hum) {
    let input = prompt("type either Rock, Paper, or Scissors: ").toLowerCase();
    return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log(`You both chose ${humanChoice}, it's a tie!`);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);

    } 
}