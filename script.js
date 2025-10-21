const result = document.querySelector('.result');
const myScore = document.querySelector('#myScore');
const machineScore = document.querySelector('#machineScorePlay');

let humanScoreNumber = 0;
let machineScoreNumber = 0;
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
    
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = 'Empatou!';
    } else if (human === 'rock' && machine === 'scissors' || human === 'scissors' && machine === 'paper' || human === 'paper' && machine === 'rock') {
        myScore.innerHTML = ++humanScoreNumber;
        result.innerHTML = 'Venceu!';
    } else {
        machineScore.innerHTML = ++machineScoreNumber;
        result.innerHTML = 'Você Perdeu para a Alexa!';
    }
}