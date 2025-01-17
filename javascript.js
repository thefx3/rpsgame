let humanScore = 0;
let computerScore = 0;
let counting = 0;

function getComputerChoice(){
    let choice = Math.random()*3
    if (choice > 0 && choice <=1){
        return "Rock";
    }
    else if (choice >1 && choice <=2){
        return "Paper";
    }
    else if (choice >2 && choice <=3){
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock ? Paper ? Scissors ?");
    return choice;
}

function playRound(humanChoice,computerChoice){

    console.log(humanChoice + " is human choice");
    console.log(computerChoice + " is computer choice");

    if (computerChoice==humanChoice){
        console.log("It's a draw!");
    }
    else if ((humanChoice=="Paper" && computerChoice=="Rock")||
       (humanChoice=="Rock" && computerChoice=="Scissors")||
       (humanChoice=="Scissors" && computerChoice=="Paper")){
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore = humanScore +1;
    }
     else if ((humanChoice=="Rock" && computerChoice=="Paper")||
       (humanChoice=="Scissors" && computerChoice=="Rock")||
       (humanChoice=="Paper" && computerChoice=="Scissors")){
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore = computerScore + 1;
    } 
    console.log("Human : " + humanScore + " | " + computerScore + " Computer");
    
    counting = counting +1;
    console.log(counting);
    return counting;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame(){
    console.log(counting);
    if (counting>5){
        counting = 0;
    }
    while (counting<5){
        playRound(getHumanChoice(),getComputerChoice());
        console.log("Human : " + humanScore + " | " + computerScore + " Computer");
    }
}