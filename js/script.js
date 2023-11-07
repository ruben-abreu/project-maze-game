window.onload = function () {
  const select = document.getElementById('difficulty-dropdown');
  const playButton = document.getElementById('play-button');
  const game = new MazeGame();
  const timerDisplay = document.getElementById('timer');
  let timer;
  const mobileUpButton = document.getElementById('up');
  const mobileDownButton = document.getElementById('down');
  const mobileRightButton = document.getElementById('right');
  const mobileLeftButton = document.getElementById('left');
  let r;
  let c;
  const difficulty = select.value;

  switch (difficulty) {
    case 'easy':
      r = 1;
      c = 3;
      break;
    case 'normal':
      r = 3;
      c = 3;
      break;
    case 'hard':
      r = 16;
      c = 12;
      break;
    default:
      return;
  }

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
    game.map();
    game.move();
    game.hidePlayButton();
    game.reset();
    if (timer) {
      timer.stopTimer();
    }
    updateTimer();
  });

  mobileUpButton.addEventListener('click', function () {
    console.log('Mobile up');
    let newRow = r;
    let newColumn = c;
    newRow = r - 1;

    const newTile = document.querySelector(
      `.row-${newRow}-column-${newColumn}`
    );
    if (newTile && newTile.classList.contains('path')) {
      const harry = document.getElementById('harry');
      newTile.appendChild(harry);
      r = newRow;
      c = newColumn;
    }
  });

  mobileDownButton.addEventListener('click', function () {
    console.log('Mobile down');
    let newRow = r;
    let newColumn = c;
    newRow = r + 1;

    const newTile = document.querySelector(
      `.row-${newRow}-column-${newColumn}`
    );
    if (newTile && newTile.classList.contains('path')) {
      const harry = document.getElementById('harry');
      newTile.appendChild(harry);
      r = newRow;
      c = newColumn;
    }
  });

  mobileRightButton.addEventListener('click', function () {
    console.log('Mobile right');
    let newRow = r;
    let newColumn = c;
    newColumn = c + 1;

    const newTile = document.querySelector(
      `.row-${newRow}-column-${newColumn}`
    );
    if (newTile && newTile.classList.contains('path')) {
      const harry = document.getElementById('harry');
      newTile.appendChild(harry);
      r = newRow;
      c = newColumn;
    }
  });

  mobileLeftButton.addEventListener('click', function () {
    console.log('Mobile left');
    let newRow = r;
    let newColumn = c;
    newColumn = c - 1;

    const newTile = document.querySelector(
      `.row-${newRow}-column-${newColumn}`
    );
    if (newTile && newTile.classList.contains('path')) {
      const harry = document.getElementById('harry');
      newTile.appendChild(harry);
      r = newRow;
      c = newColumn;
    }
  });

  window.addEventListener('reachedEnd', function () {
    if (timer) {
      timer.stopTimer();
      const elapsedTime = timer.getElapsedTimeInMinutesAndSeconds();
      console.log(`You reached the end in ${elapsedTime}`);
    }
  });
};
