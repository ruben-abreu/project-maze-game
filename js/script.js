window.onload = function () {
  const playButton = document.getElementById('play-button');
  const game = new MazeGame();
  const timerDisplay = document.getElementById('timer');
  const mobileUpButton = document.getElementById('up');
  const mobileDownButton = document.getElementById('down');
  const mobileRightButton = document.getElementById('right');
  const mobileLeftButton = document.getElementById('left');
  let r;
  let c;
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

  playButton.addEventListener('click', function () {
    game.play();
    game.map();

    game.move();
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

  mobileUpButton.addEventListener('click', function () {
    console.log('Mobile up');
    let newRow = r;
    let newColumn = c;
    newRow = r - 1;

    const newTile = document.querySelector(
      `.row-${newRow}-column-${newColumn}`
    );

    if (newTile && newTile.classList.contains('end')) {
      console.log(`You won!`);
      this.nextLevelScreen();
      // Pausing Timer
      const reachedEndEvent = new Event('reachedEnd');
      window.dispatchEvent(reachedEndEvent);
      // Resuming Timer
      /*  const timerResumed = new Event('timerResumed');
      window.dispatchEvent(timerResumed); */
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

    if (newTile && newTile.classList.contains('end')) {
      console.log(`You won!`);
      this.nextLevelScreen();
      // Pausing Timer
      const reachedEndEvent = new Event('reachedEnd');
      window.dispatchEvent(reachedEndEvent);
      // Resuming Timer
      /*  const timerResumed = new Event('timerResumed');
      window.dispatchEvent(timerResumed); */
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

    if (newTile && newTile.classList.contains('end')) {
      console.log(`You won!`);
      this.nextLevelScreen();
      // Pausing Timer
      const reachedEndEvent = new Event('reachedEnd');
      window.dispatchEvent(reachedEndEvent);
      // Resuming Timer
      /*  const timerResumed = new Event('timerResumed');
      window.dispatchEvent(timerResumed); */
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

    if (newTile && newTile.classList.contains('end')) {
      console.log(`You won!`);
      this.nextLevelScreen();
      // Pausing Timer
      const reachedEndEvent = new Event('reachedEnd');
      window.dispatchEvent(reachedEndEvent);
      // Resuming Timer
      /*  const timerResumed = new Event('timerResumed');
      window.dispatchEvent(timerResumed); */
    } else if (newTile && newTile.classList.contains('path')) {
      const harry = document.getElementById('harry');
      newTile.appendChild(harry);
      r = newRow;
      c = newColumn;
    }
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

      function formatElapsedTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} minutes and ${remainingSeconds} seconds`;
      }

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
    }
  });
};
