//Variables for scoreboard
let userScore = 0;
let computerScore = 0;
//set the document.getEl.. to a variable to save time and make things look better
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const socreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const fox_div = document.getElementById("fox");
const falco_div = document.getElementById("falco");
const puff_div = document.getElementById("puff");

//generates a random computer choice from the array
function getComputerChoice(){
    const choices = ['fox', 'falco', 'puff'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//function that makes the first letter of the id to be a capital letter
function convertToWord(letter) {
    if (letter === "fox") return "Fox";
    if (letter === "falco") return "Falco";
    if (letter === "puff") return "Puff";
}

function win(userChoice, computerChoice){
    userScore++; //adds to the users score
    userScore_span.innerHTML = userScore; //updates the users scoreboard in the index.html
    computerScore_span.innerHTML = computerScore; //updates the computers scoreboard in the index.html
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!`; //prints the win statement to the results <p> in the index.html
    document.getElementById(userChoice).classList.add('green-glow'); //updates the css when a winner is chosen
    setTimeout( () => document.getElementById(userChoice).classList.remove('green-glow'), 500); //reverts back to the old css
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost...`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout( () => document.getElementById(userChoice).classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. You draw.`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout( () => document.getElementById(userChoice).classList.remove('gray-glow'), 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        //user wins
        case "falcofox":
        case "foxpuff":
        case "pufffalco":
            win(userChoice, computerChoice);
            break;
        //computer wins
        case "foxfalco":
        case "pufffox":
        case "falcopuff":
            lose(userChoice, computerChoice);
            break;
        //ties
        case "foxfox":
        case "falcofalco":
        case "puffpuff":
            draw(userChoice, computerChoice);
            break;
    }
}

//calls thhe game funciton when one of the 3 divs is clicked on
function main(){
    fox_div.addEventListener('click', () => game("fox"));
    falco_div.addEventListener('click', () => game("falco"));
    puff_div.addEventListener('click', () => game("puff"));
}
main();