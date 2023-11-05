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
    this.isMoving = false;
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
    this.move();
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
            tile.classList.add(`path`);
            tile.classList.add(`row-${r}-column-${c}`);
          } else if (this.levels[i].tiles[r][c] === 1) {
            tile.classList.add(`wall`);
            tile.classList.add(`row-${r}-column-${c}`);
          } else if (this.levels[i].tiles[r][c] === 2) {
            tile.classList.add(`path`);
            tile.classList.add(`start`);
            tile.classList.add(`row-${r}-column-${c}`);
            let startImage = document.createElement('img');
            startImage.src = './images/harry-potter.png';
            startImage.width = '26';
            tile.appendChild(startImage);
            startImage.setAttribute('id', 'harry');
          } else if (this.levels[i].tiles[r][c] === 3) {
            tile.classList.add(`path`);
            tile.classList.add(`end`);
            tile.classList.add(`row-${r}-column-${c}`);
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

  move() {
    let r;
    let c;
    let maxR;
    let maxC;
    const difficulty = this.select.value;

    window.addEventListener('keydown', event => {
      event.preventDefault();
      console.log(event.key);

      switch (difficulty) {
        case 'easy':
          r = 3;
          c = 1;
          maxR = 9;
          maxC = 9;
          break;
        case 'normal':
          r = 3;
          c = 3;
          maxR = 14;
          maxC = 14;
          break;
        case 'hard':
          r = 12;
          c = 16;
          maxR = 24;
          maxC = 24;
          break;
        default:
          return;
      }

      switch (event.key) {
        case 'ArrowUp':
          r -= 1;
          break;
        case 'ArrowDown':
          r += 1;
          break;
        case 'ArrowRight':
          c += 1;
          break;
        case 'ArrowLeft':
          c -= 1;
          break;
      }

      if (r >= 0 && r <= maxR && c >= 0 && c <= maxC) {
        const currentTile = document.querySelector(`.row-${r}-column-${c}`);
        if (currentTile && currentTile.classList.contains('path')) {
          const harry = document.getElementById('harry');
          currentTile.appendChild(harry);
        }
      }
    });
  }

  tryAgain() {
    this.tryAgainButton.addEventListener('click', () => location.reload());
  }

  hidePlayButton() {
    this.playButton.style.display = 'none';
  }
}
