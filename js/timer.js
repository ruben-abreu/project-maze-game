class Timer {
  constructor(selectValue, timerDisplayElement) {
    this.fullscreenImage = document.getElementById('game-over-image');
    this.selectValue = selectValue;
    this.timerDisplayElement = timerDisplayElement;
    this.targetTime = this.calculateTargetTime(selectValue);
    this.currentTime = this.targetTime;
    this.timerInterval = null;
  }

  calculateTargetTime(selectValue) {
    switch (selectValue) {
      case 'easy':
        return 5 * 60 * 1000; // 5 minutes
      case 'normal':
        return 2 * 60 * 1000; // 2 minutes
      case 'hard':
        return 0 * 60 * 1000; // 1 minute
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
      this.fullscreenImage.style.display = 'block';
    }

    this.currentTime -= 1000; // Decrement by 1 second
  }
  startTimer() {
    this.stopTimer(); // Clear any existing timer
    this.currentTime = this.targetTime;
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => this.updateTimerDisplay(), 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}
