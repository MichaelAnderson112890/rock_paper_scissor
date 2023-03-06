

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors";
    }
}

function playRound(playerChoice, computerChoice) {

    let result = "";
    
    if (playerChoice === computerChoice) {
        result = ("Tie!")
    } else {

        if (playerChoice === "rock") {
            if (computerChoice === "paper"){
                result = ("You Lose, paper beats rock");
            } else {
                result = ("You win!, rock beats scissors");
            }
        }

        if (playerChoice === "paper") {
            if (computerChoice === "scissors"){
                result = ("You Lose, scissors beats paper");
            } else {
                result = ("You win!, paper beats rock");
            }
        }

        if (playerChoice === "scissors") {
            if (computerChoice === "rock"){
                result = ("You Lose, rock beats scissors");
            } else {
                result = ("You win!, scissors beats paper");
            }
        }
    }

    return result;

}

function game() {

    let rounds = prompt("How many games would you like to play?");
    for (let i = 0; i < rounds; i++){
        let playerChoice = prompt("What is your choice:\nRock?\nPaper?\nScissors?");
        let computerChoice = getComputerChoice();
        
        playerChoice = playerChoice.toLowerCase();
        console.log("Player Choice: " + playerChoice);
        console.log("Computer Choice: " + computerChoice);
        
        console.log(playRound(playerChoice, computerChoice) + "\n");
    }
}

game();