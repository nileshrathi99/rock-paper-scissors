const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"

const WIN_TEXT = "YOU WIN!"
const LOSE_TEXT = "YOU LOSE!"
const DRAW_TEXT = "DRAW!"


let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent =  `Computer: ${computer}`;
    resultText.textContent = getResult()
}))


function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = ROCK;
            break;
        case 2:
            computer = PAPER;
            break;
        case 3:
            computer = SCISSORS;
            break;
    }
}

function getResult(){
    if(player == computer){
        return DRAW_TEXT;
    }
    else if(computer == ROCK){
        return (player == PAPER) ? WIN_TEXT : LOSE_TEXT;
    }
    else if(computer == PAPER){
        console.log(PAPER)

        return (player == SCISSORS) ? WIN_TEXT : LOSE_TEXT;
    }
    else if(computer == SCISSORS){
        return (player == ROCK) ? WIN_TEXT : LOSE_TEXT;
    }
}

