window.onload = function () {
  const select = document.getElementById('difficulty-dropdown');
  const playButton = document.getElementById('play-button');
  const game = new MazeGame();
  const timerDisplay = document.getElementById('timer');
  let timer;

  function updateTimer() {
    const selectValue = select.value;
    if (timer) {
      timer.stopTimer();
    }
    timer = new Timer(selectValue, timerDisplay);
    timer.startTimer();
  }

  select.addEventListener('change', function () {
    game.levelSelection();
    updateTimer();
  });

  playButton.addEventListener('click', function () {
    game.play();
    game.hidePlayButton();
    game.tryAgain();
    if (timer) {
      timer.stopTimer();
    }
    updateTimer();
    game.gameplayLoop();
  });
};
