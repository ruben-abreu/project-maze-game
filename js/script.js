window.onload = function () {
  const playButton = document.getElementById('play-button');
  const game = new MazeGame();
  const timerDisplay = document.getElementById('timer');
  const continueButton = document.getElementById('continue-button');
  const playAgainButton = document.getElementById('play-again-button');
  const timer = new Timer(timerDisplay);
  let totalElapsedTime = 0;
  const elapsedTimeMinutesElement =
    document.getElementById('elapsed-time-value');
  const elapsedTimeSecondsElement = document.getElementById(
    'elapsed-seconds-value'
  );
  const totalElapsedMinutesElement = document.getElementById(
    'total-elapsed-minutes-value'
  );
  const totalElapsedSecondsElement = document.getElementById(
    'total-elapsed-seconds-value'
  );
  const elapsedTimeNormalMinutesElement = document.getElementById(
    'elapsed-time-normal-value'
  );
  const elapsedTimeNormalSecondsElement = document.getElementById(
    'elapsed-seconds-normal-value'
  );
  const logRecordButton = document.getElementById('log-my-record');
  const logRecordButtonArea = document.getElementById(
    'log-my-record-button-area'
  );
  let totalTimeSum;
  const leaderboard = new Leaderboard();
  const levels = new Levels().levels;
  const mobileUpButton = document.getElementById('up');
  const mobileDownButton = document.getElementById('down');
  const mobileRightButton = document.getElementById('right');
  const mobileLeftButton = document.getElementById('left');
  let gameHasStarted = false;
  let r;
  let c;
  const mathGame = document.getElementById('math');

  let audio = document.getElementById('music');
  audio.addEventListener('ended', function () {
    audio.src = 'music/Hedwigs Theme.mp3';
    audio.play();
  });

  function move() {
    if (game.easyLevelStart === true) {
      r = 1;
      c = 3;
    } else if (game.normalLevelStart === true) {
      r = 3;
      c = 3;
    } else if (game.hardLevelStart === true) {
      r = 16;
      c = 12;
    }

    const currentTile = document.querySelector(`.row-${r}-column-${c}`);
    if (currentTile && currentTile.classList.contains('path')) {
      const harry = document.getElementById('harry');
      currentTile.appendChild(harry);
    }

    const handleKeyDown = event => {
      event.preventDefault();
      let newRow = r;
      let newColumn = c;

      switch (event.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          newRow = r - 1;
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          newRow = r + 1;
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          newColumn = c + 1;
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          newColumn = c - 1;
          break;
      }

      const newTile = document.querySelector(
        `.row-${newRow}-column-${newColumn}`
      );

      if (newTile && newTile.classList.contains('end')) {
        if (game.easyLevelStart === true) {
          newRow = levels[1].player.y;
          newColumn = levels[1].player.x;
        } else if (game.normalLevelStart === true) {
          newRow = levels[2].player.y;
          newColumn = levels[2].player.x;
        } else if (game.hardLevelStart === true) {
          window.removeEventListener('keydown', handleKeyDown);
        }

        game.nextLevelScreen();

        // Pausing Timer
        const reachedEndEvent = new Event('reachedEnd');
        window.dispatchEvent(reachedEndEvent);
      } else if (newTile && newTile.classList.contains('path')) {
        const harry = document.getElementById('harry');
        const potion = newTile.querySelector('#potion');
        const poison = newTile.querySelector('#poison');
        if (potion) {
          timer.addTime();
          newTile.removeChild(potion);
        }
        if (poison) {
          timer.removeTime();
          newTile.removeChild(poison);
        }
        newTile.appendChild(harry);
        r = newRow;
        c = newColumn;
      }
      gameHasStarted = true;
    };

    window.removeEventListener('keydown', handleKeyDown);

    if (gameHasStarted === false) {
      window.addEventListener('keydown', handleKeyDown);
    }
  }

  function handleMobileButtonClick(direction) {
    let newRow = r;
    let newColumn = c;

    switch (direction) {
      case 'up':
        newRow = r - 1;
        break;
      case 'down':
        newRow = r + 1;
        break;
      case 'left':
        newColumn = c - 1;
        break;
      case 'right':
        newColumn = c + 1;
        break;
      default:
        return;
    }

    const newTile = document.querySelector(
      `.row-${newRow}-column-${newColumn}`
    );

    if (newTile && newTile.classList.contains('path')) {
      const harry = document.getElementById('harry');
      const potion = newTile.querySelector('#potion');
      const poison = newTile.querySelector('#poison');

      if (potion) {
        newTile.removeChild(potion);
      }
      if (poison) {
        newTile.removeChild(poison);
      }

      newTile.appendChild(harry);
      r = newRow;
      c = newColumn;

      if (newTile.classList.contains('end')) {
        if (game.easyLevelStart === true) {
          newRow = levels[1].player.y;
          newColumn = levels[1].player.x;
        } else if (game.normalLevelStart === true) {
          newRow = levels[2].player.y;
          newColumn = levels[2].player.x;
        } else if (game.hardLevelStart === true) {
          removeEventListeners();
          game.nextLevelScreen();
        }
      }
    }
  }

  function removeEventListeners() {
    mobileUpButton.removeEventListener('click', handleMobileButtonClick);
    mobileDownButton.removeEventListener('click', handleMobileButtonClick);
    mobileLeftButton.removeEventListener('click', handleMobileButtonClick);
    mobileRightButton.removeEventListener('click', handleMobileButtonClick);
  }

  mobileUpButton.addEventListener('click', () => handleMobileButtonClick('up'));
  mobileDownButton.addEventListener('click', () =>
    handleMobileButtonClick('down')
  );
  mobileLeftButton.addEventListener('click', () =>
    handleMobileButtonClick('left')
  );
  mobileRightButton.addEventListener('click', () =>
    handleMobileButtonClick('right')
  );

  playButton.addEventListener('click', function () {
    game.play();
    game.map();
    move();
    game.hidePlayButton();
    game.reset();
    timer.startTimer();
  });

  continueButton.addEventListener('click', function () {
    game.nextLevelStart();
    move();
    timer.resumeTimer();
  });

  playAgainButton.addEventListener('click', () => location.reload());

  function formatElapsedTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minute(s) and ${remainingSeconds} seconds`;
  }

  logRecordButton.addEventListener('click', function () {
    const playerName = prompt('Enter your name:');
    totalTimeSum = totalElapsedTime;
    const totalRecords = JSON.parse(localStorage.getItem('totalRecords')) || [];
    totalRecords.push({ name: playerName, time: totalTimeSum });
    totalRecords.sort((a, b) => a.time - b.time);
    const top10Records = totalRecords.slice(0, 10);
    localStorage.setItem('totalRecords', JSON.stringify(top10Records));
    leaderboard.updateLeaderboard();
    logRecordButton.Clicked = true;
    logRecordButton.disabled = true;
    logRecordButtonArea.style.display = 'none';
  });

  window.addEventListener('reachedEnd', function () {
    if (timer) {
      timer.pauseTimer();
      const elapsedTime = timer.getElapsedTimeInMinutesAndSeconds();
      const [minutes, seconds] = elapsedTime.split(':').map(Number);
      elapsedTimeMinutesElement.textContent = minutes;
      elapsedTimeSecondsElement.textContent = seconds;
      totalElapsedTime += minutes * 60 + seconds;
      totalElapsedMinutesElement.textContent = Math.floor(
        totalElapsedTime / 60
      );
      totalElapsedSecondsElement.textContent = totalElapsedTime % 60;
      elapsedTimeNormalMinutesElement.textContent = minutes;
      elapsedTimeNormalSecondsElement.textContent = seconds;
    }
  });
};
