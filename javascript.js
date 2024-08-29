
let humanScore;
let computerScore;

let getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * 100)+1;

    if(randNum <= 33){
        return "rock";
    }
    else if(randNum > 33 && randNum <= 66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

let getHumanChoice = () => {
    let hChoice = prompt("Your Turn! Rock, Paper or Scissors?");
    return hChoice;
}


function playRound(humanChoice, computerChoice){
    
    if(humanChoice=="rock"){
        if(computerChoice=="rock"){
            console.log("Ooh! It's a draw.");
            return;
        }
        else if(computerChoice=="paper"){
            console.log("You lose! Paper beats rock.");
            computerScore += 1;
            return;
        }
        else if(computerChoice=="scissors"){
            console.log("Dang! It's your win this time.");
            humanScore += 1;
            return;
        }
    }

    if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            console.log("Dang! It's your win this time.");
            humanScore += 1;
            return;
        }
        else if(computerChoice=="paper"){
            console.log("Ooh! It's a draw.");
            return;
        }
        else if(computerChoice=="scissors"){
            console.log("You lose! Scissors beats paper");
            computerScore += 1;
            return;
        }
    }

    if(humanChoice=="scissors"){
        if(computerChoice=="rock"){
            console.log("You lose! rock beats scissors.");
            return;
        }
        else if(computerChoice=="paper"){
            console.log("Dang! It's your win this time.");
            computerScore += 1;
            return;
        }
        else if(computerChoice=="scissors"){
            console.log("Ooh! It's a draw.");
            humanScore += 1;
            return;
        }
    }
}

let x = 1;


function fiveRounds(){

    if(x===6){
        return;
    }
    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();

    if(humanSelection != "rock" && humanSelection != "paper" && humanSelection != "scissors"){
        console.log("Bro! Invalid Input.");
        fiveRounds();
    }
    if(x<6){
        playRound(humanSelection, computerSelection);
        console.log(`Your Score = ${humanScore} | Computer's Score = ${computerScore}`);
        x++;
        fiveRounds();
        
    }
}



function playGame(){

    humanScore = 0;
    computerScore = 0;
     
    x = 1;

    fiveRounds();

    if(humanScore > computerScore){
        console.log("Congrats! You won.");
    }
    else{
        console.log("You lose! hah!")
    }
}

playGame();