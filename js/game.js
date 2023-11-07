class MazeGame {
  constructor() {
    this.gameIntroText = document.querySelector('.game-intro-text');
    this.introImage = document.getElementById('intro-image');
    this.gameArea = document.getElementById('game-area');
    this.easyGame = document.getElementById('easy-level');
    this.normalGame = document.getElementById('normal-level');
    this.hardGame = document.getElementById('hard-level');
    this.dropdownMenuLevels = document.getElementById('dropdownMenu');
    this.select = document.getElementById('difficulty-dropdown');
    this.playButton = document.getElementById('play-button');
    this.timerArea = document.querySelector('.additional-content');
    this.resetButton = document.getElementById('reset-button');
    this.levels = new Levels().levels;
    this.isMoving = false;
  }

  levelSelection() {
    console.log(this.select.value);

    if (this.playButton.style.display == 'none') {
      this.clearMap();
      this.play();
      this.move();
      this.map();
      this.reset();
    }
  }

  play() {
    this.gameIntroText.style.display = 'none';
    this.introImage.style.display = 'none';
    // this.dropdownMenuLevels.style.display = 'none';
    this.gameArea.style.display = 'flex';
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
            tile.appendChild(startImage);
            startImage.setAttribute('id', 'harry');
          } else if (this.levels[i].tiles[r][c] === 3) {
            tile.classList.add(`path`);
            tile.classList.add(`end`);
            tile.classList.add(`row-${r}-column-${c}`);
            let endImage = document.createElement('img');
            endImage.src = './images/golden-snitch.png';
            tile.appendChild(endImage);
            endImage.setAttribute('id', 'snitch');
          }
          if (i === 0 && this.select.value === 'easy') {
            this.easyGame.appendChild(row);
          } else if (i === 1 && this.select.value === 'normal') {
            this.normalGame.appendChild(row);
          } else if (i === 2 && this.select.value === 'hard') {
            this.hardGame.appendChild(row);
          }
        }
      }
    }
  }

  clearMap() {
    const mazeRow = document.getElementsByClassName('maze-row');
    while (mazeRow.length > 0) {
      mazeRow[0].remove();
    }
    console.log('Maze rows deleted');
  }

  move() {
    let r;
    let c;
    const difficulty = this.select.value;

    switch (difficulty) {
      case 'easy':
        r = 1;
        c = 3;
        break;
      case 'normal':
        r = 3;
        c = 3;
        break;
      case 'hard':
        r = 16;
        c = 12;
        break;
      default:
        return;
    }

    const currentTile = document.querySelector(`.row-${r}-column-${c}`);
    if (currentTile && currentTile.classList.contains('path')) {
      const harry = document.getElementById('harry');
      currentTile.appendChild(harry);
    }

    window.addEventListener('keydown', event => {
      console.log(event.key);
      event.preventDefault();
      let newRow = r;
      let newColumn = c;
      switch (event.key) {
        case 'ArrowUp':
          newRow = r - 1;
          break;
        case 'ArrowDown':
          newRow = r + 1;
          break;
        case 'ArrowRight':
          newColumn = c + 1;
          break;
        case 'ArrowLeft':
          newColumn = c - 1;
          break;
      }

      const newTile = document.querySelector(
        `.row-${newRow}-column-${newColumn}`
      );

      if (newTile && newTile.classList.contains('end')) {
        console.log(`You won!`);
        this.nextLevel();
      }

      if (newTile && newTile.classList.contains('path')) {
        const harry = document.getElementById('harry');
        newTile.appendChild(harry);
        r = newRow;
        c = newColumn;
      }
    });
  }

  nextLevel() {}

  reset() {
    this.resetButton.addEventListener('click', () => location.reload());
  }

  hidePlayButton() {
    this.playButton.style.display = 'none';
  }
}
