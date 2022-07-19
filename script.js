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

function displayResult(result) {
    const display = document.querySelector('#display');
    display.style.opacity = 0;
    setTimeout(function() {
        display.textContent = result;
        display.style.opacity = 1;
    }, 350);
}

function displayGameResult(message) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    let div = document.createElement('div')
    div.setAttribute("id", "messages");
    div.setAttribute("class", "message")
    container.appendChild(div)
    div.textContent= message
};

let winCount = 0, tieCount = 0, loseCount = 0
const ties = document.querySelector('#ties')
const wins = document.querySelector('#wins')
const losses = document.querySelector('#losses')
const btns = document.querySelectorAll('button')
const container = document.querySelector('#container')
let result = ''
const gameResult = document.querySelector('#gameResult')

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        computerSelection = computerPlay()
        result = playRound(btn.id, computerSelection);
        console.log(result)
        if (result === 'win') {
            displayResult(`${btn.id} vs. ${computerSelection}. You win!`)
            winCount++
            wins.textContent = `Wins: ${winCount}`
            if (winCount >= 5) {
                displayGameResult('You win the game! :)');
            };
        }
        else if (result === 'lose') {
            displayResult(`${btn.id} vs. ${computerSelection}. You lose!`)
            loseCount++
            losses.textContent = `Losses: ${loseCount}`
            if (loseCount >= 5) {
                displayGameResult('You lose the game! :(');
            };
        }
        else if (result === 'tie') {
            displayResult(`${btn.id} vs. ${computerSelection}. It's a tie!`)
            tieCount++
            ties.textContent = `Ties: ${tieCount}`
        }
    });
});




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




