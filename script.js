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

function playRound(playerSelection, computerSelection = computerPlay()) {
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
    let winCount = 0, tieCount = 0, loseCount = 0
    for (let i = 0; i < 5; i++) { 
        let playerSelection = prompt(`Round ${i + 1}! Will you choose rock, paper, or scissors?`).toLowerCase()
        while (inputCheck(playerSelection) === false) {
            playerSelection = prompt('That is not a valid input! Try again.').toLowerCase()
        }
        computerSelection = computerPlay()
        if (playRound(playerSelection, computerSelection) === 'win') {
            displayResult(`${playerSelection} vs. ${computerSelection}. You win round ${i}!`)
            winCount++
        }
        else if (playRound(playerSelection, computerSelection) === 'lose') {
            displayResult(`${playerSelection} vs. ${computerSelection}. You lose round ${i}!`)
            loseCount++
        }
        else if (playRound(playerSelection, computerSelection) === 'tie') {
            displayResult(`${playerSelection} vs. ${computerSelection}. Round ${i} is a tie!`)
            tieCount++
        }
    }
    if (winCount > tieCount && winCount > loseCount) {
        displayResult('You win the game! :)')
    }
    else if (loseCount > winCount && loseCount > tieCount) {
        displayResult('You lose the game! :(')
    }
    else {
        displayResult("It's a tie!")
    }  
}

function inputCheck(input) {
    if (input === 'rock') {
        return true
    } 
    else if (input === 'paper') {
        return true
    }
    else if (input === 'scissors') {
        return true
    }
    else {
        return false
    }
}

const btns = document.querySelectorAll('button')

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        displayResult(playRound(btn.id))
    });
});

function displayResult(result) {
    const display = document.querySelector('#display');
    display.textContent = result;
}
