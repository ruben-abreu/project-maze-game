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
    console.log(`r: ${r}, c: ${c}`);

    const handleKeyDown = event => {
      console.log(event.key);
      event.preventDefault();
      let newRow = r;
      let newColumn = c;

      console.log(`Before click: newRow: ${newRow} newColumn: ${newColumn}`);
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
        console.log(`You won!`);

        if (game.easyLevelStart === true) {
          newRow = levels[1].player.y;
          newColumn = levels[1].player.x;
          console.log(
            `End of level: newRow: ${newRow} newColumn: ${newColumn}`
          );
        } else if (game.normalLevelStart === true) {
          newRow = levels[2].player.y;
          newColumn = levels[2].player.x;
          console.log(
            `End of level: newRow: ${newRow} newColumn: ${newColumn}`
          );
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
          newTile.removeChild(potion);
        }
        if (poison) {
          newTile.removeChild(poison);
        }
        newTile.appendChild(harry);
        r = newRow;
        c = newColumn;
      }
      gameHasStarted = true;
      console.log(`After click: newRow: ${newRow} newColumn: ${newColumn}`);
    };

    // Remove the existing event listener first (if any)
    window.removeEventListener('keydown', handleKeyDown);

    // Add the new event listener
    if (gameHasStarted === false) {
      window.addEventListener('keydown', handleKeyDown);
    }
  }

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

    if (newTile && newTile.classList.contains('end')) {
      console.log(`You won!`);

      if (game.easyLevelStart === true) {
        newRow = levels[1].player.y;
        newColumn = levels[1].player.x;
        console.log(`End of level: newRow: ${newRow} newColumn: ${newColumn}`);
      } else if (game.normalLevelStart === true) {
        newRow = levels[2].player.y;
        newColumn = levels[2].player.x;
        console.log(`End of level: newRow: ${newRow} newColumn: ${newColumn}`);
      }

      game.nextLevelScreen();

      // Pausing Timer
      const reachedEndEvent = new Event('reachedEnd');
      window.dispatchEvent(reachedEndEvent);
    } else if (newTile && newTile.classList.contains('path')) {
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

    if (newTile && newTile.classList.contains('end')) {
      console.log(`You won!`);

      if (game.easyLevelStart === true) {
        newRow = levels[1].player.y;
        newColumn = levels[1].player.x;
        console.log(`End of level: newRow: ${newRow} newColumn: ${newColumn}`);
      } else if (game.normalLevelStart === true) {
        newRow = levels[2].player.y;
        newColumn = levels[2].player.x;
        console.log(`End of level: newRow: ${newRow} newColumn: ${newColumn}`);
      }

      game.nextLevelScreen();

      // Pausing Timer
      const reachedEndEvent = new Event('reachedEnd');
      window.dispatchEvent(reachedEndEvent);
    } else if (newTile && newTile.classList.contains('path')) {
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

    if (newTile && newTile.classList.contains('end')) {
      console.log(`You won!`);

      if (game.easyLevelStart === true) {
        newRow = levels[1].player.y;
        newColumn = levels[1].player.x;
        console.log(`End of level: newRow: ${newRow} newColumn: ${newColumn}`);
      } else if (game.normalLevelStart === true) {
        newRow = levels[2].player.y;
        newColumn = levels[2].player.x;
        console.log(`End of level: newRow: ${newRow} newColumn: ${newColumn}`);
      }

      game.nextLevelScreen();

      // Pausing Timer
      const reachedEndEvent = new Event('reachedEnd');
      window.dispatchEvent(reachedEndEvent);
    } else if (newTile && newTile.classList.contains('path')) {
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

    if (newTile && newTile.classList.contains('end')) {
      console.log(`You won!`);

      if (game.easyLevelStart === true) {
        newRow = levels[1].player.y;
        newColumn = levels[1].player.x;
        console.log(`End of level: newRow: ${newRow} newColumn: ${newColumn}`);
      } else if (game.normalLevelStart === true) {
        newRow = levels[2].player.y;
        newColumn = levels[2].player.x;
        console.log(`End of level: newRow: ${newRow} newColumn: ${newColumn}`);
      }

      game.nextLevelScreen();

      // Pausing Timer
      const reachedEndEvent = new Event('reachedEnd');
      window.dispatchEvent(reachedEndEvent);
    } else if (newTile && newTile.classList.contains('path')) {
      const harry = document.getElementById('harry');
      newTile.appendChild(harry);
      r = newRow;
      c = newColumn;
    }
  });

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
    const playerName = prompt('Enter your name:'); // Prompt user for their name
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
      console.log(`You reached the end in ${elapsedTime}`);
      const [minutes, seconds] = elapsedTime.split(':').map(Number);
      // Update the elapsed time on the DOM
      elapsedTimeMinutesElement.textContent = minutes;
      elapsedTimeSecondsElement.textContent = seconds;
      totalElapsedTime += minutes * 60 + seconds;
      // Update the total elapsed time on the DOM
      totalElapsedMinutesElement.textContent = Math.floor(
        totalElapsedTime / 60
      );
      totalElapsedSecondsElement.textContent = totalElapsedTime % 60;
      elapsedTimeNormalMinutesElement.textContent = minutes;
      elapsedTimeNormalSecondsElement.textContent = seconds;
      console.log(
        `Total time to complete all levels: ${formatElapsedTime(
          totalElapsedTime
        )}`
      );
      leaderboard.updateLeaderboard();
    }
  });
};
