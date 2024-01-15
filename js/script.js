let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let computerMove = randomMove();
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

displayResult(getMoveName(computerMove),getMoveName(playerInput));

printMessage('Twój ruch to: ' + playerMove);
