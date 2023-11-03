const gameIntroText = document.querySelector('.game-intro-text');
const introImage = document.getElementById('intro-image');
const mazeMap = document.getElementById('game-area');
const easyGame = document.getElementById('easy-level');
const normalGame = document.getElementById('normal-level');
const hardGame = document.getElementById('hard-level');
const select = document.getElementById('difficulty');
const playButton = document.getElementById('play');
const timerArea = document.querySelector('.additional-content');
const tryAgainButton = document.getElementById('try-again');
const timer = document.getElementById('timer');

const levels = [];

levels[0] = {
  columns: 10,
  rows: 10,
  tileSize: 30,
  // 0 - path
  // 1 - wall
  // 2 - starting point
  // 3 - end goal
  tiles: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 2, 1, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 3, 1, 0, 0, 1],
    [1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],

  getTile(col, row) {
    return this.tiles[row * map.columns + col];
  },

  player: {
    x: 3,
    y: 1,
  },

  goal: {
    x: 5,
    y: 4,
  },
};

levels[1] = {
  columns: 15,
  rows: 15,
  tileSize: 30,

  tiles: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 2, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 3, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],

  getTile(col, row) {
    return this.tiles[row * map.columns + col];
  },

  player: {
    x: 3,
    y: 3,
  },

  goal: {
    x: 5,
    y: 11,
  },
};

levels[2] = {
  columns: 25,
  rows: 25,
  tileSize: 30,

  tiles: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
    [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1],
    [1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 2, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],

  getTile(col, row) {
    return this.tiles[row * map.columns + col];
  },

  player: {
    x: 12,
    y: 16,
  },

  goal: {
    x: 20,
    y: 23,
  },
};

for (let i = 0; i < levels.length; i++) {
  for (let r = 0; r < levels[i].tiles.length; r++) {
    let row = document.createElement('div');
    row.classList.add('maze-row');
    for (let c = 0; c < levels[i].tiles[r].length; c++) {
      let tile = document.createElement('div');
      row.appendChild(tile);
      if (levels[i].tiles[r][c] === 0) {
        tile.classList.add('path');
      } else if (levels[i].tiles[r][c] === 1) {
        tile.classList.add('wall');
      } else if (levels[i].tiles[r][c] === 2) {
        tile.classList.add('path');
        tile.classList.add('start');

        let startImage = document.createElement('img');
        startImage.src = './images/harry-potter.png';
        startImage.width = '26';
        startImage.style.position = 'absolute';
        tile.style.position = 'relative';
        tile.appendChild(startImage);

        // Harry's initial position
        let positionX = 0;
        let positionY = 0;

        function updatePosition() {
          startImage.style.left = positionX + 'px';
          startImage.style.top = positionY + 'px';
        }

        document.addEventListener('keydown', function (event) {
          const step = 10; // Number of pixels to move

          switch (event.key) {
            case 'w':
            case 'W':
              positionY -= step;
              break;
            case 'S':
            case 's':
              positionY += step;
              break;
            case 'a':
            case 'A':
              positionX -= step;
              break;
            case 'd':
            case 'D':
              positionX += step;
              break;
          }
          updatePosition();
        });
        updatePosition();
      } else if (levels[i].tiles[r][c] === 3) {
        tile.classList.add('path');
        tile.classList.add('end');
        let endImage = document.createElement('img');
        endImage.src = './images/golden-snitch.png';
        endImage.width = '26';
        tile.appendChild(endImage);
      }
      if (i === 0) {
        easyGame.appendChild(row);
      } else if (i === 1) {
        normalGame.appendChild(row);
      } else if (i === 2) {
        hardGame.appendChild(row);
      }
    }
  }
}

select.addEventListener('change', function () {
  console.log(select.value);
  switch (select.value) {
    case 'easy':
      easyGame.style.display = 'block';
      normalGame.style.display = 'none';
      hardGame.style.display = 'none';
      break;
    case 'normal':
      normalGame.style.display = 'block';
      easyGame.style.display = 'none';
      hardGame.style.display = 'none';
      break;
    case 'hard':
      hardGame.style.display = 'block';
      easyGame.style.display = 'none';
      normalGame.style.display = 'none';
      break;
  }
});

let timerInterval;

playButton.addEventListener('click', function () {
  gameIntroText.style.display = 'none';
  introImage.style.display = 'none';
  mazeMap.style.display = 'flex';
  timerArea.style.display = 'flex';

  // Timer

  let targetTime;
  if (select.value === 'easy') {
    targetTime = 5 * 60 * 1000; //minutes, seconds, milliseconds
  } else if (select.value === 'normal') {
    targetTime = 2 * 60 * 1000;
  } else if (select.value === 'hard') {
    targetTime = 1 * 60 * 1000;
  }
  let currentTime = targetTime;
  function updateTimerDisplay() {
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const timerDisplay = `Timer: ${minutes}:${seconds
      .toString()
      .padStart(2, '0')}`;
    timer.textContent = timerDisplay;

    if (currentTime === 0) {
      clearInterval(timerInterval);
      alert('Time is up, you lost!');
    }

    currentTime -= 1000; // Decrement by 1 second
  }

  // Check if the timer is already running and clear it before starting a new one
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  // Reset the timer to targetTime
  currentTime = targetTime;

  updateTimerDisplay();
  timerInterval = setInterval(updateTimerDisplay, 1000);

  switch (select.value) {
    case 'easy':
      easyGame.style.display = 'block';
      normalGame.style.display = 'none';
      hardGame.style.display = 'none';
      break;
    case 'normal':
      normalGame.style.display = 'block';
      easyGame.style.display = 'none';
      hardGame.style.display = 'none';
      break;
    case 'hard':
      hardGame.style.display = 'block';
      easyGame.style.display = 'none';
      normalGame.style.display = 'none';
      break;
  }
});

tryAgainButton.addEventListener('click', () => location.reload());
