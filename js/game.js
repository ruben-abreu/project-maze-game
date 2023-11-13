class MazeGame {
  constructor() {
    this.gameIntroText = document.querySelector('.game-intro-text');
    this.introImage = document.getElementById('intro-image');
    this.gameSpace = document.querySelector('.game-space');
    this.gameArea = document.getElementById('game-area');
    this.easyGame = document.getElementById('easy-level');
    this.normalGame = document.getElementById('normal-level');
    this.hardGame = document.getElementById('hard-level');
    this.playButton = document.getElementById('play-button');
    this.timerArea = document.querySelector('.additional-content');
    this.resetButton = document.getElementById('reset-button');
    this.levels = new Levels().levels;
    this.easyLevelStart = false;
    this.normalLevelStart = false;
    this.hardLevelStart = false;
    this.middleScreen = document.getElementById('middle-screen');
    this.firstLevelCompleted = document.getElementById('first-level-completed');
    this.secondLevelCompleted = document.getElementById(
      'second-level-completed'
    );

    //this.body = document.querySelector('body');
    this.remainingTime = 2 * 60 * 1000;
    this.elapsedTimeEasy = document.getElementById('elapsed-time');
    this.elapsedTimeNormal = document.getElementById('elapsed-time-normal');
    this.mathGame = document.getElementById('math');
  }

  levelReset() {
    this.easyLevelStart = false;
    this.normalLevelStart = false;
    this.hardLevelStart = false;
    this.clearMap();
  }

  play() {
    this.easyLevelStart = true;
    this.gameIntroText.style.display = 'none';
    this.introImage.style.display = 'none';
    this.gameArea.style.display = 'flex';
    this.timerArea.style.display = 'flex';

    this.easyGame.style.display = 'block';
    this.normalGame.style.display = 'none';
    this.hardGame.style.display = 'none';
    console.log(
      `Game started, Easy: ${this.easyLevelStart}, Normal: ${this.normalLevelStart}, Hard: ${this.hardLevelStart}`
    );
  }

  map() {
    for (let i = 0; i < this.levels.length; i++) {
      for (let r = 0; r < this.levels[i].tiles.length; r++) {
        let row = document.createElement('div');
        row.classList.add('maze-row');
        for (let c = 0; c < this.levels[i].tiles[r].length; c++) {
          if (i === 0 && this.easyLevelStart === true) {
            this.easyGame.appendChild(row);
          } else if (i === 1 && this.normalLevelStart === true) {
            this.normalGame.appendChild(row);
          } else if (i === 2 && this.hardLevelStart === true) {
            this.hardGame.appendChild(row);
          }
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
            startImage.src = 'images/harry-potter.png';
            startImage.setAttribute('id', 'harry');
            tile.appendChild(startImage);
          } else if (this.levels[i].tiles[r][c] === 3) {
            tile.classList.add(`path`);
            tile.classList.add(`end`);
            tile.classList.add(`row-${r}-column-${c}`);
            let endImage = document.createElement('img');
            endImage.src = 'images/golden-snitch.png';
            endImage.setAttribute('id', 'snitch');
            tile.appendChild(endImage);
          } else if (this.levels[i].tiles[r][c] === 4) {
            tile.classList.add(`path`);
            tile.classList.add(`potion`);
            tile.classList.add(`row-${r}-column-${c}`);
            let potion = document.createElement('img');
            potion.src = 'images/potion.png';
            potion.setAttribute('id', 'potion');
            tile.appendChild(potion);
          } else if (this.levels[i].tiles[r][c] === 5) {
            tile.classList.add(`path`);
            tile.classList.add(`poison`);
            tile.classList.add(`row-${r}-column-${c}`);
            let poison = document.createElement('img');
            poison.src = 'images/poison.png';
            poison.setAttribute('id', 'poison');
            tile.appendChild(poison);
          }
        }
      }
    }
  }

  clearMap() {
    const harry = document.getElementById('harry');
    harry.remove();
    const mazeRow = document.getElementsByClassName('maze-row');
    while (mazeRow.length > 0) {
      mazeRow[0].remove();
    }
    console.log('Maze rows deleted');
  }

  nextLevelScreen() {
    console.log('Here from middle screen');
    if (this.easyLevelStart === true) {
      this.levelReset();
      this.gameArea.style.display = 'none';
      this.timerArea.style.display = 'none';
      this.middleScreen.style.display = 'block';
      this.firstLevelCompleted.style.display = 'block';
      this.normalLevelStart = true;
      this.elapsedTimeNormal.style.display = 'none';
    } else if (this.normalLevelStart === true) {
      this.levelReset();
      this.gameArea.style.display = 'none';
      this.timerArea.style.display = 'none';
      this.middleScreen.style.display = 'block';
      this.secondLevelCompleted.style.display = 'block';
      this.hardLevelStart = true;
      this.elapsedTimeEasy.style.display = 'none';
      this.elapsedTimeNormal.style.display = 'block';
    } else if (this.hardLevelStart === true) {
      this.levelReset();
      this.gameSpace.style.display = 'none';
      // this.body.style.backgroundImage = 'url(images/winner-image.png)';
      this.mathGame.style.display = 'block';
      // this.winnerScreen.style.display = 'block';
      this.elapsedTimeEasy.style.display = 'none';
      this.elapsedTimeNormal.style.display = 'none';
    }

    console.log(
      `Middle screen, Easy: ${this.easyLevelStart}, Normal: ${this.normalLevelStart}, Hard: ${this.hardLevelStart}`
    );
  }

  nextLevelStart() {
    console.log(
      `Next level, Easy: ${this.easyLevelStart}, Normal: ${this.normalLevelStart}, Hard: ${this.hardLevelStart}`
    );
    this.gameArea.style.display = 'flex';
    this.timerArea.style.display = 'flex';
    this.easyGame.style.display = 'none';

    if (this.normalLevelStart === true) {
      this.middleScreen.style.display = 'none';
      this.firstLevelCompleted.style.display = 'none';
      this.normalGame.style.display = 'block';
      this.hardGame.style.display = 'none';
    } else if (this.hardLevelStart === true) {
      this.middleScreen.style.display = 'none';
      this.secondLevelCompleted.style.display = 'none';
      this.hardGame.style.display = 'block';
      this.normalGame.style.display = 'none';
    }

    this.map();
    this.reset();
  }

  reset() {
    this.resetButton.addEventListener('click', () => location.reload());
  }

  hidePlayButton() {
    this.playButton.style.display = 'none';
  }
}
