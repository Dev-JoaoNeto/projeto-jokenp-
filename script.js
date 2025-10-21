const result = document.querySelector('.result');
const myScore = document.querySelector('#myScore');
const machineScore = document.querySelector('#machineScorePlay');
const machineChoice = document.querySelector('#machineChoice');
const emojiMap = {
      rock: '&#x1F44A;',
      paper: '&#x1F590;',
      scissors: '&#x270c;'
}

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}


let humanScoreNumber = 0;
let machineScoreNumber = 0;
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
    
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = 'Empatou!';
    } else if ((human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) || 
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) || 
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK)) {
        myScore.innerHTML = ++humanScoreNumber;
        result.innerHTML = 'Venceu!';
    } else {
        machineChoice.innerHTML = emojiMap[machine];
        machineScore.innerHTML = ++machineScoreNumber;
        result.innerHTML = 'Você Perdeu para a Alexa!';
    }
}