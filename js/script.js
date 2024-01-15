let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let computerMove = 'kamień';
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2') {
    playerMove = 'papier';
}
else if(playerInput == '3') {
    playerMove = 'nożyce';
}

if(computerMove == 'kamień' && playerMove == 'papier')
    printMessage('Ty wygrywasz!');
else if(computerMove == 'papier' && playerMove == 'nożyce')
    printMessage('Ty wygrywasz!');
else if(computerMove == 'nożyce' && playerMove == 'kamień')
    printMessage('Ty wygrywasz!');
else if(computerMove == playerMove)
    printMessage('Remis!');
else if(playerMove == 'nieznany ruch')
    printMessage('Nie wykonałeś ruchu!');
else
    printMessage('Przegrywasz!');

printMessage('Twój ruch to: ' + playerMove);