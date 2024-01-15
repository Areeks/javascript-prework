function playGame(playerInput){
    clearMessages();
    let computerMove = randomMove();
    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    displayResult(getMoveName(computerMove),getMoveName(playerInput));

    printMessage('Twój ruch to: ' + playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-peper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });




