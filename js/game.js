class MazeGame {
  constructor() {
    this.gameIntroText = document.querySelector('.game-intro-text');
    this.introImage = document.getElementById('intro-image');
    this.mazeMap = document.getElementById('game-area');
    this.easyGame = document.getElementById('easy-level');
    this.normalGame = document.getElementById('normal-level');
    this.hardGame = document.getElementById('hard-level');
    this.select = document.getElementById('difficulty-dropdown');
    this.playButton = document.getElementById('play-button');
    this.timerArea = document.querySelector('.additional-content');
    this.tryAgainButton = document.getElementById('try-again-button');
    this.levels = new Levels().levels;
  }

  levelSelection() {
    console.log(this.select.value);
    switch (this.select.value) {
      case 'easy':
        this.easyGame.style.display = 'block';
        this.normalGame.style.display = 'none';
        this.hardGame.style.display = 'none';
        break;
      case 'normal':
        this.normalGame.style.display = 'block';
        this.easyGame.style.display = 'none';
        this.hardGame.style.display = 'none';
        break;
      case 'hard':
        this.hardGame.style.display = 'block';
        this.easyGame.style.display = 'none';
        this.normalGame.style.display = 'none';
        break;
    }
  }

  play() {
    this.gameIntroText.style.display = 'none';
    this.introImage.style.display = 'none';
    this.mazeMap.style.display = 'flex';
    this.timerArea.style.display = 'flex';

    switch (this.select.value) {
      case 'easy':
        this.easyGame.style.display = 'block';
        this.normalGame.style.display = 'none';
        this.hardGame.style.display = 'none';
        break;
      case 'normal':
        this.normalGame.style.display = 'block';
        this.easyGame.style.display = 'none';
        this.hardGame.style.display = 'none';
        break;
      case 'hard':
        this.hardGame.style.display = 'block';
        this.easyGame.style.display = 'none';
        this.normalGame.style.display = 'none';
        break;
    }
    this.map();
  }

  map() {
    for (let i = 0; i < this.levels.length; i++) {
      for (let r = 0; r < this.levels[i].tiles.length; r++) {
        let row = document.createElement('div');
        row.classList.add('maze-row');
        for (let c = 0; c < this.levels[i].tiles[r].length; c++) {
          let tile = document.createElement('div');
          row.appendChild(tile);
          if (this.levels[i].tiles[r][c] === 0) {
            tile.classList.add('path');
          } else if (this.levels[i].tiles[r][c] === 1) {
            tile.classList.add('wall');
          } else if (this.levels[i].tiles[r][c] === 2) {
            tile.classList.add('path');
            tile.classList.add('start');
            let startImage = document.createElement('img');
            startImage.src = './images/harry-potter.png';
            startImage.width = '26';
            tile.appendChild(startImage);
          } else if (this.levels[i].tiles[r][c] === 3) {
            tile.classList.add('path');
            tile.classList.add('end');
            let endImage = document.createElement('img');
            endImage.src = './images/golden-snitch.png';
            endImage.width = '26';
            tile.appendChild(endImage);
          }
          if (i === 0) {
            this.easyGame.appendChild(row);
          } else if (i === 1) {
            this.normalGame.appendChild(row);
          } else if (i === 2) {
            this.hardGame.appendChild(row);
          }
        }
      }
    }
  }

  tryAgain() {
    this.tryAgainButton.addEventListener('click', () => location.reload());
  }

  hidePlayButton() {
    this.playButton.style.display = 'none';
  }
}
