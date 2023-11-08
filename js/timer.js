class Timer {
  constructor(timerDisplayElement) {
    this.timerDisplayElement = timerDisplayElement;
    this.fullscreenImage = document.getElementById('game-over-image');
    this.targetTime = 3 * 60 * 1000; // 3 minutes
    this.currentTime = this.targetTime;
    this.timerInterval = null;
    this.gameOverContainer = document.querySelector('.game-over-container');
    this.tryAgainButton = document.getElementById('try-again-button');
    this.startTime = 0;
    this.remainingTime = this.targetTime;
    this.isPaused = false;
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
    if (this.timerInterval) {
      return;
    }
    this.startTime = Date.now() - (this.targetTime - this.remainingTime);
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => this.updateTimerDisplay(), 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      /*     clearInterval(this.timerInterval); */
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
    if (this.isPaused) {
      this.isPaused = false;
      this.startTime = Date.now() - (this.targetTime - this.remainingTime);
      this.timerInterval = setInterval(() => this.updateTimerDisplay(), 1000);
    }
  }
  pauseTimer() {
    this.isPaused = true;
    clearInterval(this.timerInterval);
  }
}
