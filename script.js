function computerPlay() {
    const random = Math.floor(Math.random() * 100)
    if (random < 33) {
        return 'rock';
    }
    else if (random >=33 && random <= 66) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "Rock vs. Rock: It's a tie!"
        }
        else if (computerSelection === 'paper') {
            return "Rock vs. Paper: You lose!"
        }
        else {
            return "Rock vs. Scissors: You win!"
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return "Paper vs. Rock: You win!"
        }
        else if (computerSelection === 'paper') {
            return "Paper vs. Paper: It's a tie!"
        }
        else {
            return "Paper vs. Scissors: You lose!"
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "Scissors vs. Rock: You lose!"
        }
        else if (computerSelection === 'paper') {
            return "Scissors vs. Paper: You win!"
        }
        else {
            return "Scissors vs. Scissors: It's a tie!"
        }
    }
    else {
        return "That is not a valid choice!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt(`Round ${i}! Will you choose rock, paper, or scissors?`)
        computerSelection = computerPlay()
    }
}