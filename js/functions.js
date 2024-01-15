let playerWin = 0;
let computerWin = 0;

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printScore() {
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

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId)
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

function displayResult(argComputerMove, argPlayerMove){
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

function randomMove()
{
    return Math.floor(Math.random()* 3 + 1);
}
