function getComputerChoice(num) {
    const choices = {
        0: "Rock",
        1: "Paper", 
        2: "Scissors"
    };

    num = Math.floor(Math.random() * 3);
    return choices[num];
}

console.log(getComputerChoice())