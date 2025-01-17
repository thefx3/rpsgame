let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    choice = Math.random()*3

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
    choice = prompt("Rock ? Paper ? Scissors ?");
    return choice; 
}


function playRound(humanChoice,computerChoice){

    let humanPoint = 0;
    let computerPoint = 0;
    // humanChoice will ask the human to choose
        //Human choice can write anything - but only valid answers and case-insensitive
        //Not take care of lower/uppercase
    //computerChoice will generate a random choice
    console.log(humanSelection + " is human choice");
    console.log(computerSelection + " is computer choice");

    if (computerChoice==humanChoice){
        console.log("It's a draw!");
    }
    else if ((humanChoice=="Paper" && computerChoice=="Rock")||
       (humanChoice=="Rock" && computerChoice=="Scissors")||
       (humanChoice=="Scissors" && computerChoice=="Paper")){
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanPoint = humanPoint +1;
    }
     else if ((humanChoice=="Rock" && computerChoice=="Paper")||
       (humanChoice=="Scissors" && computerChoice=="Rock")||
       (humanChoice=="Paper" && computerChoice=="Scissors")){
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerPoint = computerPoint + 1;
    } 
    console.log("Human : " + humanPoint + " | " + computerPoint + " Computer");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);