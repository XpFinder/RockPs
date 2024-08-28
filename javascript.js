
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

