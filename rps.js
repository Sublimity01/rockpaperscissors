

    let compWins = 0;
    let playWins = 0;
    let ties = 0;
    let outcome = "";

    const results = document.querySelector('#results');
    const outcomes = document.createElement('p');
    const playerResults = document.createElement('p');
    playerResults.style.cssText = 'color: green;';
    const compResults = document.createElement('p');
    compResults.style.cssText = 'color: red;';
    const tieResults = document.createElement('p');
    results.appendChild(outcomes);
    results.appendChild(playerResults);
    results.appendChild(compResults);
    results.appendChild(tieResults);


 function winCondition () {
     };

//receive player input as selection and initialize game
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            game(button.id);
        });
    });

    /*
    const rockbtn = document.querySelector('#rockbtn');
    rockbtn.addEventListener('click', () => {
      game("rock");
    });
    const paperbtn = document.querySelector('#paperbtn');
    paperbtn.addEventListener('click', () => {
        game("paper");
    });
    const scissorsbtn = document.querySelector('#scissorsbtn');
    scissorsbtn.addEventListener('click', () => {
        game("scissors");
    });
    */
    
function game(playerSelect) {

    
//    for (let i = 0; i < 5; i++) {
//initialize variables for computer selection and player selection
let playerSelection = playerSelect;
let computerSelection;
//receive player input as player selection
//playerSelection = prompt("Choose your fighter! Rock, Paper, or Scissors?");



//transform case of player selection to lower case -- this ensures case insensitivity of player input
playerSelection = playerSelection.toLowerCase();
console.log(`You chose ${playerSelection}`)
//randomly assign a value of "Rock" "Paper" or "Scissors" to computer selection
let num = Math.floor(Math.random() * 3);
if (num === 0) {
    computerSelection = "rock";
}
else if (num === 1) {
    computerSelection = "paper";
}
else if (num === 2) {
    computerSelection = "scissors";
}
else {
    computerSelection = "dynamite";
}
console.log(`The computer chose ${computerSelection}`);
//initialize function for single round
function playRound(playerChoice, computerChoice) {
//compare player value to computer value to determine winner or tie
let result;
if (playerChoice === "rock") {
    if (computerChoice === "rock") {
        result = "tie";
    }
    else if (computerChoice === "paper") {
        result = "comp";
    }
    else if (computerChoice === "scissors") {
        result = "player";
    }
    else {
        result = "explode";
    }
}
else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
        result = "player";
    }
    else if (computerChoice === "paper") {
        result = "tie";
    }
    else if (computerChoice === "scissors") {
        result = "comp";
    }
    else {
        result = "explode";
    }
}
else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
        result = "comp";
    }
    else if (computerChoice === "paper") {
        result = "player";
    }
    else if (computerChoice === "scissors") {
        result = "tie";
    }
    else {
        result = "explode";
    }
}
else {
    result = "invalid";
}
console.log(`The result is ${result}`);
//transform fighters into initial capital letter strings
function capFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

//output result of comparison as string
if (result === "invalid") {
    outcome = "Your selection is not a viable fighter. Please try again. There are... there are only three options I don't know how you messed up this badly.";
}
else if (result === "player") {
    playWins = ++playWins;
    outcome = `You Win! ${capFirst(playerChoice)} beats ${capFirst(computerChoice)}!`;
}
else if (result === "comp") {
    compWins = ++compWins;
    outcome = `You chose... poorly. ${capFirst(computerChoice)} beats ${capFirst(playerChoice)}.`;
}
else if (result === "tie") {
    ties = ++ties;
    outcome = `You both selected ${capFirst(playerChoice)}. There is no victory here, nor defeat, just a gray void of empty meaninglessness.`;
}
else if (result === "explode") {
    outcome = `Oh dear. The computer has used its incredible processing power to overwrite the rules and select Dynamite, which has unfortunately also caused it to explode. We'll need to work on that.`;
}
else {
    outcome = `We're not sure what happened here. Please hold.`
}
};
console.log(playRound(playerSelection, computerSelection));
console.log(playWins + " " + compWins + " " + ties);

 //   }
/*output final results
return `Your victories: ${playWins}
Computer victories: ${compWins}
Boring ties: ${ties}`;*/

if (compWins == 5) {
    alert(`You have failed. The computer has won ${compWins} victories to your paltry ${playWins}. Refresh to try again.`);
}
else if (playWins == 5) {
    alert(`Congratulations on your triumph! You have emerged victorious ${playWins} times while suffering only ${compWins} defeats. We'll ignore the ${ties} ties. 
    Refresh to press your luck and try again.`);
};
if (playWins == 5 || compWins == 5) {
    compWins = 0;
    playWins = 0;
    ties = 0;
};

outcomes.textContent = outcome;
playerResults.textContent = 'Your victories: ' + playWins;
compResults.textContent = `Computer victories: ${compWins}`;
tieResults.textContent = `Boring ties: ${ties}`;


}