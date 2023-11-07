class Timer {
  constructor(selectValue, timerDisplayElement) {
    this.fullscreenImage = document.getElementById('game-over-image');
    this.selectValue = selectValue;
    this.timerDisplayElement = timerDisplayElement;
    this.targetTime = this.calculateTargetTime(selectValue);
    this.currentTime = this.targetTime;
    this.timerInterval = null;
    this.gameOverContainer = document.querySelector('.game-over-container');
    this.tryAgainButton = document.getElementById('try-again-button');
    this.startTime = 0;
    this.remainingTime = this.targetTime;
  }

  getElapsedTimeInMinutesAndSeconds() {
    const currentTime = Date.now();
    const elapsedMilliseconds = currentTime - this.startTime;
    const elapsedMinutes = Math.floor(elapsedMilliseconds / 60000);
    const elapsedSeconds = Math.floor((elapsedMilliseconds % 60000) / 1000);
    const formattedMinutes = String(elapsedMinutes).padStart(2, '0');
    const formattedSeconds = String(elapsedSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  calculateTargetTime(selectValue) {
    switch (selectValue) {
      case 'easy':
        return 3 * 60 * 1000; // 3 minutes
      case 'normal':
        return 2 * 60 * 1000; // 2 minutes
      case 'hard':
        return 1 * 60 * 1000; // 1 minute
      default:
        return 0;
    }
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.currentTime / 60000);
    const seconds = Math.floor((this.currentTime % 60000) / 1000);
    const timerDisplay = `Timer: ${minutes}:${String(seconds).padStart(
      2,
      '0'
    )}`;
    this.timerDisplayElement.textContent = timerDisplay;

    if (this.currentTime === 0) {
      this.stopTimer();
      this.showGameOver();
    }

    this.currentTime -= 1000; // Decrement by 1 second
  }

  startTimer() {
    this.stopTimer(); // Clear any existing timer
    this.startTime = Date.now(); // Set the starting time
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => this.updateTimerDisplay(), 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
      this.remainingTime = this.currentTime;
    }
  }

  showGameOver() {
    this.fullscreenImage.style.display = 'block';
    this.gameOverContainer.style.display = 'block';
    this.tryAgainButton.addEventListener('click', () => location.reload());
  }

  resumeTimer() {
    if (!this.timerInterval) {
      this.startTime = Date.now();
      this.timerInterval = setInterval(() => this.updateTimerDisplay(), 1000);
    }
  }
}
