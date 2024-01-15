let playerWin = 0;
let computerWin = 0;

const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const printScore = function() {
    let resultDiv = document.getElementById('result');

    // Sprawdź, czy div już istnieje
    if (resultDiv.firstChild) {
        // Aktualizuj istniejący div
        resultDiv.firstChild.textContent = playerWin + " - " + computerWin;
    } else {
        // Stwórz nowy div, jeśli nie istnieje
        let div = document.createElement('div');
        div.textContent = playerWin + " - " + computerWin;
        resultDiv.appendChild(div);
    }
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

const getMoveName = function(argMoveId)
{
    if(argMoveId == 1)
        return 'kamień';
    else if(argMoveId == 2)
        return 'papier';
    else if(argMoveId == 3)
        return 'nożyce';

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

const displayResult = function(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier')
    {
        printMessage('Ty wygrywasz!');
        playerWin++;
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce')
    {
        printMessage('Ty wygrywasz!');
        playerWin++
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    {
        printMessage('Ty wygrywasz!');
        playerWin++;
    }
    else if(argComputerMove == argPlayerMove)
        printMessage('Remis!');
    else if(argPlayerMove == 'nieznany ruch')
        printMessage('Nie wykonałeś ruchu!');
    else
    {
        printMessage('Przegrywasz!');
        computerWin++;
    }
    printScore();
}

const randomMove = function()
{
    return Math.floor(Math.random()* 3 + 1);
}
