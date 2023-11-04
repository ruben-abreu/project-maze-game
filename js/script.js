window.onload = function () {
  const select = document.getElementById('difficulty-dropdown');
  const selectValue = select.value;
  const playButton = document.getElementById('play-button');
  const game = new MazeGame();
  const timerDisplay = document.getElementById('timer');
  const timer = new Timer(selectValue, timerDisplay);

  select.addEventListener('change', function () {
    game.levelSelection();

    if (timer) {
      timer.stopTimer();
    }
    timer.startTimer();
  });

  playButton.addEventListener('click', function () {
    game.play();
    game.hidePlayButton();
    game.tryAgain();

    if (timer) {
      timer.stopTimer();
    }
    timer.startTimer();
  });
};
