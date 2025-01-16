function getComputerChoice(){
    //Return rock - paper - scissor randomly
    choice = Math.random()*3
    // console.log(choice); // Give a number between 1 and 3. 

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
    console.log(choice);
    return choice; 
}
