class Leaderboard {
  constructor() {
    this.updateLeaderboard();
  }

  formatElapsedTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minute(s) and ${remainingSeconds} seconds`;
  }

  updateLeaderboard() {
    const totalTimes = JSON.parse(localStorage.getItem('totalTimes')) || [];
    totalTimes.sort((a, b) => a - b);
    const leaderboardElement = document.getElementById('leaderboard');
    if (leaderboardElement) {
      leaderboardElement.innerHTML = '<h2>Leaderboard</h2>';
      const top10Times = totalTimes.slice(0, 10);
      top10Times.forEach((time, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `#${index + 1}: ${this.formatElapsedTime(time)}`;
        leaderboardElement.appendChild(listItem);
      });
    }
  }
}
