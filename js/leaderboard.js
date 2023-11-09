class Leaderboard {
  constructor() {
    this.updateLeaderboard();
  }

  formatElapsedTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (minutes === 0) {
      return `${remainingSeconds} seconds`;
    } else {
      return `${minutes} minute(s) and ${remainingSeconds} seconds`;
    }
  }

  updateLeaderboard() {
    const leaderboardElement = document.getElementById('leaderboard');

    leaderboardElement.innerHTML = '';

    const topRecords = JSON.parse(localStorage.getItem('totalRecords')) || [];
    const top10Records = topRecords.slice(0, 10);

    top10Records.forEach((record, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `#${index + 1}: ${
        record.name
      } - ${this.formatElapsedTime(record.time)}`;
      leaderboardElement.appendChild(listItem);
    });
  }
}
