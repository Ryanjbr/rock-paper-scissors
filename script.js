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
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        playerSelection = prompt('That is not a valid choice! Try again.')
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "tie"
        }
        else if (computerSelection === 'paper') {
            return "lose"
        }
        else {
            return "win"
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return "win"
        }
        else if (computerSelection === 'paper') {
            return "tie"
        }
        else {
            return "lose"
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "lose"
        }
        else if (computerSelection === 'paper') {
            return "win"
        }
        else {
            return "tie"
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