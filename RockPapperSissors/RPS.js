let winCount = 0;
let loseCount = 0;

const computerPlay = () => {
    const RPS = ['Rock', 'Paper', 'Scissors']
    let random = Math.floor(Math.random() * RPS.length)
    return RPS[random]
}




const round = (playerSelection, computerSelection ) => {

    if (playerSelection === computerSelection) {
        return "Draw! Play again!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        loseCount++;
        return "You Lost!!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        winCount++;
        return "You Won!!"
    } else if (playerSelection === 'paper' && computerSelection === "scissors") {
        loseCount++;
        return "You Lost!!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        winCount++;
        return "You Won!!"
    } else if (playerSelection === 'scissors' && computerSelection === "rock") {
        loseCount++;
        return "You Lost!!"
    } else if (playerSelection === 'scissors' && computerSelection === "paper") {
        winCount++;
        return "You Won!!"
    }
}
const reset = () => {
    gameCount = 0;
    winCount = 0;
    loseCount = 0;
}

const game = () => {
    for (let i=0; i < 5; i++){
        let playerSelection = prompt('Type Rock, Paper or Scissors').toLocaleLowerCase()
        let computerSelection = computerPlay().toLocaleLowerCase()
        console.log(round(playerSelection, computerSelection))
    }
    console.log(winCount, loseCount)
    reset()
}
game()
