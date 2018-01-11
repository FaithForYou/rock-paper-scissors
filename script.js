var playerScore = 0, compScore = 0;
var compChoice;

function computerPlay() {
	move = Math.floor(Math.random() * 3) + 1;
	if(move == 1) return "rock";
	else if(move == 2) return "paper";
	else return "scissors";
}

function playRound(playerSelection, computerSelection) {

	switch(playerSelection) {
		case "rock":
			if(computerSelection == "paper"){
				compScore++;
				return "You lose! Paper beats rock";
			}
			else if(computerSelection == "scissors"){
				playerScore++;
				return "You win! Rock beats scissors";
			}
			else if(computerSelection == "rock")
				return "Draw!";
			break;

		case "paper":
			if(computerSelection == "paper")
				return "Draw!";
			else if(computerSelection == "scissors"){
				compScore++;
				return "You lose! Scissors beat paper";
			}
			else if(computerSelection == "rock"){
				playerScore++;
				return "You win! Paper beats rock";
			}
			break;

		case "scissors":
			if(computerSelection == "paper"){
				playerScore++;
				return "You win! Scissors beat paper";
			}
			else if(computerSelection == "scissors")
				return "Draw!";
			else if(computerSelection == "rock"){
				compScore++;
				return "You lose! Rock beats scissors";
			}
			break;

		default:
			return "Invalid choice by player";
	}

}

const container = document.querySelector("#container");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const score = document.createElement("div");
const winner = document.createElement("div");
const winString = document.createElement("p");
const scoreString = document.createElement("p");

rock.setAttribute("id", "rock");
paper.setAttribute("id", "paper");
scissors.setAttribute("id", "scissors");
score.setAttribute("id", "score");
winner.setAttribute("id", "winner");
winString.setAttribute("style", "white-space: pre;");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
scoreString.textContent = "Player: " + playerScore +
	" | Computer: " + compScore;

score.appendChild(scoreString);
winner.appendChild(winString);

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
container.appendChild(score);
container.appendChild(winner);

rock.addEventListener("click", () => {
	compChoice = computerPlay();
	winString.textContent = "Player choice: rock | " +
		"Computer choice: " + compChoice + "\r\n\r\n" + 
		playRound("rock", compChoice);
	scoreString.textContent = "Player: " + playerScore +
	" | Computer: " + compScore;
	if(playerScore == 5) 
		winString.textContent = "\r\n\r\n" + 
		"Player wins! Refresh page to restart";
	else if(compScore == 5)
		winString.textContent = "\r\n\r\n" + 
		"Computer wins! Refresh page to restart";
});

scissors.addEventListener("click", () => {
	compChoice = computerPlay();
	winString.textContent = "Player choice: scissors | " +
		"Computer choice: " + compChoice + "\r\n\r\n" + 
		playRound("scissors", compChoice);
	scoreString.textContent = "Player: " + playerScore +
	" | Computer: " + compScore;
});

paper.addEventListener("click", () => {
	compChoice = computerPlay();
	winString.textContent = "Player choice: paper | " +
		"Computer choice: " + compChoice + "\r\n\r\n" + 
		playRound("paper", compChoice);
	scoreString.textContent = "Player: " + playerScore +
	" | Computer: " + compScore;
});