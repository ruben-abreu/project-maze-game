window.onload = function () {
  const playButton = document.getElementById('play-button');
  const game = new MazeGame();
  const timerDisplay = document.getElementById('timer');
  const continueButton = document.getElementById('continue-button');
  const playAgainButton = document.getElementById('play-again-button');
  const timer = new Timer(timerDisplay);

  playButton.addEventListener('click', function () {
    game.play();
    game.map();
    game.move();
    game.mobileMove();
    game.hidePlayButton();
    game.reset();
    timer.startTimer();
  });

  continueButton.addEventListener('click', function () {
    game.nextLevelStart();
    game.map();
    game.reset();
    timer.resumeTimer();
  });

  playAgainButton.addEventListener('click', () => location.reload());

  window.addEventListener('reachedEnd', function () {
    if (timer) {
      timer.pauseTimer();
      const elapsedTime = timer.getElapsedTimeInMinutesAndSeconds();
      console.log(`You reached the end in ${elapsedTime}`);
    }
  });
};
