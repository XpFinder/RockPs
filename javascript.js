
let humanScore = 0;
let computerScore = 0;

const btn1 = document.querySelector(".rock");
const btn2 = document.querySelector(".paper");
const btn3 = document.querySelector(".scissor");

const result = document.querySelector(".result");
const fresult = document.querySelector(".fresult");
const pScore = document.querySelector(".playerScore");
const cScore = document.querySelector(".computerScore");

let humanChoice = '';
let computerChoice = '';

function checkGame(){
    if(humanScore+computerScore===5){
        if(humanScore>computerScore){
            fresult.textContent = "You Win!!";
        }
        else{
            fresult.textContent = "You Lose!!";
        }
        humanScore = 0;
        computerScore = 0;
    }
}

/////////////////////////////////////////////////////////////////////

let getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * 100)+1;

    if(randNum <= 33){
        computerChoice = "rock";
    }
    else if(randNum > 33 && randNum <= 66){
        computerChoice ="paper";
    }
    else{
        computerChoice = "scissors";
    }
}

function getHumanChoice(choice){
    humanChoice = choice;
}

//////////////////////////////////////////////////////////////////////

function playRound(humanChoice, computerChoice){
    
    if(humanChoice=="rock"){
        if(computerChoice=="rock"){
            result.textContent = "Ooh! It's a draw.";
        }
        else if(computerChoice=="paper"){
            result.textContent ="You lose! Paper beats rock.";
            computerScore += 1;
        }
        else if(computerChoice=="scissors"){
            result.textContent ="Dang! It's your win this time.";
            humanScore += 1;
        }
    }

    else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            result.textContent ="Dang! It's your win this time.";
            humanScore += 1;
        }
        else if(computerChoice=="paper"){
            result.textContent ="Ooh! It's a draw.";
        }
        else if(computerChoice=="scissors"){
            result.textContent ="You lose! Scissors beats paper";
            computerScore += 1;
        }
    }

    else if(humanChoice=="scissors"){
        if(computerChoice=="rock"){
            result.textContent ="You lose! rock beats scissors.";
            computerScore += 1;
        }
        else if(computerChoice=="paper"){
            result.textContent ="Dang! It's your win this time.";
            humanScore += 1;
        }
        else if(computerChoice=="scissors"){
            result.textContent ="Ooh! It's a draw.";
        }
    }
}

///////////////////////////////////////////////////////////////////////

btn1.addEventListener("click" , () =>{
    getHumanChoice('rock');
    getComputerChoice();
    playRound(humanChoice, computerChoice);
    pScore.textContent = `Your Score:${humanScore}`;
    cScore.textContent = `Computer's Score:${computerScore}`;
    checkGame();
})

btn2.addEventListener("click" , () =>{
    getHumanChoice('paper');
    getComputerChoice();
    playRound(humanChoice, computerChoice);
    pScore.textContent = `Your Score:${humanScore}`;
    cScore.textContent = `Computer's Score:${computerScore}`;
    checkGame();
})

btn3.addEventListener("click" , () =>{
    getHumanChoice('scissors');
    getComputerChoice();
    playRound(humanChoice, computerChoice);
    pScore.textContent = `Your Score:${humanScore}`;
    cScore.textContent = `Computer's Score:${computerScore}`;
    checkGame();
})

////////////////////////////////////////////////////////////////////////
