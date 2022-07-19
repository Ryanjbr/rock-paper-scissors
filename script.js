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
    container.style.opacity = 0;
    container.removeChild(container.firstChild)
};
let div = document.createElement('div')
div.style.opacity = 0;
setTimeout(function() {
    div.setAttribute("id", "messages");
    div.setAttribute("class", "message")
    container.appendChild(div)
    div.textContent= message
    div.style.opacity = 1;
    container.style.opacity = 1
}, 500);
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
            let playerCapital = capitalizeFirstLetter(btn.id);
            let computerCapital = capitalizeFirstLetter(computerSelection);
            displayResult(`${playerCapital} vs. ${computerCapital}. You win!`)
            winCount++
            wins.style.opacity = 0;
            setTimeout(function () {
                wins.textContent = `Wins: ${winCount}`
                wins.style.opacity = 1
            }, 350);
            if (winCount >= 5) {
                displayGameResult('You win the game! :)');
            };
        }
        else if (result === 'lose') {
            let playerCapital = capitalizeFirstLetter(btn.id);
            let computerCapital = capitalizeFirstLetter(computerSelection);
            displayResult(`${playerCapital} vs. ${computerCapital}. You lose!`)
            loseCount++
            losses.style.opacity = 0;
            setTimeout(function () {
                losses.textContent = `Losses: ${loseCount}`
                losses.style.opacity = 1
            }, 350);
            if (loseCount >= 5) {
                displayGameResult('You lose the game! :(');
            };
        }
        else if (result === 'tie') {
            displayResult(`${playerCapital} vs. ${computerCapital}. It's a tie!`)
            tieCount++
            ties.style.opacity = 0;
            setTimeout(function () {
                ties.textContent = `Ties: ${tieCount}`
                ties.style.opacity = 1
            }, 350);
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




