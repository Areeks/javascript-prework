const playGame = function (playerInput){
    clearMessages();
    let computerMove = randomMove();

    let playerMove = getMoveName(playerInput);

    displayResult(getMoveName(computerMove),getMoveName(playerInput));
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




