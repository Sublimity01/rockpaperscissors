function game() {
    let compWins = 0;
    let playWins = 0;
    let ties = 0;
    for (let i = 0; i < 5; i++) {
//initialize variables for computer selection and player selection
let playerSelection;
let computerSelection;
//receive player input as player selection
playerSelection = prompt("Choose your fighter! Rock, Paper, or Scissors?");
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
    return " Your selection is not a viable fighter. Please try again. There are... there are only three options I don't know how you messed up this badly.";
}
else if (result === "player") {
    playWins = ++playWins;
    return `You Win! ${capFirst(playerChoice)} beats ${capFirst(computerChoice)}!`;
}
else if (result === "comp") {
    compWins = ++compWins;
    return `You chose... poorly. ${capFirst(computerChoice)} beats ${capFirst(playerChoice)}.`;
}
else if (result === "tie") {
    ties = ++ties;
    return `You both selected ${capFirst(playerChoice)}. There is no victory here, nor defeat, just a gray void of empty meaninglessness.`;
}
else if (result === "explode") {
    return `Oh dear. The computer has used its incredible processing power to overwrite the rules and select Dynamite, which has unfortunately also caused it to explode. We'll need to work on that.`;
}
else {
    return `We're not sure what happened here. Please hold.`
}
};
console.log(playRound(playerSelection, computerSelection));
console.log(playWins + " " + compWins + " " + ties);

    }
//output final results
return `Your victories: ${playWins}
Computer victories: ${compWins}
Boring ties: ${ties}`;
}